export const zoneDelimitersReg = {
	start: `OUTSIDE YOUR ZONE`,
	stop: `YOUR ZONE STOPS HERE`
} as const
export const zoneDelimiters = {
	start: `
		// DO NOT DELETE ANYTHING, EVEN THE COMMENTS, ${zoneDelimitersReg.start}
		// YOUR ZONE STARTS HERE: please refer to the docs
	`,
	stop: `
		// ${zoneDelimitersReg.stop}
	`
} as const