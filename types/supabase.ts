export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          username: string | null
          avatar_url: string | null
          wallet_address: string | null
          created_at: string
          updated_at: string
          total_points: number
          level: number
          referral_code: string
          referred_by: string | null
        }
        Insert: {
          id: string
          email?: string | null
          username?: string | null
          avatar_url?: string | null
          wallet_address?: string | null
          created_at?: string
          updated_at?: string
          total_points?: number
          level?: number
          referral_code?: string
          referred_by?: string | null
        }
        Update: {
          id?: string
          email?: string | null
          username?: string | null
          avatar_url?: string | null
          wallet_address?: string | null
          created_at?: string
          updated_at?: string
          total_points?: number
          level?: number
          referral_code?: string
          referred_by?: string | null
        }
      }
      // Add other table types as needed
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
