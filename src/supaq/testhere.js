async function main() {
	const config = await import('./config.js')
	console.log(JSON.stringify(config.default))
}

main()