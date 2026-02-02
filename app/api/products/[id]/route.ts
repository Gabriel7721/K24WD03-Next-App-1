import { NextRequest, NextResponse } from "next/server";
import { schema } from "../scheme";

interface Props {
  params: Promise<{ id: number }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ message: "Product Not Found" });
  }
  return NextResponse.json({ id: id, name: "Eggs" });
}

export async function PUT(request: NextRequest, { params }: Props) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ message: "Product Not Found" });
  }
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

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ message: "Product Not Found" });
  }

  return new NextResponse(null, { status: 204 });
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ message: "Product Not Found" });
  }
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.issues, { status: 400 });

  // const updateUser = new User ({
  //   name: validData.name ||,
  //   price: validData.price,
  // })

  const validData = validation.data;
  return NextResponse.json({
    id: 3,
    name: validData.name,
    price: validData.price,
  });
}
