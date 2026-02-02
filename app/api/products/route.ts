import { NextRequest, NextResponse } from "next/server";
import { schema } from "./scheme";

export function GET(request: NextRequest) {
  return NextResponse.json([
    { id: 1, name: "Milk", price: 3.75 },
    { id: 2, name: "Sugar", price: 0.5 },
    { id: 3, name: "Bread", price: 1.5 },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  const validData = validation.data;

  return NextResponse.json({
    id: 3,
    name: validData.name,
    price: validData.price,
  });
}
