export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      medicos_cards: {
        Row: {
          created_at: string | null
          crm: string
          descricao: string | null
          email: string | null
          especialidade: string
          foto_url: string | null
          funcao_conselho: Database["public"]["Enums"]["funcao-conselho"] | null
          funcao_diretoria:
            | Database["public"]["Enums"]["funcao-diretoria"]
            | null
          id: number
          idade: number | null
          nome: string
          telefone: string | null
        }
        Insert: {
          created_at?: string | null
          crm: string
          descricao?: string | null
          email?: string | null
          especialidade: string
          foto_url?: string | null
          funcao_conselho?:
            | Database["public"]["Enums"]["funcao-conselho"]
            | null
          funcao_diretoria?:
            | Database["public"]["Enums"]["funcao-diretoria"]
            | null
          id?: number
          idade?: number | null
          nome: string
          telefone?: string | null
        }
        Update: {
          created_at?: string | null
          crm?: string
          descricao?: string | null
          email?: string | null
          especialidade?: string
          foto_url?: string | null
          funcao_conselho?:
            | Database["public"]["Enums"]["funcao-conselho"]
            | null
          funcao_diretoria?:
            | Database["public"]["Enums"]["funcao-diretoria"]
            | null
          id?: number
          idade?: number | null
          nome?: string
          telefone?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          cidade: string | null
          created_at: string
          crm: string | null
          especialidade: string | null
          estado: string | null
          foto_url: string | null
          id: string
          instagram: string | null
          nome_completo: string | null
          telefone: string | null
          updated_at: string
        }
        Insert: {
          cidade?: string | null
          created_at?: string
          crm?: string | null
          especialidade?: string | null
          estado?: string | null
          foto_url?: string | null
          id: string
          instagram?: string | null
          nome_completo?: string | null
          telefone?: string | null
          updated_at?: string
        }
        Update: {
          cidade?: string | null
          created_at?: string
          crm?: string | null
          especialidade?: string | null
          estado?: string | null
          foto_url?: string | null
          id?: string
          instagram?: string | null
          nome_completo?: string | null
          telefone?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      usuarios_cadastrados: {
        Row: {
          created_at: string
          crm: string
          especialidade: string
          id: string
          nome_completo: string
          telefone: string | null
          tipo_associacao: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          crm: string
          especialidade: string
          id?: string
          nome_completo: string
          telefone?: string | null
          tipo_associacao: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          crm?: string
          especialidade?: string
          id?: string
          nome_completo?: string
          telefone?: string | null
          tipo_associacao?: string
          updated_at?: string
          user_id?: string | null
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
      "funcao-conselho":
        | "Presidente"
        | "Vice-Presidente"
        | "Tesoureiro"
        | "Secretária"
        | "Conselheiro Fiscal"
        | "Diretor Científico"
        | "Coordenadora Científica"
        | "Coordenadora de Pesquisa"
        | "Diretor de Produtos e Materiais"
        | "Assessor Jurídico Principal"
        | "Membro Fundador"
      "funcao-diretoria":
        | "Conselho Administrativo"
        | "Conselho Fiscal"
        | "Conselho Científico"
        | "Conselho de Produtos e Materiais"
        | "Assessoria Jurídica"
        | "Membros Fundadores"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      "funcao-conselho": [
        "Presidente",
        "Vice-Presidente",
        "Tesoureiro",
        "Secretária",
        "Conselheiro Fiscal",
        "Diretor Científico",
        "Coordenadora Científica",
        "Coordenadora de Pesquisa",
        "Diretor de Produtos e Materiais",
        "Assessor Jurídico Principal",
        "Membro Fundador",
      ],
      "funcao-diretoria": [
        "Conselho Administrativo",
        "Conselho Fiscal",
        "Conselho Científico",
        "Conselho de Produtos e Materiais",
        "Assessoria Jurídica",
        "Membros Fundadores",
      ],
    },
  },
} as const
