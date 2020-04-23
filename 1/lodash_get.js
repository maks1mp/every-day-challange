function lodash_get(obj, property) {
    const propsList = property.split('.');
    let temp = obj;

    while (propsList.length > 0) {
        const prop = propsList.shift();
        
        if (temp[prop]) {
            temp = temp[prop];
        } else {
            return;
        }
    }

    return temp;
}

module.exports = lodash_get;