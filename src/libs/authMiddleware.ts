import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({
      status: false,
      message: "Unauthorized",
      code: 401,
    });
  }

  try {
    // Verify the token (you should use your secret key here)
    jwt.verify(token, "maikoool");
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Unauthorized",
      code: 401,
    });
  }

  return null; // No error, proceed with request
}
