import SupaQ from "./gen/supaq";

async function main(){
	const data = await SupaQ.select("def", "big")
	data.forEach(d => {
		d?.set("deu", "")
		d.deu
	})
}