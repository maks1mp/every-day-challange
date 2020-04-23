function lodash_get(obj, property) {
    const propsMap = property.split('.');
    let temp = obj;

    while (propsMap.length > 0) {
        const prop = propsMap.shift();
        
        if (temp[prop]) {
            temp = temp[prop];
        } else {
            return;
        }
    }

    return temp;
}

module.exports = lodash_get;