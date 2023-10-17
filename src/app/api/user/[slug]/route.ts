import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Get User by params
export async function GET({ params }: { params: { slug: string } }) {
  const email = params.slug;

  try {
    const userByParam = await prisma.user.findUnique({
      where: { email: email },
      include: {
        todos: true,
      },
    });

    return NextResponse.json(userByParam, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: "No User Found", error }, { status: 400 });
  }
}

// Update User by params
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const email = params.slug;
  const { username, password } = await request.json();

  try {
    const updateUser = await prisma.user.update({
      where: { email: email },
      data: { username, password },
    });

    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: "No Todo Found", error }, { status: 400 });
  }
}

// Delete User by params
export async function DELETE({ params }: { params: { slug: string } }) {
  const email = params.slug;

  try {
    const deleteUser = await prisma.user.delete({
      where: { email: email },
    });

    return NextResponse.json(
      { msg: `${deleteUser.username} has been successfully deleted` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ data: "No User Found", error }, { status: 400 });
  }
}
