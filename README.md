**Type-safe replacement for supabase-js and cli for database operations**.

The DX you deserve :
- strongly typed select operation and result { data }
- update database from { data } directly :
   write `await data[0].update({name: "John"})` 
   rather than traditional untyped `await supabase.from('users').update({name: "John"}).eq({id: 12})`

- helper types to replace `Database["public"]["Tables"]`... : 
  `SupaTable`, `SupaColumn<T>`, `SupaValue<T, C>`, `SupaRow<T>`...
- full control :
  access to `type Database`, `client` and everything you need from `supabase-js` 

## SupaQ TS : the strongly typed Querier for your Supabase database

### How to?

#### Create a config.ts file

Name it as you prefer. Place it where you prefer. 
It's the only file you'll ever need.

Please install the Supabase CLI globally, ```supabase login```, etc.

```
import type { ConfigCommons as Config } from 'supabase-query-ts'
const config = {
	supabase: {
		key: SUPABASE_ANON_KEY,
		projectId: SUPABASE_PROJECT_ID
	},
	options: {
		// executable: `pnpx` // if you haven't installed the Supabase CLI globally you need to specify here an executable like npx or pnpx (not recommended, may not work)
	},
	queries: { },
	overrides: { },
	enums: { }
} as const satisfies Config
export default config
```

The config got:
- supabase: equivalent (yet incomplete) to Supabase CLI arguments
- options
- queries: all your queries will be centralized here
- overrides
- enums: automatic download from your tables, gen enum types with a specific text column, auto-refresh

##### queries

Before starting writing queries, run SupaQ for the first time.

```
pnpm supaq ./relative/path/to/your/config/file.ts
```

The path of the config is relative to the root of your project and must include the .ts extension.
It generated a file called `supaq.ts`. 
When satisfied with changes to the config or your schema, run SupaQ again.

Back to your config file : replace the type Config import to get auto-completion and type safety.

```
// import type { ConfigCommons as Config } from 'supabase-query-ts'
import type { Config } from './supaq.ts'

const config = {
	...,
	queries: {
		"user": {
			extended: {
				columns: ["name", "email", "adress", "city", "state", "country", "phone"]
			},
			short: {
				columns: ["name"]
			}
		},
		"purchase": {
			classic: {
				columns: ["title", "price", "amount"],
				includes: { "user": "short" }
			}
		}
	}
} as const satisfies Config
``` 

Here, you saw an example of how to write queries. It may look intimidating, so look at the type you just imported:

```
export type Config = {
	queries: {
		[Table in SupaTable]?: {
			[Version: string]: {
				columns: Array<SupaColumn<Table>>
				includes: Includes<Table>
			}
		}
	}
} & ConfigCommons
```

Includes is an object that says that you want to include a subquery:
`{ [table]: version }`
So `includes: { "user": "short" }` means "when doing the 'classic' query on table 'purchase', include the 'short' query of table 'user'". In this case, it will include only the column 'name'.

Each table can have unlimited queries. Each query selects columns and includes subqueries.

Try it!

##### options

###### executable: 'npx' | 'pnpx' | null | '' = ''

if Supabase CLI is installed globally, don't use this option, otherwise use your package manager (pnpm or npm supported now)

###### id: null | string = "id"

the id column in your tables (defaults to "id")

###### softDelete: `is_deleted` | null = null

if you input a column name here, the .delete() method will perform a "soft delete" on rows by setting this column to true rathen than dropping the row 
*not currently implemented*

###### withPrefix: boolean = false

whether column names are prefixed with table name: tablename_columnname

###### moreFiles: boolean = false

in addition to SupaQ, you'll have 2 more representations of your table structure in your folder: 
- tables.ts
- tables.jsc.ts

##### supaq.ts

It delivers you:
- the Supabase `client`
- the complete output from `supabase gen types typescript`
- the `SupaQ` class with the `.select()` and `.insert()` methods
- helper types
- the parser: used internally in `SupaQ.select()`

###### SupaQ class

The SupaQ class provides methods for building queries and query your database.

- ```async SupaQ.insert()``` : inserting a row from the client-side has never been so type-safe

- ```async SupaQ.select()``` : select rows using queries defined in config, optionally add filters

###### helper types

SupaQ exports helpers types. For auto-completion plus type safety of all DB related operations.

- ```type DB``` : quick access to tables
- ```type SupaTable``` : list of tables
- ```type SupaColumn<Table>``` : direct access to column names per table
```type SupaValue<Table, Column>``` : TS type of the column
```type SupaRow<Table>``` : fully typed object representing a row

Note: Those helper types focus on providing quick access to table types. If you need access to other types such as functions, use `type Database`.

###### suparse : the parser

- Adds CRUD operations directly to the row :
	- ```.set(column, value)```
	- ```.delete()```
- Recursively adds the private fields `__table` and `__version` 

An object deeply passed down into components got metadata of the table where it comes, plus a way to interact directly with the database.

`const data = await SupaQ.select("users", "extended", { "is_pro": true })`
*selects rows where 'is_pro' is true in table 'users' using the 'extended' query defined in config*

`const name = data[0].name // type string`
*get a typed value*

`await data[1].set('age', '18') // type error : age is a number`
*update the row from client-side*

`await data[2].delete()`
*delete the row (in the config you can opt-in for soft deletion)*



### The rest

Get access to the generated Supabase client :

```
import { client } from './supaq'
import type { SignInWithPasswordCredentials } from '@supabase/supabase-js'

async function signIn(credentials: SignInWithPasswordCredentials) {
	await client.auth.signInWithPassword(credentials)
	...
}
```

Get the `Database` type and helper types :

```
import type { Database, DB, SupaTable, SupaRow, SupaValue } from './supaq'

type MyFunction = Database["public"]["Functions"]["myFunction"]
type UserInsert = DB["user"]["Insert"]

...

```

