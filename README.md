The official package supabase-js gives you the power to communicate, securely and easily, from the client to the DB.
But it doesn't provide the DX you deserve :
- types on { data } : we got a parser for that
- easily accessible types, rathen than Database["public"]["Tables"]... : we got a type generator built on top of supabase gen queries that simplifies the process
- a way to update the value of an entry from { data } directly : with supa-Q-base, you would write *await data[0].update({name: "John"})* rather than traditional un-typed *await supabase.from('users').update({name: "John"}).eq({id: 12})*

supa-Q-base makes writing queries soo easy