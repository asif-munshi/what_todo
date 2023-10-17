// todo route

import { useSession } from "next-auth/react";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Create Todo
export async function POST(request: Request) {
  const { title, description } = await request.json();

  const { data: session } = useSession();
  const email: string =
    session?.user?.email !== undefined && session?.user?.email !== null
      ? session?.user?.email
      : "";

  try {
    const createdTodo = await prisma.todo.create({
      data: {
        title,
        description,
        author: { connect: { email: email } },
      },
    });

    return NextResponse.json(createdTodo, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: "No Todo Found", error }, { status: 400 });
  }
}

// Get All Todos
export async function GET() {
  try {
    const allTodos = await prisma.todo.findMany();

    return NextResponse.json(allTodos, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { data: "No Todos Found", error },
      { status: 400 }
    );
  }
}
