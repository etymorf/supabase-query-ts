**A replacement for supabase-js and supabase CLI for database operations**.

The DX you deserve :
- strongly typed select operations : 
  never misplace a comma again
- types on { data }
- accessible helper types, to replace `Database["public"]["Tables"]`... : 
  `SupaTable`, `SupaColumn<T>`, `SupaValue<T, C>`, `SupaRow<T>`...
- the value of an entry can be updated from { data } directly :
   write `await data[0].update({name: "John"})` 
   rather than traditional untyped `await supabase.from('users').update({name: "John"}).eq({id: 12})`
- full control :
  access to `type Database`, `client` and everything you need from `supabase-js` 

# Supabase Query Typescript, a.k.a. SupaQ : the strongly typed querier for your Supa database

## How to?

### Create a config.ts file

Name it as you prefer. Place it where you prefer. This is your file.

All you need to start:

```
const config = {
	supabase: {
		key: SUPABASE_ANON_KEY,
		projectId: SUPABASE_PROJECT_ID
	}
}
export default config
```

If you haven't installed globally the Supabase CLI, you need to specify an "executable" like npx or pnpx to run it: 

```
// you can optionally import this helper type to get an idea of the different options
import type { ConfigCommons as Config } from 'supabase-query-ts'

const config: Config = {
	supabase: {
		key: SUPABASE_ANON_KEY,
		projectId: SUPABASE_PROJECT_ID
	},
	options: {
		executable: `pnpx`
	},
	queries: {

	}
}
export default config
``` 

The config is split into 3 parts:
- supabase: equivalent (but incomplete for now) to Supabase CLI arguments
- options
- queries: all your queries will be centralized here

#### config.queries

Before starting writing queries, run SupaQ for the first time.

```
pnpm supaq ./relative/path/to/your/config/file.ts
```

It generated a file called `supaq.ts`. Everytime you change the config or your schema, you want to run SupaQ again.

Now, go back to your config file. Replace the type import to get auto-completion and type safety.

```
// import type { ConfigCommons as Config } from 'supabase-query-ts'
import type { Config } from './supaq.ts'

const config: Config = {
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
}
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
So `includes: { "user": "short" }` means "include the short query for the table 'user'". In this case, it will include only the column 'name'.

Each table can have multiple versions of queries. Each version selects columns and subqueries.

Try it!

#### config.options

##### executable: 'npx' | 'pnpx' | null | '' = ''

if Supabase CLI is installed globally, don't use this option, otherwise use your package manager (pnpm or npm supported now)

##### id: null | string = "id"

the id column in your tables (defaults to "id")

##### softDelete: `is_deleted` | null = null

if you input a column name here, the .delete() method will perform a "soft delete" by setting the column to true 
not currently implemented

##### withPrefix: boolean = false

whether column names are prefixed with table name: tablename_columnname

##### moreFiles: boolean = false

2 more representations of your table structure will be in your folder: 
- tables.ts
- tables.jsc.ts

#### supaq.ts

It delivers you:
- the Supabase `client`
- the complete output from `supabase gen types typescript`
- the `SupaQ` class with the `.select()` and `.insert()` methods
- helper types
- the parser: used internally in `SupaQ.select()`

##### SupaQ class

The SupaQ class provides methods for building queries and query your database.

- ```async SupaQ.insert()``` : inserting a row from the client-side has never been so type-safe

- ```async SupaQ.select()``` : selecting rows

##### helper types

SupaQ exports helpers types. For auto-completion plus type safety of all DB related operations.

- ```type DB``` : quick access to tables
- ```type SupaTable``` : list of tables
- ```type SupaColumn<Table>``` : direct access to column names per table
```type SupaValue<Table, Column>``` : TS type of the column
```type SupaRow<Table>``` : fully typed object representing a row

Note: Those helper types focus on providing quick access to table types. If you need access to other types such as functions, use `type Database`.

##### suparse : the parser

- Adds CRUD operations directly to the row :
	- ```.set(column, value)```
	- ```.delete()```
- Recursively adds the private fields `__table` and `__version` 

An object deeply passed down into components got metadata of the table where it comes, plus a way to interact directly with the database.

`const data = await SupaQ.select("users", "extended", { "is_pro": true })`

`const name = data[0].name // type string` -> get a typed value

`await data[1].set('age', '18') // type error : age is a number` -> update the row

`await data[2].delete()` -> delete the row (in the config you can opt-in for soft deletion)



## The rest

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

