"use server"

import { createServerActionClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

// Authentication actions
export async function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })

    if (error) {
      return { error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signUp(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")
  const username = formData.get("username")

  if (!email || !password) {
    return { error: "Email and password are required" }
  }

  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.toString(),
      password: password.toString(),
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
      },
    })

    if (error) {
      return { error: error.message }
    }

    // Create user profile
    if (data.user) {
      await supabase.from("profiles").insert({
        id: data.user.id,
        email: email.toString(),
        username: username?.toString() || null,
      })
    }

    return { success: "Check your email to confirm your account." }
  } catch (error) {
    console.error("Sign up error:", error)
    return { error: "An unexpected error occurred. Please try again." }
  }
}

export async function signOut() {
  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  await supabase.auth.signOut()
  redirect("/auth/login")
}

// Profile actions
export async function updateProfile(prevState: any, formData: FormData) {
  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  const username = formData.get("username")
  const walletAddress = formData.get("walletAddress")

  try {
    const { error } = await supabase
      .from("profiles")
      .update({
        username: username?.toString(),
        wallet_address: walletAddress?.toString(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", user.id)

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/profile")
    return { success: "Profile updated successfully" }
  } catch (error) {
    return { error: "Failed to update profile" }
  }
}

// Staking actions
export async function stakeTokens(prevState: any, formData: FormData) {
  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  const poolId = formData.get("poolId")
  const amount = formData.get("amount")

  try {
    const { error } = await supabase.from("user_stakes").insert({
      user_id: user.id,
      pool_id: poolId?.toString(),
      amount: Number.parseFloat(amount?.toString() || "0"),
      unlock_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/staking")
    return { success: "Tokens staked successfully" }
  } catch (error) {
    return { error: "Failed to stake tokens" }
  }
}

// Meme contest actions
export async function submitMeme(prevState: any, formData: FormData) {
  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  const contestId = formData.get("contestId")
  const title = formData.get("title")
  const imageUrl = formData.get("imageUrl")
  const description = formData.get("description")

  try {
    const { error } = await supabase.from("meme_submissions").insert({
      contest_id: contestId?.toString(),
      user_id: user.id,
      title: title?.toString(),
      image_url: imageUrl?.toString(),
      description: description?.toString(),
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/meme-contest")
    return { success: "Meme submitted successfully" }
  } catch (error) {
    return { error: "Failed to submit meme" }
  }
}

// Governance actions
export async function voteOnProposal(prevState: any, formData: FormData) {
  const cookieStore = cookies()
  const supabase = createServerActionClient({ cookies: () => cookieStore })

  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (!user) {
    return { error: "Not authenticated" }
  }

  const proposalId = formData.get("proposalId")
  const voteType = formData.get("voteType")

  try {
    const { error } = await supabase.from("governance_votes").insert({
      proposal_id: proposalId?.toString(),
      user_id: user.id,
      vote_type: voteType?.toString(),
      voting_power: 1,
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/governance")
    return { success: "Vote cast successfully" }
  } catch (error) {
    return { error: "Failed to cast vote" }
  }
}
