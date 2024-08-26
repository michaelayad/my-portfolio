import { authMiddleware } from "@/libs/authMiddleware";
import prisma from "@/libs/prisma";
import { SocialMediaType } from "@/types/socialMediaType";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const auth = authMiddleware(req);
    if (auth) return auth;
    const media: Omit<SocialMediaType, "id"> = await req.json();
    if (!media.profileId) {
      return NextResponse.json(
        {
          status: false,
          message: "Missing required fields: profileId are required.",
        },
        { status: 200 }
      );
    }

    const profileExists = await prisma.profile.findUnique({
      where: { id: media.profileId },
    });

    if (!profileExists) {
      return NextResponse.json({
        status: false,
        message: "Profile ID not found. Please provide a valid profileId.",
      });
    }

    const resMedia = await prisma.social_Media.create({ data: media });

    return NextResponse.json({
      status: true,
      message: "Social media created successfully",
      data: resMedia,
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    return NextResponse.json({
      status: false,
      message: "Failed to create social media. Please try again.",
      error: error || "Unknown error",
    });
  }
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const profileId = searchParams.get("profileId");
    const pageNumber = parseInt(searchParams.get("pageNumber") || "1");
    const perPage = parseInt(searchParams.get("perPage") || "10");
    const skip = (pageNumber - 1) * perPage;

    const where = profileId ? { profileId: parseInt(profileId) } : {};

    // Get the total count of items for the given profileId
    const totalItems = await prisma.social_Media.count({ where });

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalItems / perPage);

    // Ensure pageNumber is within bounds
    const currentPage = Math.min(Math.max(pageNumber, 1), totalPages);

    // Fetch the paginated data
    const resSocialMedias = await prisma.social_Media.findMany({
      where,
      skip: Math.max((currentPage - 1) * perPage,0),
      take: perPage,
    });

    return NextResponse.json({
      status: true,
      message: "Social media profiles fetched successfully",
      data: resSocialMedias,
      pagination: {
        currentPage,
        totalPages,
        pageCount:resSocialMedias.length,
        totalItems,
      },
    });
  } catch (error) {
    console.error("Error fetching social media profiles:", error);
    return NextResponse.json({
      status: false,
      message: "An error occurred while fetching the social media profiles",
    });
  }
}
