import { NextResponse } from "next/server"
import { getLinkedinProfile } from "../../../linkedin-scrapper"

export async function POST(request) {
    const res = await request.json();
    const data = await getLinkedinProfile(res.url)
    return NextResponse.json({ profile: data });
}