export type Tables = {
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