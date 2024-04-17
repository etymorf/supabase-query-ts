**WARNING: CURRENTLY A BETA.**

The official package supabase-js gives you the power to communicate, securely and easily, from the client to the database.
But it does not provide the DX you deserve :
- strongly typed select operations : never make a spelling mistake or misplace a comma again
- types on { data }
- easily accessible types, rather than `Database["public"]["Tables"]`... : SupaQ's type generator built on top of `supabase gen queries` simplifies the process. Say hi to `SupaTable`, `SupaColumn<T>`, `SupaValue<T, C>`, `SupaRow<T>`
- a way to update the value of an entry from { data } directly : simply write `await data[0].update({name: "John"})` rather than traditional untyped `await supabase.from('users').update({name: "John"}).eq({id: 12})`

## Supabase Query Typescript, a.k.a. SupaQ : the strongly typed querier for your Supa database

Use this package as a drop-in **replacement for supabase-js and supabase CLI for database operations**.

### How to?

#### Create a config.ts file

Name it as you prefer. Place it where you prefer. This is your file.

All you need to start:

```
const config = {
	supabase: {
		key: environment.SUPABASE_ANON_KEY,
		projectId: environment.SUPABASE_PROJECT_ID
	}
}
export default config
```

If you haven't installed globally the Supabase CLI, you need to specify an "executable" like npx or pnpx to run it: 

```
// you can optionally import this helper type to get an idea of the different options
import type { ConfigCommons as Config } from 'supabase-query-ts'

const config = {
	supabase: {
		key: environment.SUPABASE_ANON_KEY,
		projectId: environment.SUPABASE_PROJECT_ID
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
- supabase: equivalent (but incomplete for now) to Supabase CLI arguments after `supabase gen types typescript `
- options
- queries: all your queries will be centralized here

#### options

##### moreFiles

2 more representations of your table structure will be in your folder: 
- tables.ts
- tables.jsc.ts

#### queries

Before starting writing queries, run SupaQ for the first time.

```
pnpm supaq ./relative/path/to/your/config/file.ts
```

It generated a file called `supaq.ts`. 

Now, go back to your config file. Replace the type import to get auto-completion and type safety.

```
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
		[T in SupaTable]?: {
			[Version: string]: Query<T>
		}
	}
} & ConfigCommons
type Query<Table extends SupaTable> = {
	columns: Array<SupaColumn<Table>>
	includes: Includes<Table>
}
```

Each table can have multiple versions of queries. Each version selects columns, and chooses to include or not the subtables by adding { subtable: "version_of_query" } to includes.

Try it!

#### supaq.ts

It delivers you:
- the complete output from `supabase gen types typescript`
- the SupaQ class with the .select() and .insert() methods
- helper types
- the parser: used internally in SupaQ.select()

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

###### suparse : the parser

- Adds CRUD operations directly to the row :
	- ```.set(column, value)```
	- ```.delete()```
- Recursively dds the private fields `__table` and `__version` 

An object deeply passed down into components got metadata of the table where it comes, plus a way to interact directly with the database.

`const data = await SupaQ.select("users", "extended", { "is_pro": true })`
`const name = data[0].name // type string` -> get a typed value
`await data[1].set('age', '18') // type error : age is a number` -> update the row
`await data[2].delete()` -> delete the row (in the config you can opt-in for soft deletion)
