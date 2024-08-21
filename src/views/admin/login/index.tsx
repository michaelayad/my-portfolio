/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/views/admin/login/components/loginForm";
import LoginMd from "./images/admin/login-md.svg";
export default function Login() {
  return (
    <div className=" w-full min-h-lvh flex flex-col md:flex-row bg-white-bg dark:bg-dark-bg ">
      <div className="w-full md:w-[50%] order-2 md:order-1 min-h-full bg-white-bg dark:bg-dark-bg flex flex-col md:py-10 gap-5 items-center">
        <LoginForm />
      </div>
      <div className="w-full md:w-[50%]  order-1 md:order-2 min-h-full bg-white-bg  md:bg-primary-bg dark:bg-dark-bg md:dark:bg-dark-hover-bg flex flex-col md:y-10 gap-5 items-center">
        <Link
          href="/"
          className={clsx(
            "font-kodeMono text-6xl text-primary font-black capitalize tracking-tighter skew-y-3 hover:text-hover hover:-skew-y-3 transition duration-300 ease-in-out py-10"
          )}
        >
          MAiklelo
        </Link>
        <h1 className="mx-auto font-kodeMono text-xl md:text-5xl font-bold  md:text-white-bg text-center">
          welcome Back !
        </h1>
        <div className="h-0 md:h-max  w-[70%] max-w-[250px] md:max-w-[500px]">
          {" "}
          <img
            src="/images/admin/login-md.svg"
            alt="Login Illustration"
            className="h-full w-full "
          />
        </div>
      </div>
    </div>
  );
}
