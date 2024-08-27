import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const profileId = searchParams.get("profileId");

    if (!profileId || isNaN(Number(profileId))) {
      return NextResponse.json({
        status: false,
        message: "Profile ID is required and must be a valid number.",
      });
    }

    const socialMedias = await prisma.social_Media.findMany({
      where: { profileId: parseInt(profileId) },
    });

    if (!socialMedias || socialMedias.length === 0) {
      return NextResponse.json({
        status: false,
        message: "No social media profiles found for the given Profile ID.",
      });
    }

    return NextResponse.json({
      status: true,
      message: "Social media profiles fetched successfully",
      data: socialMedias,
    });
  } catch (error) {
    console.error("Error fetching social media profiles:", error);
    return NextResponse.json({
      status: false,
      message: "An error occurred while fetching the social media profiles",
    });
  }
}
