import { NextResponse } from "next/server"
import { getLinkedinProfile } from "../../../linkedin-scrapper"

export async function GET(request) {
    // Todo Manage Infojobs Authentication

    return NextResponse.json({ ping: "pong" })
}