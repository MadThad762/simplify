export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "Todo's": {
        Row: {
          created_at: string
          created_by: string | null
          description: string
          id: number
          is_complete: boolean | null
          name: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description: string
          id?: number
          is_complete?: boolean | null
          name: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string
          id?: number
          is_complete?: boolean | null
          name?: string
        }
        Relationships: []
      }
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
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
