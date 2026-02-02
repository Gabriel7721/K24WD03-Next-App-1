import { NextRequest, NextResponse } from "next/server";
import { schema } from "./scheme";
import { prisma } from "@/prisma/lib/prisma";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const validData = validation.data;

  const name = await prisma.user.findUnique({
    where: { name: validData.name },
  });

  if (name)
    return NextResponse.json(
      { error: "Name already existed" },
      { status: 400 },
    );

  const newUser = await prisma.user.create({
    data: {
      name: validData.name,
      price: validData.price,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
