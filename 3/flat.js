function flat(arr) {
    const result = [];

    function recursiveFlat(arr) {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                recursiveFlat(item);
            } else {
                result.push(item);
            }
        });
    }

    recursiveFlat(arr);

    return result;
}

module.exports = flat;