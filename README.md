**WARNING: CURRENTLY A BETA.**

The official package supabase-js gives you the power to communicate, securely and easily, from the client to the database.
But it does not provide the DX you deserve :
- strongly typed select operations : never make a spelling mistake or misplace a comma again
- types on { data }
- easily accessible types, rather than `Database["public"]["Tables"]`... : our type generator built on top of `supabase gen queries` simplifies the process. Say hi to `SupaTable`, `SupaColumn<T>`, `SupaValue<T, C>`, `SupaRow<T>`
- a way to update the value of an entry from { data } directly : simply write `await data[0].update({name: "John"})` rather than traditional untyped `await supabase.from('users').update({name: "John"}).eq({id: 12})`

## Supabase Query Typescript, a.k.a. SupaQ : the strongly typed querier for your Supa database

Use this package as a drop-in **replacement for supabase-js and supabase CLI for database operations**.

### Before and after

#### writing the query

- requires manually writing multiple times the same code, making refactoring painful
--> SupaQ got subqueries : write *once* in your codebase the columns you want to provide to the client
- supabase-js doesn't infer types of columns
--> SupaQ does infer types, which means { data } is fully typed

***never write twice ; refactor 3x faster***

### What you will get

##### helper types

SupaQ adds helpers types on top of ```supabase gen types typescript```. They help for auto-completion plus type safety of all database related operations.

- ```type DB``` : quick access to tables
- ```type SupaTable``` : list of tables
- ```type Column<Table>``` : direct access to column names per table
- ```type SupaColumn<Table>``` : if you use the pattern tablename_columnname (```--tc-naming```), then it provides the columnname list
```type SupaValue<Table, Column>``` : TS type of the column
```type SupaRow<Table>``` : fully typed object representing a row

##### SupaQ class

The SupaQ class provides methods for building queries and query your database.

- ```async SupaQ.insert()``` : inserting a row from the client-side has never been so type-safe

- ```async SupaQ.select()``` : selecting rows

##### Internals

###### suparse : the parser

- Adds CRUD operations directly to the row :
	- ```.set(column, value)```
	- ```.delete()```
- Adds the private fields `__table` and `__version` recursively

An object deeply passed down into components got metadata of the table where it comes, plus a way to interact from the database without using supabase-js directly.

```const name = data[0].name // string``` -> get a typed value
```await data[1].set('age', '18') // type error : age is a number``` -> update the row
```await data[2].delete()``` -> delete the row
