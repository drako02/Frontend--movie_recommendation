import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name_or_email, password } = await request.json();
    const formData = { name_or_email, password };

    const res = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    // console.log(JSON.stringify(formData), "222");

    if (!res.ok) {
      const errorData = await res.json();
      console.log("Error from backend", errorData.detail);

      return NextResponse.json(
        { status: "error", message: errorData.detail },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(
      {
        status: "success",
        access_token: data.access_token,
        user_id: data.user_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing submission:", error);
    return NextResponse.json(
      { status: "error", message: "Form submission failed" },
      { status: 500 }
    );
  }
}
