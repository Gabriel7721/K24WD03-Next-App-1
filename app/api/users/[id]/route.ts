import { NextRequest, NextResponse } from "next/server";
import { schema } from "../scheme";
import { prisma } from "@/prisma/lib/prisma";

interface Props {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    return NextResponse.json({ message: "User Not Found" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });
  const validData = validation.data;
  
  const email = await prisma.user.findUnique({
    where: { email: validData.email },
  });

  if (email)
    return NextResponse.json(
      { error: "Email already existed" },
      { status: 400 },
    );

  const newUser = await prisma.user.create({
    data: {
      name: validData.name,
      email: validData.email,
    },
  });

  return NextResponse.json({ id: 3, name: validData.name });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  });

  if (!user) {
    return NextResponse.json({ message: "User Not Found" });
  }

  return new NextResponse(null, { status: 204 });
}
