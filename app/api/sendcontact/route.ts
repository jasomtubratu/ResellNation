import { NextResponse } from "next/server";

export async function GET(req:any) {
  return NextResponse.json(
    { error: "Method not allowed" },
    {
      status: 405,
    }
  );
}

export async function POST(req:any) {
  const data = await req.json()
  const { name, email, message } = data;

  if (!name || !email || !message ) {
    console.log(name, email, message)
    return NextResponse.json(
      { error: "Missing informations" },
      {
        status: 400,
      }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Invalid email" },
      {
        status: 400,
      }
    );
  }

  const emailFixed = email.toLowerCase();

  try {
    const webhookUrl =
      "https://discord.com/api/webhooks/1202982050655899698/itiOqVYheNH0g4wsVGCTzerpTA8FLtEZF7c8nqNkPYvNyUyeZsuB45IVi4P2mypDKdxP";

    const discordData = {
      username: "ResellNation.eu | Contact",
      avatar_url: "https://resellnation.eu/logo.webp",
      embeds: [
        {
          title: "New message from www.resellnation.eu!",
          fields: [
            { name: "Name", value: name, inline: true },
            { name: "Email", value: emailFixed, inline: true },
            { name: "Message", value: message },
          ],
          color: 0xFF0000,
        },
      ],
    };

    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordData),
    });

    if (discordResponse.ok) {
      return NextResponse.json(
        { message: "Done" },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        { error: "Error" },
        {
          status: 500,
        }
      );
    }
  } catch (error) {
    console.error("Chyba:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      {
        status: 500,
      }
    );
  }
}
