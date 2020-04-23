const lodash_get = require('./lodash_get');

test('get property "a.b" from object "{ a: { b: 1 } }" returns 1', () => {
    expect(lodash_get({ a: { b: 1 } }, 'a.b')).toBe(1);
});

test('get property "a.c" from object "{ a: { b: 1 } }" returns "undefined"', () => {
    expect(lodash_get({ a: { b: 1 } }, 'a.c')).toBeUndefined();
});

test('get property "a.b" from object "{ a: { b: { c: 1 } } }" returns "{ c: 1 }"', () => {
    expect(lodash_get({ a: { b: { c: 1 } } }, 'a.b')).toEqual({ c: 1 });
});

test('get property "a.c" from empty object "{}" returns "undefined"', () => {
    expect(lodash_get({ }, 'a.c')).toBeUndefined();
});