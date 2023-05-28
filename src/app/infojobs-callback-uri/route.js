import { NextResponse } from "next/server"


export async function GET(request) {
    // Todo Manage Infojobs Authentication

    return NextResponse.json({ ping: "pong" })
}