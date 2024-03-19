export default {
    "type": "object",
    "properties": {
        "ana_articles": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "a_alphagram": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_artid": {
                            "type": "number"
                        },
                        "a_title": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_flat": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_flat_r": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_r": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel1": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel2": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel3": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    },
                    "required": [
                        "a_alphagram",
                        "a_artid",
                        "a_title",
                        "a_title_flat",
                        "a_title_flat_r",
                        "a_title_r",
                        "todel1",
                        "todel2",
                        "todel3"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "a_alphagram": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_artid": {
                            "type": "number"
                        },
                        "a_title": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_flat": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_flat_r": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_r": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel1": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel2": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel3": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    },
                    "required": [
                        "a_artid"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "a_alphagram": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_artid": {
                            "type": "number"
                        },
                        "a_title": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_flat": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_flat_r": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "a_title_r": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel1": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel2": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "todel3": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "ana_defs": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "d_def": {
                            "type": "string"
                        },
                        "d_defid": {
                            "type": "number"
                        },
                        "d_lexid": {
                            "type": "number"
                        },
                        "d_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        }
                    },
                    "required": [
                        "d_def",
                        "d_defid",
                        "d_lexid",
                        "d_num"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "d_def": {
                            "type": "string"
                        },
                        "d_defid": {
                            "type": "number"
                        },
                        "d_lexid": {
                            "type": "number"
                        },
                        "d_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        }
                    },
                    "required": [
                        "d_defid",
                        "d_lexid"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "d_def": {
                            "type": "string"
                        },
                        "d_defid": {
                            "type": "number"
                        },
                        "d_lexid": {
                            "type": "number"
                        },
                        "d_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "ana_defs_d_lexid_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "d_lexid"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "ana_lexemes"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "l_lexid"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 1,
                    "maxItems": 1
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "ana_langs": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "lg_lang": {
                            "type": "string"
                        },
                        "lg_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "lg_num_min": {
                            "type": [
                                "null",
                                "number"
                            ]
                        }
                    },
                    "required": [
                        "lg_lang",
                        "lg_num",
                        "lg_num_min"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "lg_lang": {
                            "type": "string"
                        },
                        "lg_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "lg_num_min": {
                            "type": [
                                "null",
                                "number"
                            ]
                        }
                    },
                    "required": [
                        "lg_lang"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "lg_lang": {
                            "type": "string"
                        },
                        "lg_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "lg_num_min": {
                            "type": [
                                "null",
                                "number"
                            ]
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "ana_lexemes": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "l_artid": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_genre": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_is_flexion": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_is_gentile": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_is_locution": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_lang": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_lexid": {
                            "type": "number"
                        },
                        "l_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_rand": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_sigle": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_type": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    },
                    "required": [
                        "l_artid",
                        "l_genre",
                        "l_is_flexion",
                        "l_is_gentile",
                        "l_is_locution",
                        "l_lang",
                        "l_lexid",
                        "l_num",
                        "l_rand",
                        "l_sigle",
                        "l_type"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "l_artid": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_genre": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_is_flexion": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_is_gentile": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_is_locution": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_lang": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_lexid": {
                            "type": "number"
                        },
                        "l_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_rand": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_sigle": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_type": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    },
                    "required": [
                        "l_lexid"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "l_artid": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_genre": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_is_flexion": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_is_gentile": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_is_locution": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_lang": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_lexid": {
                            "type": "number"
                        },
                        "l_num": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_rand": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "l_sigle": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "l_type": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "ana_lexemes_l_artid_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "l_artid"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "ana_articles"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "a_artid"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 1,
                    "maxItems": 1
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "def": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "deu": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "eng": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "epo": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "esp": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "etylex": {
                            "type": "boolean"
                        },
                        "fra": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "id": {
                            "type": "number"
                        },
                        "ita": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "pl": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "ru": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    },
                    "required": [
                        "created_at",
                        "deu",
                        "eng",
                        "epo",
                        "esp",
                        "etylex",
                        "fra",
                        "id",
                        "ita",
                        "pl",
                        "ru"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "deu": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "eng": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "epo": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "esp": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "etylex": {
                            "type": "boolean"
                        },
                        "fra": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "id": {
                            "type": "number"
                        },
                        "ita": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "pl": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "ru": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    }
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "deu": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "eng": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "epo": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "esp": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "etylex": {
                            "type": "boolean"
                        },
                        "fra": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "id": {
                            "type": "number"
                        },
                        "ita": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "pl": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "ru": {
                            "type": [
                                "null",
                                "string"
                            ]
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "history": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "duration": {
                            "type": "number"
                        },
                        "level": {
                            "type": "number"
                        },
                        "status": {
                            "type": "boolean"
                        },
                        "time": {
                            "type": "string"
                        },
                        "user": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "word": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "duration",
                        "level",
                        "status",
                        "time",
                        "user",
                        "word"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "duration": {
                            "type": "number"
                        },
                        "level": {
                            "type": "number"
                        },
                        "status": {
                            "type": "boolean"
                        },
                        "time": {
                            "type": "string"
                        },
                        "user": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "word": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "duration",
                        "word"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "duration": {
                            "type": "number"
                        },
                        "level": {
                            "type": "number"
                        },
                        "status": {
                            "type": "boolean"
                        },
                        "time": {
                            "type": "string"
                        },
                        "user": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "word": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "history_user_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "user"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "user"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "history_word_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "word"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "word"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 2,
                    "maxItems": 2
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "lang": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "id",
                        "name"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "level": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "description": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "description",
                        "id"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "description": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        }
                    }
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "description": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "lex": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "de": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "en": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "fr": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "id": {
                            "type": "number"
                        },
                        "lang": {
                            "type": "string"
                        },
                        "level_fra": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "parent": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "pl": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "ru": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "text": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "de",
                        "en",
                        "fr",
                        "id",
                        "lang",
                        "level_fra",
                        "parent",
                        "pl",
                        "ru",
                        "text"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "de": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "en": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "fr": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "id": {
                            "type": "number"
                        },
                        "lang": {
                            "type": "string"
                        },
                        "level_fra": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "parent": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "pl": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "ru": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "text": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "lang",
                        "text"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "de": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "en": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "fr": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "id": {
                            "type": "number"
                        },
                        "lang": {
                            "type": "string"
                        },
                        "level_fra": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "parent": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "pl": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "ru": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "text": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "lex_lang_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "lang"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lang"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "lex_level_fra_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "level_fra"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "level"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 2,
                    "maxItems": 2
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "lex_def": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "id": {
                            "type": "number"
                        },
                        "lex": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "created_at",
                        "def",
                        "id",
                        "lex"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "id": {
                            "type": "number"
                        },
                        "lex": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "def",
                        "lex"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "id": {
                            "type": "number"
                        },
                        "lex": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "lex_def_def_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "lex_def_def_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def_theme_view"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def_id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "lex_def_lex_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "lex"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lex"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 3,
                    "maxItems": 3
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "part": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "n": {
                            "type": "number"
                        },
                        "no": {
                            "type": "number"
                        },
                        "part": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "n",
                        "no",
                        "part"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "n": {
                            "type": "number"
                        },
                        "no": {
                            "type": "number"
                        },
                        "part": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "n",
                        "no",
                        "part"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "n": {
                            "type": "number"
                        },
                        "no": {
                            "type": "number"
                        },
                        "part": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "part_part_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "part"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "type_piece"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 1,
                    "maxItems": 1
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "phrase": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "created_at",
                        "id"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        }
                    }
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "phrase_piece": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "order": {
                            "type": "number"
                        },
                        "phrase": {
                            "type": "number"
                        },
                        "piece": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "created_at",
                        "order",
                        "phrase",
                        "piece"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "order": {
                            "type": "number"
                        },
                        "phrase": {
                            "type": "number"
                        },
                        "piece": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "phrase",
                        "piece"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "order": {
                            "type": "number"
                        },
                        "phrase": {
                            "type": "number"
                        },
                        "piece": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "phrase_piece_phrase_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "phrase"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "phrase"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "phrase_piece_piece_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "piece"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "word_def"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 2,
                    "maxItems": 2
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "same_roots": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "baby": {
                            "type": "number"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "origin": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "baby",
                        "created_at",
                        "origin"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "baby": {
                            "type": "number"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "origin": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "baby"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "baby": {
                            "type": "number"
                        },
                        "created_at": {
                            "type": "string"
                        },
                        "origin": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "same_roots_baby_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "baby"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lex"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "same_roots_origin_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "origin"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lex"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 2,
                    "maxItems": 2
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "theme": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "en": {
                            "type": "string"
                        },
                        "eo": {
                            "type": "string"
                        },
                        "fr": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "en",
                        "eo",
                        "fr",
                        "id"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "en": {
                            "type": "string"
                        },
                        "eo": {
                            "type": "string"
                        },
                        "fr": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    }
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "en": {
                            "type": "string"
                        },
                        "eo": {
                            "type": "string"
                        },
                        "fr": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "theme_def": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "theme": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "def",
                        "theme"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "theme": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "def",
                        "theme"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "theme": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "theme_def_def_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "theme_def_def_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def_theme_view"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def_id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "theme_def_theme_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "theme"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def_theme_view"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "theme_id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "theme_def_theme_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "theme"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "theme"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 4,
                    "maxItems": 4
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "type_piece": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "id"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "type_word": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "en": {
                            "type": "string"
                        },
                        "fr": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "en",
                        "fr",
                        "id"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "en": {
                            "type": "string"
                        },
                        "fr": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    }
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "en": {
                            "type": "string"
                        },
                        "fr": {
                            "type": "string"
                        },
                        "id": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "user": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "name"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "id",
                        "name"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "id": {
                            "type": "string"
                        },
                        "name": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "minItems": 0,
                    "maxItems": 0
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "word": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        },
                        "lang": {
                            "type": "string"
                        },
                        "type": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "word": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "created_at",
                        "id",
                        "lang",
                        "type",
                        "word"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        },
                        "lang": {
                            "type": "string"
                        },
                        "type": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "word": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "lang",
                        "word"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "id": {
                            "type": "number"
                        },
                        "lang": {
                            "type": "string"
                        },
                        "type": {
                            "type": [
                                "null",
                                "string"
                            ]
                        },
                        "word": {
                            "type": "string"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_lang_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "lang"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lang"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_type_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "type"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "type_word"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 2,
                    "maxItems": 2
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "word_def": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "id": {
                            "type": "number"
                        },
                        "word": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "created_at",
                        "def",
                        "id",
                        "word"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "id": {
                            "type": "number"
                        },
                        "word": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "def"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "def": {
                            "type": "number"
                        },
                        "id": {
                            "type": "number"
                        },
                        "word": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_def_def_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_def_def_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "def_theme_view"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "def_id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_def_word_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "word"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "word"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 3,
                    "maxItems": 3
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        },
        "word_piece": {
            "type": "object",
            "properties": {
                "Row": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "part": {
                            "type": "number"
                        },
                        "piece": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "puzzle": {
                            "type": "number"
                        },
                        "word": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "created_at",
                        "part",
                        "piece",
                        "puzzle",
                        "word"
                    ]
                },
                "Insert": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "part": {
                            "type": "number"
                        },
                        "piece": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "puzzle": {
                            "type": "number"
                        },
                        "word": {
                            "type": "number"
                        }
                    },
                    "required": [
                        "part",
                        "puzzle",
                        "word"
                    ]
                },
                "Update": {
                    "type": "object",
                    "properties": {
                        "created_at": {
                            "type": "string"
                        },
                        "part": {
                            "type": "number"
                        },
                        "piece": {
                            "type": [
                                "null",
                                "number"
                            ]
                        },
                        "puzzle": {
                            "type": "number"
                        },
                        "word": {
                            "type": "number"
                        }
                    }
                },
                "Relationships": {
                    "type": "array",
                    "items": [
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_piece_part_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "part"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "part"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "no"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_piece_part_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "part"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "word_piece_view"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "part_no"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_piece_piece_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "piece"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lex"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_piece_puzzle_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "puzzle"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "lex_def"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        },
                        {
                            "type": "object",
                            "properties": {
                                "foreignKeyName": {
                                    "type": "string",
                                    "enum": [
                                        "word_piece_word_fkey"
                                    ]
                                },
                                "columns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "word"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                },
                                "isOneToOne": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                },
                                "referencedRelation": {
                                    "type": "string",
                                    "enum": [
                                        "word"
                                    ]
                                },
                                "referencedColumns": {
                                    "type": "array",
                                    "items": [
                                        {
                                            "type": "string",
                                            "enum": [
                                                "id"
                                            ]
                                        }
                                    ],
                                    "minItems": 1,
                                    "maxItems": 1
                                }
                            },
                            "required": [
                                "columns",
                                "foreignKeyName",
                                "isOneToOne",
                                "referencedColumns",
                                "referencedRelation"
                            ]
                        }
                    ],
                    "minItems": 5,
                    "maxItems": 5
                }
            },
            "required": [
                "Insert",
                "Relationships",
                "Row",
                "Update"
            ]
        }
    },
    "required": [
        "ana_articles",
        "ana_defs",
        "ana_langs",
        "ana_lexemes",
        "def",
        "history",
        "lang",
        "level",
        "lex",
        "lex_def",
        "part",
        "phrase",
        "phrase_piece",
        "same_roots",
        "theme",
        "theme_def",
        "type_piece",
        "type_word",
        "user",
        "word",
        "word_def",
        "word_piece"
    ],
    "$schema": "http://json-schema.org/draft-07/schema#"
};
