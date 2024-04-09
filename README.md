The official package supabase-js gives you the power to communicate, securely and easily, from the client to the DB.
But it doesn't provide the DX you deserve :
- types on { data } : we got a parser for that
- easily accessible types, rathen than Database["public"]["Tables"]... : we got a type generator built on top of supabase gen queries that simplifies the process
- a way to update the value of an entry from { data } directly : with Supa**Q**base, you would write *await data[0].update({name: "John"})* rather than traditional un-typed *await supabase.from('users').update({name: "John"}).eq({id: 12})*


## Supa**Q**base, the **non official (yet)** strongly typed **Q**uerier for your Supa database

### Before and after

#### writing the query

- requires manually writing multiple times the same code, making refactoring painful
--> Supa**Q**base got subqueries : write *once* in your codebase the columns you want to provide to the client
- supabase-js doesn't infer types of columns
--> Supa**Q**base does infer types, which means { data } is fully typed

***never write twice ; refactor 3x faster***

### The tuto

#### 1. Dedicate a folder to SupaQ

First, create a folder. *CLI scripts in the next steps must be called from this folder.*

Add a file [supabase.js] or [supabase.ts] that exports a **SupabaseClient** as *default*. Refer to Supabase docs on how to initialize a client.

```
const supabase: SupabaseClient = createSupabaseClient(
	PUBLIC_SUPABASE_URL,
	PUBLIC_SUPABASE_ANON_KEY
)

export default supabase
```

***CLI scripts in the next steps must be called from this folder.***

#### 2. Generate TypeScript types from your database with Supa**Q**base

```pnpm supaqbase gen types ```

You must use one of the flags of ```supabase gen types typescript ``` : ```--project-id```, ```--local``` to determine where your database is.

Example :

```pnpm supaqbase gen types --project-id=fklfjfdiéç!eklfjljfkgjzpeir```

##### supagentypes.ts

Supa**Q**base adds helpers types on top of ```supabase gen types typescript```. They help for auto-completion plus type safety of all database related operations.

- ```type DB``` : quick access to tables
- ```type SupaTable``` : list of tables
- ```type Column<Table>``` : direct access to column names per table
- ```type SupaColumn<Table>``` : if you use the pattern tablename_columnname (```--tc-naming```), then it provides the columnname list
```type SupaValue<Table, Column>``` : TS type of the column
```type SupaRow<Table>``` : fully typed object representing a row

##### Supa**Q** class

The Supa**Q** class provides methods for building queries and query your database.

- ```async insert (table, changes)``` : inserting a row from the client-side has never been so type-safe

- ```query(table, ...columns)```, ```includedEl(table, includes)```, ```subquery(table, includes, altName?)```, ```subqueries(tables, includes)``` : a set of query building functions designed to avoid redundant queries once for all with subqueries (partials)

##### suparse.ts

- Adds CRUD operations directly to the row :
	- ```.get(column)```
	- ```.set(column, value)```
	- ```.delete()```
- Adds the private field ```__table```

An object deeply passed down into components got metadata of the table where it comes, plus a way to interact from the database without using supabase-js directly.

```const name = data[0].get('name') // infers type string``` -> get a typed value
```await data[1].set('age', '18') // type error : age is a number``` -> update the row
```await data[2].delete({soft: true})``` -> delete the row

#### 3. Write queries into Supa**Q** class

Open [supaq.ts] and add methods to Supa**Q** class

##### Real world

To query the **island** table :

```
island(includes: Includes): string {
	return `
		${this.query('island', 'name', 'name_native', 'name_short', 'geo_airport')}
		${this.subqueries(['partner'], includes)}
	`;
}
```

**includes** is the way you manage how deep your query goes :
**partner** is related to **island**
```island(['partner'])``` will include **partner**
```island([])``` will not include **partner**

To query the **partner** table :

```
partner(includes: Includes): string {
	return `
		${this.query(
			'partner',
			'name',
			'address',
			'geo_json'
		)}
		${this.subqueries(
			[
				'partner_type', 
				'island'
			],
			includes
		)}
	`;
}
```
Like passing down props in front-end frameworks like React or Svelte, includes is passed down to the subquery.

This is how Supa**Q**base avoids infinite nesting :
```partner(['island']) ``` queries the table **island** but not **partner** itself

#### 4. Generate queries with Supa**Q**base

Call ```supa gen queries``` and get generated a Supa**Q**ueries type.

Note : You need to call the script when you make changes to Supa**Q**. If you want an automated generation of Supa**Q**ueries, consider contributing to the project.

##### supagenqueries.ts

Supa**Q**ueries type

### File structure

Generated files : 
- Don't touch :
	- [supagenqueries] : SupaGenQueries
	- [supagentypes] : SupaGenTypes
	- [supaq]
- Touch :
	- [supaqueries] : 
		- **SupaDraftQueries** extends SupaQ
		- **SupaVersionQueries** : 
			how deep you want query related tables ?
			-> create unlimited versions for all use cases and name them
			```offer: 
				{
					max: Supa.offer(['offer_type', ['price', 'unit'], ['collection_join_offer', 'collection'], ['offer_join_feature', ['feature', 'feature_type']], ['partner', 'distance', 'partner_type', 'island', ['partner_join_feature', ['feature', 'feature_type']]]]),
					min: Supa.offer(['offer_type'])
				}
			```
			Here, **offer** table got 2 versions: **min** and **max**. For many reasons, you may consider to limit the nesting of related data.
			-> call ```supa gen queries```, it will generate all the types and do the magic for you in the background
			-> use ```const {data, error} = await SupaQ.select('offer', 'min', {id: {eq: 8}})``` and enjoy a typed result
			It is the equivalent of writing ```const {data, error} = await supabase.from('offer').select('id, title, price, description').eq('id', 8)```, except that SupaQ types the result and supabase-js only partially.
			***Try both and see the difference!***


#### Your home (touch!)
[supaq] exports

SupaQ files:

Generated once, then up to the user:
- supaq -> main class + SupaQueries

Generated:
- supagenqueries -> from supaqbase gen queries
- supagentypes -> from supabase gen types

Internals:
- supastic -> supaqbase gen queries
- suparse -> used in SupaQ.select
- supats -> supaqbase gen types
