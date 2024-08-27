import { authMiddleware } from "@/libs/authMiddleware";
import prisma from "@/libs/prisma";
import { SocialMediaType } from "@/types/socialMediaType";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({
        status: false,
        message: "social media id ID is required and must be a valid number.",
      });
    }

    const socialMedia = await prisma.social_Media.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!socialMedia) {
      return NextResponse.json({
        status: false,
        message: "Social media not found",
      });
    }

    return NextResponse.json({
      status: true,
      message: "Social media fetched successfully",
      data: socialMedia,
    });
  } catch (error) {
    console.error("Error fetching social media:", error);
    return NextResponse.json({
      status: false,
      message: "An error occurred while fetching the social media ",
    });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const auth = authMiddleware(req);
    if (auth) return auth;
    const reqData: Omit<SocialMediaType, "id"> = await req.json();

    if (!id || isNaN(Number(id))) {
      return NextResponse.json({
        status: false,
        message: "social media id ID is required and must be a valid number.",
      });
    }

    const socialMedia = await prisma.social_Media.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!socialMedia) {
      return NextResponse.json({
        status: false,
        message: "social media not found",
      });
    }

    const editedSocial = await prisma.social_Media.update({
      where: { id: parseInt(id, 10) },
      data: reqData,
    });

    return NextResponse.json({
      status: true,
      message: "Social media updated successfully",
      data: editedSocial,
    });
  } catch (error) {
    console.error("Error fetching social media:", error);
    return NextResponse.json({
      status: false,
      message: "An error occurred while fetching the social media ",
    });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    const auth = authMiddleware(req);
    if (auth) return auth;

    if (!id || isNaN(Number(id))) {
        return NextResponse.json({
          status: false,
          message: "social media id ID is required and must be a valid number.",
        });
      }

    const socialMedia = await prisma.social_Media.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!socialMedia) {
      return NextResponse.json({
        status: false,
        message: "Social media not found",
      });
    }

    const editedSocial = await prisma.social_Media.delete({
      where: { id: parseInt(id, 10) },
    });

    return NextResponse.json({
      status: true,
      message: "Social media deleted successfully",
      data: editedSocial,
    });
  } catch (error) {
    console.error("Error fetching social media:", error);
      return NextResponse.json({
        status: false,
        message: "An error occurred while fetching the social media ",
      });
  }
}
