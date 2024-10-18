import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);

    const limit = searchParams.get('limit') || '10';
    const offset = searchParams.get('offset') || '0';

    const res = await fetch(`http://127.0.0.1:8001/movies?limit=${limit}&offset=${offset}`);
    const data = await res.json();

    return NextResponse.json(data)
}