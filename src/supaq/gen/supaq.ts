

import { PostgrestFilterBuilder, PostgrestSingleResponse } from '@supabase/postgrest-js'
import { SupabaseClient, createClient } from '@supabase/supabase-js';

// from SupaQ
// import type { Parsed } from '../lib/suparse';
import type { ConfigCommons } from '../lib/util';

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      def: {
        Row: {
          created_at: string
          deu: string | null
          embedding: string | null
          eng: string | null
          epo: string | null
          esp: string | null
          etylex: boolean
          fra: string | null
          id: number
          ita: string | null
          pl: string | null
          ru: string | null
        }
        Insert: {
          created_at?: string
          deu?: string | null
          embedding?: string | null
          eng?: string | null
          epo?: string | null
          esp?: string | null
          etylex?: boolean
          fra?: string | null
          id?: number
          ita?: string | null
          pl?: string | null
          ru?: string | null
        }
        Update: {
          created_at?: string
          deu?: string | null
          embedding?: string | null
          eng?: string | null
          epo?: string | null
          esp?: string | null
          etylex?: boolean
          fra?: string | null
          id?: number
          ita?: string | null
          pl?: string | null
          ru?: string | null
        }
        Relationships: []
      }
      history: {
        Row: {
          duration: number
          level: number
          status: boolean
          time: string
          user: string | null
          word: number
        }
        Insert: {
          duration: number
          level?: number
          status?: boolean
          time?: string
          user?: string | null
          word: number
        }
        Update: {
          duration?: number
          level?: number
          status?: boolean
          time?: string
          user?: string | null
          word?: number
        }
        Relationships: [
          {
            foreignKeyName: "history_user_fkey"
            columns: ["user"]
            isOneToOne: false
            referencedRelation: "user"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "history_word_fkey"
            columns: ["word"]
            isOneToOne: false
            referencedRelation: "word"
            referencedColumns: ["id"]
          },
        ]
      }
      lang: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id: string
          name?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      level: {
        Row: {
          description: string
          id: number
        }
        Insert: {
          description?: string
          id?: number
        }
        Update: {
          description?: string
          id?: number
        }
        Relationships: []
      }
      morph: {
        Row: {
          child_of: number | null
          created_at: string
          id: number
          is_word: boolean
          lang: string
          level_fra: number | null
          morph_of: number | null
          text: string
        }
        Insert: {
          child_of?: number | null
          created_at?: string
          id?: number
          is_word?: boolean
          lang: string
          level_fra?: number | null
          morph_of?: number | null
          text: string
        }
        Update: {
          child_of?: number | null
          created_at?: string
          id?: number
          is_word?: boolean
          lang?: string
          level_fra?: number | null
          morph_of?: number | null
          text?: string
        }
        Relationships: [
          {
            foreignKeyName: "lex_lang_fkey"
            columns: ["lang"]
            isOneToOne: false
            referencedRelation: "lang"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lex_level_fra_fkey"
            columns: ["level_fra"]
            isOneToOne: false
            referencedRelation: "level"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_lex_morph_of_fkey"
            columns: ["morph_of"]
            isOneToOne: false
            referencedRelation: "morph"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_lex_morph_of_fkey"
            columns: ["morph_of"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "public_lex_morph_of_fkey"
            columns: ["morph_of"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["word_id"]
          },
          {
            foreignKeyName: "public_lex_morph_of_fkey"
            columns: ["morph_of"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["morph_id"]
          },
        ]
      }
      morph_piece: {
        Row: {
          created_at: string
          id: string
          morph: number | null
          morphe: number
          part: number
          piece: number
        }
        Insert: {
          created_at?: string
          id?: string
          morph?: number | null
          morphe: number
          part: number
          piece: number
        }
        Update: {
          created_at?: string
          id?: string
          morph?: number | null
          morphe?: number
          part?: number
          piece?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_morph_piece_morph_fkey"
            columns: ["morphe"]
            isOneToOne: false
            referencedRelation: "morph"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_morph_piece_morph_fkey"
            columns: ["morphe"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "public_morph_piece_morph_fkey"
            columns: ["morphe"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["word_id"]
          },
          {
            foreignKeyName: "public_morph_piece_morph_fkey"
            columns: ["morphe"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "public_morph_piece_part_fkey"
            columns: ["part"]
            isOneToOne: false
            referencedRelation: "part"
            referencedColumns: ["no"]
          },
          {
            foreignKeyName: "public_morph_piece_puzzle_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["piece_id"]
          },
          {
            foreignKeyName: "public_morph_piece_puzzle_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_morph_piece_puzzle_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_word_id"]
          },
          {
            foreignKeyName: "public_morph_piece_puzzle_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_morph_id"]
          },
          {
            foreignKeyName: "public_morph_piece_word_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["piece_id"]
          },
          {
            foreignKeyName: "public_morph_piece_word_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_morph_piece_word_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_word_id"]
          },
          {
            foreignKeyName: "public_morph_piece_word_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_morph_id"]
          },
        ]
      }
      part: {
        Row: {
          created_at: string
          n: number
          no: number
          part: string
        }
        Insert: {
          created_at?: string
          n: number
          no: number
          part: string
        }
        Update: {
          created_at?: string
          n?: number
          no?: number
          part?: string
        }
        Relationships: [
          {
            foreignKeyName: "part_part_fkey"
            columns: ["part"]
            isOneToOne: false
            referencedRelation: "type_piece"
            referencedColumns: ["id"]
          },
        ]
      }
      phrase: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      phrase_piece: {
        Row: {
          created_at: string
          order: number
          phrase: number
          piece: number
        }
        Insert: {
          created_at?: string
          order?: number
          phrase: number
          piece: number
        }
        Update: {
          created_at?: string
          order?: number
          phrase?: number
          piece?: number
        }
        Relationships: [
          {
            foreignKeyName: "phrase_piece_phrase_fkey"
            columns: ["phrase"]
            isOneToOne: false
            referencedRelation: "phrase"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "phrase_piece_piece_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "word_def"
            referencedColumns: ["id"]
          },
        ]
      }
      piece: {
        Row: {
          created_at: string
          def: number
          id: number
          level_eng: number | null
          level_fra: number | null
          morph: number
        }
        Insert: {
          created_at?: string
          def: number
          id?: number
          level_eng?: number | null
          level_fra?: number | null
          morph: number
        }
        Update: {
          created_at?: string
          def?: number
          id?: number
          level_eng?: number | null
          level_fra?: number | null
          morph?: number
        }
        Relationships: [
          {
            foreignKeyName: "lex_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "def"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lex_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "def_theme_view"
            referencedColumns: ["def_id"]
          },
          {
            foreignKeyName: "lex_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["def_word_id"]
          },
          {
            foreignKeyName: "lex_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["def_morph_id"]
          },
          {
            foreignKeyName: "lex_def_lex_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "morph"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lex_def_lex_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "lex_def_lex_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["word_id"]
          },
          {
            foreignKeyName: "lex_def_lex_fkey"
            columns: ["morph"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "public_lex_def_level_fra_fkey"
            columns: ["level_fra"]
            isOneToOne: false
            referencedRelation: "level"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_piece_level_eng_fkey"
            columns: ["level_eng"]
            isOneToOne: false
            referencedRelation: "level"
            referencedColumns: ["id"]
          },
        ]
      }
      same_roots: {
        Row: {
          baby: number
          created_at: string
          origin: number
        }
        Insert: {
          baby: number
          created_at?: string
          origin?: number
        }
        Update: {
          baby?: number
          created_at?: string
          origin?: number
        }
        Relationships: [
          {
            foreignKeyName: "same_roots_baby_fkey"
            columns: ["baby"]
            isOneToOne: false
            referencedRelation: "morph"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "same_roots_baby_fkey"
            columns: ["baby"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "same_roots_baby_fkey"
            columns: ["baby"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["word_id"]
          },
          {
            foreignKeyName: "same_roots_baby_fkey"
            columns: ["baby"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "same_roots_origin_fkey"
            columns: ["origin"]
            isOneToOne: false
            referencedRelation: "morph"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "same_roots_origin_fkey"
            columns: ["origin"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "same_roots_origin_fkey"
            columns: ["origin"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["word_id"]
          },
          {
            foreignKeyName: "same_roots_origin_fkey"
            columns: ["origin"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["morph_id"]
          },
        ]
      }
      theme: {
        Row: {
          created_at: string
          en: string
          eo: string
          fr: string
          id: string
        }
        Insert: {
          created_at?: string
          en?: string
          eo?: string
          fr?: string
          id?: string
        }
        Update: {
          created_at?: string
          en?: string
          eo?: string
          fr?: string
          id?: string
        }
        Relationships: []
      }
      theme_def: {
        Row: {
          created_at: string
          def: number
          theme: string
        }
        Insert: {
          created_at?: string
          def: number
          theme: string
        }
        Update: {
          created_at?: string
          def?: number
          theme?: string
        }
        Relationships: [
          {
            foreignKeyName: "theme_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "def"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "theme_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "def_theme_view"
            referencedColumns: ["def_id"]
          },
          {
            foreignKeyName: "theme_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["def_word_id"]
          },
          {
            foreignKeyName: "theme_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["def_morph_id"]
          },
          {
            foreignKeyName: "theme_def_theme_fkey"
            columns: ["theme"]
            isOneToOne: false
            referencedRelation: "def_theme_view"
            referencedColumns: ["theme_id"]
          },
          {
            foreignKeyName: "theme_def_theme_fkey"
            columns: ["theme"]
            isOneToOne: false
            referencedRelation: "theme"
            referencedColumns: ["id"]
          },
        ]
      }
      type_piece: {
        Row: {
          created_at: string
          id: string
        }
        Insert: {
          created_at?: string
          id: string
        }
        Update: {
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      type_word: {
        Row: {
          created_at: string
          en: string
          fr: string
          id: string
        }
        Insert: {
          created_at?: string
          en?: string
          fr?: string
          id?: string
        }
        Update: {
          created_at?: string
          en?: string
          fr?: string
          id?: string
        }
        Relationships: []
      }
      user: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      word: {
        Row: {
          created_at: string
          id: number
          lang: string
          radical: number | null
          type: string | null
          word: string
        }
        Insert: {
          created_at?: string
          id?: number
          lang: string
          radical?: number | null
          type?: string | null
          word: string
        }
        Update: {
          created_at?: string
          id?: number
          lang?: string
          radical?: number | null
          type?: string | null
          word?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_word_radical_fkey"
            columns: ["radical"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["piece_id"]
          },
          {
            foreignKeyName: "public_word_radical_fkey"
            columns: ["radical"]
            isOneToOne: false
            referencedRelation: "piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_word_radical_fkey"
            columns: ["radical"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_word_id"]
          },
          {
            foreignKeyName: "public_word_radical_fkey"
            columns: ["radical"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_morph_id"]
          },
          {
            foreignKeyName: "word_lang_fkey"
            columns: ["lang"]
            isOneToOne: false
            referencedRelation: "lang"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_type_fkey"
            columns: ["type"]
            isOneToOne: false
            referencedRelation: "type_word"
            referencedColumns: ["id"]
          },
        ]
      }
      word_def: {
        Row: {
          created_at: string
          def: number
          id: number
          word: number
        }
        Insert: {
          created_at?: string
          def: number
          id?: number
          word?: number
        }
        Update: {
          created_at?: string
          def?: number
          id?: number
          word?: number
        }
        Relationships: [
          {
            foreignKeyName: "word_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "def"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "def_theme_view"
            referencedColumns: ["def_id"]
          },
          {
            foreignKeyName: "word_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["def_word_id"]
          },
          {
            foreignKeyName: "word_def_def_fkey"
            columns: ["def"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["def_morph_id"]
          },
          {
            foreignKeyName: "word_def_word_fkey"
            columns: ["word"]
            isOneToOne: false
            referencedRelation: "word"
            referencedColumns: ["id"]
          },
        ]
      }
      word_piece: {
        Row: {
          created_at: string
          flexion: string | null
          part: number
          piece: number | null
          puzzle: number
          word: number
        }
        Insert: {
          created_at?: string
          flexion?: string | null
          part: number
          piece?: number | null
          puzzle: number
          word: number
        }
        Update: {
          created_at?: string
          flexion?: string | null
          part?: number
          piece?: number | null
          puzzle?: number
          word?: number
        }
        Relationships: [
          {
            foreignKeyName: "word_piece_part_fkey"
            columns: ["part"]
            isOneToOne: false
            referencedRelation: "part"
            referencedColumns: ["no"]
          },
          {
            foreignKeyName: "word_piece_piece_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "morph"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_piece_piece_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "word_piece_piece_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["word_id"]
          },
          {
            foreignKeyName: "word_piece_piece_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["morph_id"]
          },
          {
            foreignKeyName: "word_piece_puzzle_fkey"
            columns: ["puzzle"]
            isOneToOne: false
            referencedRelation: "morph_piece_view"
            referencedColumns: ["piece_id"]
          },
          {
            foreignKeyName: "word_piece_puzzle_fkey"
            columns: ["puzzle"]
            isOneToOne: false
            referencedRelation: "piece"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_piece_puzzle_fkey"
            columns: ["puzzle"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_word_id"]
          },
          {
            foreignKeyName: "word_piece_puzzle_fkey"
            columns: ["puzzle"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["piece_morph_id"]
          },
          {
            foreignKeyName: "word_piece_word_fkey"
            columns: ["word"]
            isOneToOne: false
            referencedRelation: "word"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      def_theme_view: {
        Row: {
          def_fr: string | null
          def_id: number | null
          root_text: string | null
          theme_id: string | null
        }
        Relationships: []
      }
      morph_piece_view: {
        Row: {
          id: string | null
          morph_id: number | null
          piece_id: number | null
          piece_morph_text: string | null
          text: string | null
        }
        Relationships: []
      }
      word_piece_view: {
        Row: {
          def_morph_fra: string | null
          def_morph_id: number | null
          def_word_fra: string | null
          def_word_id: number | null
          id: string | null
          morph_id: number | null
          morph_text: string | null
          piece_morph_id: number | null
          piece_word_id: number | null
          word_id: number | null
          word_text: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      ai_search_def: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          created_at: string
          deu: string | null
          embedding: string | null
          eng: string | null
          epo: string | null
          esp: string | null
          etylex: boolean
          fra: string | null
          id: number
          ita: string | null
          pl: string | null
          ru: string | null
        }[]
      }
      crea_word_1: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: number
          pieces_param: Json
        }
        Returns: undefined
      }
      crea_word_2: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: number[]
          pieces_param: Json
        }
        Returns: undefined
      }
      crea_word_3: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: number[]
          pieces_param: Json
        }
        Returns: undefined
      }
      crea_word_4: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: number[]
          pieces_param: Json
        }
        Returns: number
      }
      crea_word_5: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: number[]
          pieces_param: Json
        }
        Returns: number
      }
      crea_word_6: {
        Args: {
          word_param: string
          lang_param: string
          type_param: string
          def_param: number[]
          pieces_param: Json
        }
        Returns: number
      }
      crea_word_with_def_1: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: Json
          pieces_param: Json
        }
        Returns: undefined
      }
      crea_word_with_def_2: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: Json
          pieces_param: Json
        }
        Returns: number
      }
      crea_word_with_def_3: {
        Args: {
          id_param: number
          word_param: string
          lang_param: string
          type_param: string
          def_param: Json
          pieces_param: Json
        }
        Returns: number
      }
      crea_word_with_def_5: {
        Args: {
          word_param: string
          lang_param: string
          type_param: string
          def_param: Json
          pieces_param: Json
        }
        Returns: number
      }
      crea_word_with_def_6: {
        Args: {
          word_param: string
          lang_param: string
          type_param: string
          def_param: Json
          pieces_param: Json
          theme_param: string
        }
        Returns: {
          word_id: number
          def_id: number
        }[]
      }
      crea_words_with_def_6: {
        Args: {
          words_param: Json
          type_param: string
          def_param: Json
          pieces_param: Json
        }
        Returns: number[]
      }
      fun_increment_array: {
        Args: {
          arr: number[]
        }
        Returns: number[]
      }
      get_definitions: {
        Args: {
          param_lex_text: string
          param_lang: string
        }
        Returns: {
          def_id: number
          def_fra: string
          lex_id: number
          lex_text: string
        }[]
      }
      get_future_1: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
        }[]
      }
      get_future_2: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          id: number
          word: string
          type: string
          def_id: number
          def_fr: string
        }[]
      }
      get_future_3: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          id: number
          word: string
          type: string
          def_id: number
          def_fr: string
          piece: number
        }[]
      }
      get_future_4: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          id: number
          word: string
          type: string
          def_id: number
          def_fr: string
          piece: string
        }[]
      }
      get_future_5: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          id: number
          word: string
          type: string
          def_id: number
          def_fr: string
          piece: string
          sugg: boolean
        }[]
      }
      get_history: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
        }[]
      }
      get_history_1: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
          piece: number
        }[]
      }
      get_history_10: {
        Args: {
          user_param: string
          theme_param: string
        }
        Returns: {
          user: string
          status: boolean
          id: number
          word: string
          duration: number
          level: number
          piece: number
        }[]
      }
      get_history_2: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
        }[]
      }
      get_history_3: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
          rn: number
        }[]
      }
      get_history_4: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
          rn: number
          piece: number
        }[]
      }
      get_history_5: {
        Args: Record<PropertyKey, never>
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
          piece: number
        }[]
      }
      get_history_7: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          theme: string
          time: string
          level: number
          rn: number
          piece: number
        }[]
      }
      get_history_8: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          time: string
          level: number
          rn: number
          piece: number
        }[]
      }
      get_history_9: {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: {
          user: number
          status: boolean
          id: number
          word: string
          time: string
          level: number
          piece: number
        }[]
      }
      get_lex_of_def: {
        Args: {
          param_def_id: number
        }
        Returns: {
          def_id: number
          def_fra: string
          lex_id: number
          lex_text: string
          lex_lang: string
        }[]
      }
      get_or_insert_def:
        | {
            Args: {
              fr: string
              en: string
              de: string
            }
            Returns: undefined
          }
        | {
            Args: {
              fr?: string
              en?: string
              de?: string
              eo?: string
              it?: string
              es?: string
            }
            Returns: undefined
          }
      get_or_insert_def_1: {
        Args: {
          fr?: string
          en?: string
          de?: string
          eo?: string
          it?: string
          es?: string
        }
        Returns: number
      }
      get_or_insert_def_3: {
        Args: {
          _fr?: string
          _en?: string
          _de?: string
          _eo?: string
          _it?: string
          _es?: string
        }
        Returns: undefined
      }
      get_or_insert_def_4: {
        Args: {
          _fr?: string
          _en?: string
          _de?: string
          _eo?: string
          _it?: string
          _es?: string
        }
        Returns: number
      }
      get_or_insert_root: {
        Args: {
          text_param: string
          lang_param: string
        }
        Returns: number
      }
      get_or_insert_root_2: {
        Args: {
          text_param: string
          lang_param: string
          def_param: number
        }
        Returns: number
      }
      get_or_insert_roots: {
        Args: {
          texts_param: string[]
          lang_param: string
        }
        Returns: number[]
      }
      get_words_to_study:
        | {
            Args: {
              user_param: number
              theme_param: string
            }
            Returns: number[]
          }
        | {
            Args: {
              user_param: number
              theme_param: string
              limit_param?: number
            }
            Returns: number[]
          }
      get_words_to_study_2: {
        Args: {
          user_param: number
          theme_param: string
          limit_param?: number
        }
        Returns: number[]
      }
      get_words_to_study_3: {
        Args: {
          user_param: number
          theme_param: string
          limit_param?: number
        }
        Returns: number[]
      }
      get_words_to_study_4:
        | {
            Args: {
              user_param: number
              theme_param: string
              limit_param?: number
            }
            Returns: string[]
          }
        | {
            Args: {
              user_param: string
              theme_param: string
              limit_param?: number
            }
            Returns: string[]
          }
      get_words_to_study_5: {
        Args: {
          user_param: string
          theme_param: string
          limit_param?: number
        }
        Returns: string[]
      }
      get_words_to_study_6: {
        Args: {
          user_param: string
          theme_param: string
          limit_param?: number
        }
        Returns: number[]
      }
      js_function: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      made_in_sqltools: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      plv8_test_bigint: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      search_root: {
        Args: {
          param_text: string
        }
        Returns: {
          id: number
        }[]
      }
      search_root_2: {
        Args: {
          param_text: string
          param_lang: string
        }
        Returns: {
          id: number
          text: string
        }[]
      }
      search_root_3: {
        Args: {
          param_text: string
          param_lang: string
        }
        Returns: {
          id: number
          text: string
          def: string
        }[]
      }
      search_root_4: {
        Args: {
          param_text: string
          param_lang: string
        }
        Returns: {
          id: number
          text: string
          def: string
        }[]
      }
      search_root_5: {
        Args: {
          param_text: string
          param_lang: string
        }
        Returns: {
          id: number
          text: string
          def_fr: string
          def_en: string
        }[]
      }
      start_def: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      start_morph: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      start_word: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      test_array_jsonb: {
        Args: {
          def_param: Json
        }
        Returns: number[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

			
			const schemaTables = {"def":{"columns":{"created_at":"string","deu":"string","embedding":"string","eng":"string","epo":"string","esp":"string","etylex":"boolean","fra":"string","id":"number","ita":"string","pl":"string","ru":"string"},"rel_to":[],"rel_from":["piece","theme_def","word_def"]},"user":{"columns":{"id":"string","name":"string"},"rel_to":[],"rel_from":["history"]},"history":{"columns":{"duration":"number","level":"number","status":"boolean","time":"string","user":"string","word":"number"},"rel_to":["user","word"],"rel_from":[]},"word":{"columns":{"created_at":"string","id":"number","lang":"string","radical":"number","type":"string","word":"string"},"rel_to":["morph_piece_view","piece","word_piece_view","lang","type_word"],"rel_from":["history","word_def","word_piece"]},"lang":{"columns":{"created_at":"string","id":"string","name":"string"},"rel_to":[],"rel_from":["morph","word"]},"level":{"columns":{"description":"string","id":"number"},"rel_to":[],"rel_from":["morph","piece"]},"morph":{"columns":{"child_of":"number","created_at":"string","id":"number","is_word":"boolean","lang":"string","level_fra":"number","morph_of":"number","text":"string"},"rel_to":["lang","level","morph","morph_piece_view","word_piece_view"],"rel_from":["morph","morph_piece","piece","same_roots","word_piece"]},"morph_piece_view":{"columns":{},"rel_to":[],"rel_from":["morph","morph_piece","piece","same_roots","word","word_piece"]},"word_piece_view":{"columns":{},"rel_to":[],"rel_from":["morph","morph_piece","piece","same_roots","theme_def","word","word_def","word_piece"]},"morph_piece":{"columns":{"created_at":"string","id":"string","morph":"number","morphe":"number","part":"number","piece":"number"},"rel_to":["morph","morph_piece_view","word_piece_view","part","piece"],"rel_from":[]},"part":{"columns":{"created_at":"string","n":"number","no":"number","part":"string"},"rel_to":["type_piece"],"rel_from":["morph_piece","word_piece"]},"piece":{"columns":{"created_at":"string","def":"number","id":"number","level_eng":"number","level_fra":"number","morph":"number"},"rel_to":["def","def_theme_view","word_piece_view","morph","morph_piece_view","level"],"rel_from":["morph_piece","word","word_piece"]},"type_piece":{"columns":{"created_at":"string","id":"string"},"rel_to":[],"rel_from":["part"]},"phrase":{"columns":{"created_at":"string","id":"number"},"rel_to":[],"rel_from":["phrase_piece"]},"phrase_piece":{"columns":{"created_at":"string","order":"number","phrase":"number","piece":"number"},"rel_to":["phrase","word_def"],"rel_from":[]},"word_def":{"columns":{"created_at":"string","def":"number","id":"number","word":"number"},"rel_to":["def","def_theme_view","word_piece_view","word"],"rel_from":["phrase_piece"]},"def_theme_view":{"columns":{},"rel_to":[],"rel_from":["piece","theme_def","word_def"]},"same_roots":{"columns":{"baby":"number","created_at":"string","origin":"number"},"rel_to":["morph","morph_piece_view","word_piece_view"],"rel_from":[]},"theme":{"columns":{"created_at":"string","en":"string","eo":"string","fr":"string","id":"string"},"rel_to":[],"rel_from":["theme_def"]},"theme_def":{"columns":{"created_at":"string","def":"number","theme":"string"},"rel_to":["def","def_theme_view","word_piece_view","theme"],"rel_from":[]},"type_word":{"columns":{"created_at":"string","en":"string","fr":"string","id":"string"},"rel_to":[],"rel_from":["word"]},"word_piece":{"columns":{"created_at":"string","flexion":"string","part":"number","piece":"number","puzzle":"number","word":"number"},"rel_to":["part","morph","morph_piece_view","word_piece_view","piece","word"],"rel_from":[]}} as const
			
			export type SupaQueries = {
		def: {
			
				big: 
			{
			deu: string
			}
			  
				
			}
			piece: {
			
				huge: 
			{
			def: number
id: number
			}
			  
				
			}
			
		}
		
			const queries: {[T in keyof SupaQueries]: {[V in keyof SupaQueries[T]]: string}} = {"def":{"big":"deu"},"piece":{"huge":"def, id"}}
			

export const client: SupabaseClient = createClient<Database>("https://qlqsvedhqhjowlpbylvq.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscXN2ZWRocWhqb3dscGJ5bHZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzNDc0MDEsImV4cCI6MjAwODkyMzQwMX0.ECi9MD7FJiKjPHs_bCZGrpWmdX9wp5LIDnIipzAxfQU");


// SupaQ helper types

export type DB = Database['public']['Tables'];
export type SupaTable = keyof DB;

export type SupaColumn<Table extends SupaTable> =
	keyof DB[Table]['Row'];

export type SupaValue<Table extends SupaTable, Column extends SupaColumn<Table>> =
	DB[Table]['Row'][Column];

export type SupaRow<Table extends SupaTable> =
	{ [Column in SupaColumn<Table>]: SupaValue<Table, Column>; };



		


// suparse

export type Parsed<Table extends SupaTable, O extends object> = {
	__table: Table
	
	set<C extends SupaColumn<Table>>(column: C, value: SupaValue<Table, C>): Promise<PostgrestSingleResponse<any>>
	delete(): Promise<PostgrestSingleResponse<any>>
} & {
		[K in keyof O]?: O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : object
		// [K in keyof O]?: O[K] extends object ? Parsed<K extends SupaTable ? K : SupaTable, O[K]> : O[K] extends (infer U)[] ? Parsed<K extends SupaTable ? K : SupaTable, U extends object ? U : object>[] : object
	}

export function suparse<Table extends SupaTable, O extends object>(table: Table, object: O): Parsed<Table, O> {
	// @ts-ignore
	const result: Parsed<Table, O> = { ...object }
	if (object) {
		Object.entries(object).forEach(entry => {
			const column = String(entry[0]) as keyof O
			const value = entry[1]
			if (Array.isArray(value)) {
				// @ts-ignore
				result[column] = value.map(v => {
					if (typeof v === 'object') {
						return suparse(String(column) as SupaTable, v) as Parsed<typeof column extends SupaTable ? typeof column : SupaTable, typeof v>
					} else {
						return v
					}
				})
			} else if (typeof value === 'object') {
				// @ts-ignore
				result[column] = suparse(String(column) as SupaTable, value)
			} else {
				result[column] = value
			}
		})
	}
	// return result
	return parse(table, result)
}

export function parse<Table extends SupaTable, O extends object>(table: Table, object: O) {
	const full_id = "id"
	const id = object[full_id]
	return {
		...object,
		__table: table,
		
		async set<C extends SupaColumn<Table>>(column: C, value: any) {
			const full = column
			const result = await sup.from(table).update({ [full]: value }).eq(String(full_id), id).select(`${ String(full_id) }, ${ String(full) } `)
			return result
		},
		async delete(options?: { hard?: boolean }) {
			const isHard = options?.hard
			let result: PostgrestSingleResponse<any>
			if (isHard) {
				result = await sup.from(table).delete().eq(String(full_id), id).select(String(full_id))
			} else {
				const is_deleted = `is_deleted` as SupaColumn<Table>
				result = await this.set(is_deleted, true)
			}

			return result
		}
	}
}

export function suparrse<Table extends SupaTable, O extends object>(table: Table, arr: O[]) {
	return arr.map(o => (suparse(table, o)))
}



type Filter<T extends SupaTable> = {
  [column in SupaColumn<T>]?: {
    [operator in keyof PostgrestFilterBuilder<Database["public"], SupaRow<T>, any>]?: SupaValue<T, column>
  }
}

type SchemaTables = typeof schemaTables
export type Includes<T extends keyof SchemaTables> = {
	[table in SchemaTables[T]["rel_from"][number] | SchemaTables[T]["rel_to"][number]]?: string
}

export class SupaQ {
	
	static async insert<Table extends SupaTable>(
		table: Table,
		changes: { 
			[C in SupaColumn<Table>]: SupaValue<Table, C>
		}
	) {
		const payload = changes  
		const { data, error } = await client.from(table).insert(payload);
		// console.log(`insert in ${ String(table) } `, data, error);
		return { data, error };
	}
	static async select<T extends keyof SupaQueries, Version extends keyof SupaQueries[T]>(table: T, version: Version, filter?: Filter<T>): Promise<Array<SupaQueries[T][Version] & {
    set<Column extends keyof SupaQueries[T][Version]>: (column: Column) => any
  }>> {
		let query = client.from(table).select(queries[table][version])
		if (filter) {
			Object.entries(filter).forEach(([column, filters]) => {
				Object.entries(filter).forEach(([operator, value]) => {
					query = query.filter(column, operator, value)
				})
			})
		}
		const result = await query
		const data = result.data as Array<SupaQueries[T][Version]>
		const parsed = suparse(table, data)
		return parsed
	}
}

		

		type Query<Table extends SupaTable> = {
			columns: Array<SupaColumn<Table>>
			includes: Includes<Table>
		}
		export type Config = {
			queries: {
				[T in SupaTable]?: {
					[Version: string]: Query<T>
				}
			}
		} & ConfigCommons
		

export default SupaQ;
