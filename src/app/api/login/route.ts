import prisma from "@/libs/prisma";
import Joi from "joi";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const schema = Joi.object({
  email: Joi.string().email().required().messages({
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

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const { error } = schema.validate({ email, password });

    if (error) {
      return NextResponse.json({
        status: false,
        message: error.details[0].message,
      });
    }

    const user = await prisma.admin.findFirst({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({
        status: false,
        message: "Account not found with this email",
      });
    }

    if (user.password !== password) {
      return NextResponse.json({
        status: false,
        message: "Incorrect password. Please try again !",
      });
    }
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      "maikoool",
      { expiresIn: "1d" }
    );
    return NextResponse.json({
      status: true,
      message: "Login successfull!",
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
        token: token,
      },
    });
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}
