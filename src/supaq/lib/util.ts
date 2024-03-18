
type ContextPre = {
	withPrefix:boolean
}

/**
 * chooses between SupaColumn and SupaColumnPre
 */
export function pre(t: string, context: ContextPre): string {
	if (context?.withPrefix) {
		return `${t}Pre`
	} else {
		return `${t}`
	}
}