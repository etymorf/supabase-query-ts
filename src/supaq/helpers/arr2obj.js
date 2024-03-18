export const arr2obj = (array, options) => {
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
