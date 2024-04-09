export default {
  "type": "object",
  "properties": {
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
            "embedding": {
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
            "embedding",
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
            "embedding": {
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
            "embedding": {
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
    "morph": {
      "type": "object",
      "properties": {
        "Row": {
          "type": "object",
          "properties": {
            "child_of": {
              "type": [
                "null",
                "number"
              ]
            },
            "created_at": {
              "type": "string"
            },
            "id": {
              "type": "number"
            },
            "is_word": {
              "type": "boolean"
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
            "morph_of": {
              "type": [
                "null",
                "number"
              ]
            },
            "text": {
              "type": "string"
            }
          },
          "required": [
            "child_of",
            "created_at",
            "id",
            "is_word",
            "lang",
            "level_fra",
            "morph_of",
            "text"
          ]
        },
        "Insert": {
          "type": "object",
          "properties": {
            "child_of": {
              "type": [
                "null",
                "number"
              ]
            },
            "created_at": {
              "type": "string"
            },
            "id": {
              "type": "number"
            },
            "is_word": {
              "type": "boolean"
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
            "morph_of": {
              "type": [
                "null",
                "number"
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
            "child_of": {
              "type": [
                "null",
                "number"
              ]
            },
            "created_at": {
              "type": "string"
            },
            "id": {
              "type": "number"
            },
            "is_word": {
              "type": "boolean"
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
            "morph_of": {
              "type": [
                "null",
                "number"
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
            },
            {
              "type": "object",
              "properties": {
                "foreignKeyName": {
                  "type": "string",
                  "enum": [
                    "public_lex_morph_of_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_of"
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
                    "morph"
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
                    "public_lex_morph_of_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_of"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "public_lex_morph_of_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_of"
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
                        "word_id"
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
                    "public_lex_morph_of_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_of"
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
                        "morph_id"
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
          "minItems": 6,
          "maxItems": 6
        }
      },
      "required": [
        "Insert",
        "Relationships",
        "Row",
        "Update"
      ]
    },
    "morph_piece": {
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
            "morph": {
              "type": [
                "null",
                "number"
              ]
            },
            "morphe": {
              "type": "number"
            },
            "part": {
              "type": "number"
            },
            "piece": {
              "type": "number"
            }
          },
          "required": [
            "created_at",
            "id",
            "morph",
            "morphe",
            "part",
            "piece"
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
            "morph": {
              "type": [
                "null",
                "number"
              ]
            },
            "morphe": {
              "type": "number"
            },
            "part": {
              "type": "number"
            },
            "piece": {
              "type": "number"
            }
          },
          "required": [
            "morphe",
            "part",
            "piece"
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
            "morph": {
              "type": [
                "null",
                "number"
              ]
            },
            "morphe": {
              "type": "number"
            },
            "part": {
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
                    "public_morph_piece_morph_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morphe"
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
                    "morph"
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
                    "public_morph_piece_morph_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morphe"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "public_morph_piece_morph_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morphe"
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
                        "word_id"
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
                    "public_morph_piece_morph_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morphe"
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
                        "morph_id"
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
                    "public_morph_piece_part_fkey"
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
                    "public_morph_piece_puzzle_fkey"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_id"
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
                    "public_morph_piece_puzzle_fkey"
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
                    "piece"
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
                    "public_morph_piece_puzzle_fkey"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_word_id"
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
                    "public_morph_piece_puzzle_fkey"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_morph_id"
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
                    "public_morph_piece_word_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_id"
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
                    "public_morph_piece_word_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph"
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
                    "piece"
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
                    "public_morph_piece_word_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph"
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
                        "piece_word_id"
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
                    "public_morph_piece_word_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph"
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
                        "piece_morph_id"
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
          "minItems": 13,
          "maxItems": 13
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
    "piece": {
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
            "level_eng": {
              "type": [
                "null",
                "number"
              ]
            },
            "level_fra": {
              "type": [
                "null",
                "number"
              ]
            },
            "morph": {
              "type": "number"
            }
          },
          "required": [
            "created_at",
            "def",
            "id",
            "level_eng",
            "level_fra",
            "morph"
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
            "level_eng": {
              "type": [
                "null",
                "number"
              ]
            },
            "level_fra": {
              "type": [
                "null",
                "number"
              ]
            },
            "morph": {
              "type": "number"
            }
          },
          "required": [
            "def",
            "morph"
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
            "level_eng": {
              "type": [
                "null",
                "number"
              ]
            },
            "level_fra": {
              "type": [
                "null",
                "number"
              ]
            },
            "morph": {
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "def_word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "def_morph_id"
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
                        "morph"
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
                    "morph"
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
                    "lex_def_lex_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                        "morph"
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
                        "word_id"
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
                        "morph"
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
                        "morph_id"
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
                    "public_lex_def_level_fra_fkey"
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
            },
            {
              "type": "object",
              "properties": {
                "foreignKeyName": {
                  "type": "string",
                  "enum": [
                    "public_piece_level_eng_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "level_eng"
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
          "minItems": 10,
          "maxItems": 10
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
                    "morph"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "morph"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
          "minItems": 8,
          "maxItems": 8
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "def_word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "def_morph_id"
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
          "minItems": 6,
          "maxItems": 6
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
            "radical": {
              "type": [
                "null",
                "number"
              ]
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
            "radical",
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
            "radical": {
              "type": [
                "null",
                "number"
              ]
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
            "radical": {
              "type": [
                "null",
                "number"
              ]
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
                    "public_word_radical_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "radical"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_id"
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
                    "public_word_radical_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "radical"
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
                    "piece"
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
                    "public_word_radical_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "radical"
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
                        "piece_word_id"
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
                    "public_word_radical_fkey"
                  ]
                },
                "columns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "radical"
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
                        "piece_morph_id"
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
          "minItems": 6,
          "maxItems": 6
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "def_word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "def_morph_id"
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
            "flexion": {
              "type": [
                "null",
                "string"
              ]
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
            "flexion",
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
            "flexion": {
              "type": [
                "null",
                "string"
              ]
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
            "flexion": {
              "type": [
                "null",
                "string"
              ]
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
                    "morph"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "morph_id"
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
                    "morph_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_id"
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
                    "piece"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_word_id"
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
                    "word_piece_view"
                  ]
                },
                "referencedColumns": {
                  "type": "array",
                  "items": [
                    {
                      "type": "string",
                      "enum": [
                        "piece_morph_id"
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
          "minItems": 10,
          "maxItems": 10
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
    "def",
    "history",
    "lang",
    "level",
    "morph",
    "morph_piece",
    "part",
    "phrase",
    "phrase_piece",
    "piece",
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
}