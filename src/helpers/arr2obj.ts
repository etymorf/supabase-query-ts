interface Options<T> {
	key?: string;
	value?: (item: T) => object | number | string | boolean;
}

export const arr2obj = <T = any>(array: Array<any>, options?: Options<T>): { [id: string]: T } => {
	if (!(Array.isArray(array) && array.length !== 0)) {
		return {};
	}
	return array.reduce((obj, item) => {
		const key = options?.key || 'id';
		if (key) {
			obj[item[key]] = item;
		}
		return obj;
	}, {});
};

export default arr2obj;
