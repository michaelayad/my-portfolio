import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { authMiddleware } from "@/libs/authMiddleware";
import { ProfileType } from "@/types/profileType";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extract the profile ID from the request URL
    const { id } = params;

    if (!id|| isNaN(Number(id))) {
      return NextResponse.json({
        status: false,
        message: "Profile ID is required and must be a valid number.",
      });
    }

    // Fetch the profile from the database
    const profile = await prisma.profile.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!profile) {
      return NextResponse.json({
        status: false,
        message: "Profile not found",
      });
    }

    return NextResponse.json({
      status: true,
      message: "Profile fetched successfully",
      data: profile,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      {
        status: false,
        message: "Internal error",
      },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extract the profile ID from the request URL
    const { id } = params;

    const auth = authMiddleware(req);
    if (auth) return auth;
    const reqData: Omit<ProfileType, "id"> = await req.json();

    if (!id|| isNaN(Number(id))) {
      return NextResponse.json({
        status: false,
        message: "Profile ID is required and must be a valid number.",
      });
    }

    // Fetch the profile from the database
    const profile = await prisma.profile.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!profile) {
      return NextResponse.json({
        status: false,
        message: "Profile not found",
      });
    }

    const editedProfile = await prisma.profile.update({
      where: { id: parseInt(id, 10) },
      data: reqData,
    });

    return NextResponse.json({
      status: true,
      message: "Profile updated successfully",
      data: editedProfile,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json(
      {
        status: false,
        message: "Internal error",
      },
      { status: 500 }
    );
  }
}


export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Extract the profile ID from the request URL
    const { id } = params;

    const auth = authMiddleware(req);
    if (auth) return auth;

    if (!id|| isNaN(Number(id))) {
      return NextResponse.json({
        status: false,
        message: "Profile ID is required and must be a valid number.",
      });
    }
    // Fetch the profile from the database
    const profile = await prisma.profile.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!profile) {
      return NextResponse.json({
        status: false,
        message: "Profile not found",
      });
    }

    const editedProfile = await prisma.profile.delete({
      where: { id: parseInt(id, 10) },
    });

    return NextResponse.json({
      status: true,
      message: "Profile deleted successfully",
      data: editedProfile,
    });
  } catch (error) {
    console.error("Error fetching profile:", error);
    return NextResponse.json({
      status: false,
      message: "An error occurred while deleting profile",
    });
  }
}
