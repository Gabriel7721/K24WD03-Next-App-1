import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: Promise<{ id: number }>;
}

export async function GET(request: NextRequest, { params }: Props) {
  const { id } = await params;

  if (id > 10) {
    return NextResponse.json({ message: "User Not Found" });
  }
  return NextResponse.json({ id: id, name: "Malaysia" });
}
