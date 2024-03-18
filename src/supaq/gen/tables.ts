export type Tables = {
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