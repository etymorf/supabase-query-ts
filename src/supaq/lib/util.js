/**
 * @typedef {Object} ContextPre
 * @property {boolean} [withPrefix] optional
 */


/**
 * @function pre chooses between SupaColumn and SupaColumnPre
 * @param {string} t 
 * @param {ContextPre} [context]
 * @returns {string}
 */
export function pre(t, context) {
	if (context?.withPrefix) {
		return `${t}Pre`
	} else {
		return `${t}`
	}
}