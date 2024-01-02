export const cleanObject = (obj: any = {}) => {
    const result = { ...obj };
    Object.keys(result).forEach((key: string) => {
        const value = result[key];

        if (isVoid(value)) {
            delete result[key];
        }
    });
    return result;
};

// 判断值是否无效
export const isVoid = (value: any) => value == null || value === '';

export const getObjectString = (obj: any = {}) => {
    const newObj = cleanObject(obj);
    const result = Object.entries(newObj).reduce((memo, cur) => {
        return memo + `${cur[0]}=${cur[1]}&`;
    }, '?');
    return result.slice(0, -1);
};
