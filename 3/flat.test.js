const flat = require('./flat');

test('flat "[3, [4, [5, [6, 7]]]]" should return "[3, 4, 5, 6, 7]"', () => {
    const arr = [3, [4, [5, [6, 7]]]];

    expect(flat(arr)).toEqual(arr.flat(Infinity));
});

test('flat "[1, 2, [3, 4]]" should return "[1, 2, 3, 4]"', () => {
    const arr = [1, 2, [3, 4]];

    expect(flat(arr)).toEqual(arr.flat(Infinity));
});

test('flat "[1, 2, [3, [4]]]" should return "[1, 2, 3, 4]"', () => {
    const arr = [1, 2, [3, [4]]];

    expect(flat(arr)).toEqual(arr.flat(Infinity));
});