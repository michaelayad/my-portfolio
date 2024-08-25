"use client";
import { useRouter } from "next/navigation";
import { UserType } from "@/types/userType";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

// Define the Joi schema
const schema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.email": "Please enter a valid email address.",
      "any.required": "Email is required.",
      "string.empty": "Email cannot be empty.",
    }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long.",
    "any.required": "Password is required.",
    "string.empty": "Password cannot be empty.",
  }),
});

export default function LoginForm() {
  const router = useRouter(); // Initialize useRouter
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>({
    mode: "onChange",
    resolver: joiResolver(schema),
  });

  const onSubmit: SubmitHandler<UserType> = async (data) => {
    // Default to admin if no redirect query

    try {
      const result = await signIn("credentials", {
        redirect: false,
        ...data,
      });

      if (result?.error) {
        // Handle error message from the result
        toast.error(result.error);
      } else if (result?.ok) {
        // Handle successful sign-in
        toast.success("Login successfull!");
        router.push("/admin");
        // Redirect or other actions
      }
    } catch (error) {
      // Handle unexpected errors
      toast.error("An unexpected error occurred");
    }
  };

  return (
    <div className="max-w-[500px] w-full h-full flex flex-col items-center justify-center">
      <h1 className="mx-auto font-kodeMono text-5xl font-bold text-primary text-center">
        Login !
      </h1>
      <form
        className="py-10 w-full px-5 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white-bg dark:bg-dark-bg border border-primary-lightest text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5"
            placeholder="write your email"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-white-bg dark:bg-dark-bg border border-primary-lightest text-sm rounded-lg focus:ring-primary focus:outline-primary focus:border-primary block w-full p-2.5"
            placeholder="write your password"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="text-white mx-auto bg-primary hover:bg-hover focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-lg px-16 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
