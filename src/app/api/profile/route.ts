import prisma from "@/libs/prisma";
import Joi from "joi";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { ProfileType } from "@/types/profileType";
import { authMiddleware } from "@/libs/authMiddleware";


export async function POST(req: Request) {
  try {
    const auth= authMiddleware(req)
    if(auth)return auth
    const profile: Omit<ProfileType, "id"> = await req.json();

    const resProfile = await prisma.profile.create({ data: profile });

    return NextResponse.json({
      status: true,
      message: "Profile created successfully",
      data: resProfile,
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
export async function GET(req: Request) {
    try {
      const resProfiles = await prisma.profile.findMany();
      return NextResponse.json({
        status: true,
        message: "Profiles fetched successfully",
        data: resProfiles,
      });
    } catch (error) {
      console.error("Error creating profile:", error);
      return new NextResponse("Internal error", { status: 500 });
    }
}
