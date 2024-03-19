

// import type { Exact } from 'type-fest';

import { PostgrestFilterBuilder, PostgrestSingleResponse } from "@supabase/postgrest-js"
// import { SupabaseClient } from '@supabase/supabase-js';

// from SupaQ
// import arr2obj from '../helpers/arr2obj';
// import type { Parsed } from '../suparse';

// set by user
import supa from '../supabase';



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
      ana_articles: {
        Row: {
          a_alphagram: string | null
          a_artid: number
          a_title: string | null
          a_title_flat: string | null
          a_title_flat_r: string | null
          a_title_r: string | null
          todel1: string | null
          todel2: string | null
          todel3: string | null
        }
        Insert: {
          a_alphagram?: string | null
          a_artid: number
          a_title?: string | null
          a_title_flat?: string | null
          a_title_flat_r?: string | null
          a_title_r?: string | null
          todel1?: string | null
          todel2?: string | null
          todel3?: string | null
        }
        Update: {
          a_alphagram?: string | null
          a_artid?: number
          a_title?: string | null
          a_title_flat?: string | null
          a_title_flat_r?: string | null
          a_title_r?: string | null
          todel1?: string | null
          todel2?: string | null
          todel3?: string | null
        }
        Relationships: []
      }
      ana_defs: {
        Row: {
          d_def: string
          d_defid: number
          d_lexid: number
          d_num: number | null
        }
        Insert: {
          d_def?: string
          d_defid: number
          d_lexid: number
          d_num?: number | null
        }
        Update: {
          d_def?: string
          d_defid?: number
          d_lexid?: number
          d_num?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ana_defs_d_lexid_fkey"
            columns: ["d_lexid"]
            isOneToOne: false
            referencedRelation: "ana_lexemes"
            referencedColumns: ["l_lexid"]
          }
        ]
      }
      ana_langs: {
        Row: {
          lg_lang: string
          lg_num: number | null
          lg_num_min: number | null
        }
        Insert: {
          lg_lang: string
          lg_num?: number | null
          lg_num_min?: number | null
        }
        Update: {
          lg_lang?: string
          lg_num?: number | null
          lg_num_min?: number | null
        }
        Relationships: []
      }
      ana_lexemes: {
        Row: {
          l_artid: number | null
          l_genre: string | null
          l_is_flexion: number | null
          l_is_gentile: number | null
          l_is_locution: number | null
          l_lang: string | null
          l_lexid: number
          l_num: number | null
          l_rand: number | null
          l_sigle: string | null
          l_type: string | null
        }
        Insert: {
          l_artid?: number | null
          l_genre?: string | null
          l_is_flexion?: number | null
          l_is_gentile?: number | null
          l_is_locution?: number | null
          l_lang?: string | null
          l_lexid: number
          l_num?: number | null
          l_rand?: number | null
          l_sigle?: string | null
          l_type?: string | null
        }
        Update: {
          l_artid?: number | null
          l_genre?: string | null
          l_is_flexion?: number | null
          l_is_gentile?: number | null
          l_is_locution?: number | null
          l_lang?: string | null
          l_lexid?: number
          l_num?: number | null
          l_rand?: number | null
          l_sigle?: string | null
          l_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "ana_lexemes_l_artid_fkey"
            columns: ["l_artid"]
            isOneToOne: false
            referencedRelation: "ana_articles"
            referencedColumns: ["a_artid"]
          }
        ]
      }
      def: {
        Row: {
          created_at: string
          deu: string | null
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
          }
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
      lex: {
        Row: {
          created_at: string
          de: string | null
          en: string | null
          fr: string | null
          id: number
          lang: string
          level_fra: number | null
          parent: number | null
          pl: string | null
          ru: string | null
          text: string
        }
        Insert: {
          created_at?: string
          de?: string | null
          en?: string | null
          fr?: string | null
          id?: number
          lang: string
          level_fra?: number | null
          parent?: number | null
          pl?: string | null
          ru?: string | null
          text: string
        }
        Update: {
          created_at?: string
          de?: string | null
          en?: string | null
          fr?: string | null
          id?: number
          lang?: string
          level_fra?: number | null
          parent?: number | null
          pl?: string | null
          ru?: string | null
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
          }
        ]
      }
      lex_def: {
        Row: {
          created_at: string
          def: number
          id: number
          lex: number
        }
        Insert: {
          created_at?: string
          def: number
          id?: number
          lex: number
        }
        Update: {
          created_at?: string
          def?: number
          id?: number
          lex?: number
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
            foreignKeyName: "lex_def_lex_fkey"
            columns: ["lex"]
            isOneToOne: false
            referencedRelation: "lex"
            referencedColumns: ["id"]
          }
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
          }
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
          }
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
            referencedRelation: "lex"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "same_roots_origin_fkey"
            columns: ["origin"]
            isOneToOne: false
            referencedRelation: "lex"
            referencedColumns: ["id"]
          }
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
          }
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
          type: string | null
          word: string
        }
        Insert: {
          created_at?: string
          id?: number
          lang: string
          type?: string | null
          word: string
        }
        Update: {
          created_at?: string
          id?: number
          lang?: string
          type?: string | null
          word?: string
        }
        Relationships: [
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
          }
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
            foreignKeyName: "word_def_word_fkey"
            columns: ["word"]
            isOneToOne: false
            referencedRelation: "word"
            referencedColumns: ["id"]
          }
        ]
      }
      word_piece: {
        Row: {
          created_at: string
          part: number
          piece: number | null
          puzzle: number
          word: number
        }
        Insert: {
          created_at?: string
          part: number
          piece?: number | null
          puzzle: number
          word: number
        }
        Update: {
          created_at?: string
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
            foreignKeyName: "word_piece_part_fkey"
            columns: ["part"]
            isOneToOne: false
            referencedRelation: "word_piece_view"
            referencedColumns: ["part_no"]
          },
          {
            foreignKeyName: "word_piece_piece_fkey"
            columns: ["piece"]
            isOneToOne: false
            referencedRelation: "lex"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_piece_puzzle_fkey"
            columns: ["puzzle"]
            isOneToOne: false
            referencedRelation: "lex_def"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_piece_word_fkey"
            columns: ["word"]
            isOneToOne: false
            referencedRelation: "word"
            referencedColumns: ["id"]
          }
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
      word_piece_view: {
        Row: {
          part_no: number | null
          root_text: string | null
          word_id: number | null
          word_lang: string | null
          word_word: string | null
        }
        Relationships: [
          {
            foreignKeyName: "word_lang_fkey"
            columns: ["word_lang"]
            isOneToOne: false
            referencedRelation: "lang"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "word_piece_word_fkey"
            columns: ["word_id"]
            isOneToOne: false
            referencedRelation: "word"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
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
        Returns: unknown
      }
      fun_increment_array: {
        Args: {
          arr: number[]
        }
        Returns: unknown
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
        Returns: unknown
      }
      get_words_to_study:
      | {
        Args: {
          user_param: number
          theme_param: string
        }
        Returns: unknown
      }
      | {
        Args: {
          user_param: number
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
      }
      get_words_to_study_2: {
        Args: {
          user_param: number
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
      }
      get_words_to_study_3: {
        Args: {
          user_param: number
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
      }
      get_words_to_study_4:
      | {
        Args: {
          user_param: number
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
      }
      | {
        Args: {
          user_param: string
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
      }
      get_words_to_study_5: {
        Args: {
          user_param: string
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
      }
      get_words_to_study_6: {
        Args: {
          user_param: string
          theme_param: string
          limit_param?: number
        }
        Returns: unknown
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
      start_word: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      test_array_jsonb: {
        Args: {
          def_param: Json
        }
        Returns: unknown
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

export type Tables<
  PublicTableNameOrOptions extends
  | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
    Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
  ? R
  : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
    Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
    Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
  ? R
  : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Insert: infer I
  }
  ? I
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Insert: infer I
  }
  ? I
  : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
  | keyof Database["public"]["Tables"]
  | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
  : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
    Update: infer U
  }
  ? U
  : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
    Update: infer U
  }
  ? U
  : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
  | keyof Database["public"]["Enums"]
  | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
  ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
  : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never


// SupaQ helper types

export type DB = Database['public']['Tables'];
export type SupaTable = keyof DB;

export type SupaColumn<Table extends SupaTable> =
  keyof DB[Table]['Row'];

export type SupaValue<Table extends SupaTable, Column extends SupaColumn<Table>> =
  DB[Table]['Row'][Column];

export type SupaRow<Table extends SupaTable> =
  { [Column in SupaColumn<Table>]: SupaValue<Table, Column>; };

type Includeed<Tables extends SupaTable> = { [T in Tables]: string }
type Included<Tables extends SupaTable> = { [table in Tables]: string }
export type Includes<Table extends SupaTable = SupaTable> = Array<SupaTable | Array<SupaTable | Includes>>;
const test = [
  {
    def: "big"
  },
  {
    lex_def: "mini"
  }
]

/* 
[ lex-all ] > [ lex_def-huge ] [ def-big > type-mini ]
*/

// the interface is WIP
// TODO: the class must be extremely type safe
type Methods = {
  // select: (table: SupaTable, version: string, filter: Filter<T>)
  get: (object: object, table: SupaTable, ...keys: Array<object>) => any

  insert: (table: SupaTable, changes: object) => Promise<PostgrestSingleResponse<any[] | any | null>>
  query: (table: SupaTable, ...columns: Array<SupaColumn<SupaTable>>) => string
  includedEl: (table: SupaTable, includes: Includes) => boolean
  subquery: (table: SupaTable, includes: Includes, altName?: string) => string
  subqueries: (tables: Array<SupaTable>, includes: Includes) => string
}
type Subqueries = {
  [table in SupaTable]: (includes: Includes) => string
}
type SupaI = Methods & Subqueries


// export type ExactSupa = Exact<SupaI, Supa>


export class Supa {
  static get<T>(object: T, table: SupaTable, ...keys: Array<keyof T>) {
    let result: any = object; // TO-DO: no-explicit-any
    keys.forEach((key) => {
      result = result[`${table}_${String(key)} `];
    });
    return result;
  }


  static async insert<Table extends SupaTable>(
    table: Table,
    changes: {
      [C in SupaColumn<Table>]: SupaValue<Table, C>
    }
  ) {
    const payload = changes
    const { data, error } = await supa.from(table).insert(payload);
    // console.log(`insert in ${ String(table) } `, data, error);
    return { data, error };
  }
  static query<Table extends SupaTable>(table: Table, ...columns: Array<SupaColumn<Table>>) {
    let result = columns.join(', ');
    if (!String(table).match('_join_')) {
      result += `id;`
    }
    return result;
  }
  static includedEl(table: SupaTable, includes: Includes) {
    return includes.find(
      (element) =>
        (Array.isArray(element) && element.includes(table)) ||
        (typeof element === 'string' && element === table)
    );
  }
  static subquery(table: SupaTable, includes: Includes, altName?: string): string {
    const included = this.includedEl(table, includes);
    if (included) {
      const array = Array.isArray(included) ? included.slice(1) : [];
      const result = `, ${altName ? altName : table} (${this[table](array)})`;
      // console.log('Supa.subquery', table, includes, included, array, result);
      return result;
    } else {
      return ``;
    }
  }
  static subqueries(tables: Array<SupaTable>, includes: Includes): string {
    const result = tables.map((t) => this.subquery(t, includes)).join('\n');
    return result;
  }


  // DO NOT DELETE ANYTHING, EVEN THE COMMENTS, OUTSIDE YOUR ZONE
  // YOUR ZONE STARTS HERE: please refer to the docs




  // YOUR ZONE STOPS HERE


}
type Filter<T extends SupaTable> = {
  [column in SupaColumn<T>]?: {
    [operator in keyof PostgrestFilterBuilder<Database["public"], SupaRow<T>, any>]?: SupaValue<T, column>
  }
}
export async function select<T extends SupaTable>(table: T, filter: Filter<T>) {
  let query = supa.from(table).select('*')

  Object.entries(filter).forEach(([column, filters]) => {
    Object.entries(filter).forEach(([operator, value]) => {
      query = query.filter(column, operator, value)
    })
  })
  await query
}

type Query<Table extends SupaTable> = {
  columns: Array<SupaColumn<Table>>
  relations?: Array<SupaTable> // but relations are already defined by schema so users should only focus on providing includes + columns
  includes: Includes<Table>
}

export type Config<> = {
  queries: {
    [T in SupaTable]?: {
      [Version: string]: Query<T>
    }
  }
  supabase: {
    key: string
    projectId?: string
    local?: boolean
    linked?: boolean
    dbUrl?: string
  }
  options?: {
    withPrefix?: boolean
    executable?: 'npx' | 'pnpx' | null | ''
  }
}

export default Supa;
