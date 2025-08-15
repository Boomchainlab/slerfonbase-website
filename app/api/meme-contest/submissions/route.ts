import { type NextRequest, NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore })

  const { searchParams } = new URL(request.url)
  const contestId = searchParams.get("contestId")

  try {
    const { data: submissions, error } = await supabase
      .from("meme_submissions")
      .select(`
        *,
        profiles (
          username,
          avatar_url
        )
      `)
      .eq("contest_id", contestId)
      .order("votes", { ascending: false })

    if (error) {
      throw error
    }

    return NextResponse.json(submissions)
  } catch (error) {
    console.error("Meme submissions fetch error:", error)
    return NextResponse.json({ error: "Failed to fetch submissions" }, { status: 500 })
  }
}
