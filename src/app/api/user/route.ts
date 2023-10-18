//user route

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Create User
export async function POST(request: Request) {
  const { username, email, password } = await request.json();

  const userExist = await prisma.user.findFirst({
    where: { email: email },
  });
  if (userExist) {
    return NextResponse.json({ data: "Email Already Exists" }, { status: 400 });
  }

  try {
    const createdUser = await prisma.user.create({
      data: { username, email, password },
    });

    return NextResponse.json(createdUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: "No Todo Found", error }, { status: 400 });
  }
}

// Get All Users
export async function GET() {
  try {
    const allUsers = await prisma.user.findMany();

    return NextResponse.json(allUsers, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: "No User Found", error }, { status: 400 });
  }
}
