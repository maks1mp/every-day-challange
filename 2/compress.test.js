const compress = require('./compress');

test('compress "aaabbc" should return "a3b2c1"', () => {
    expect(compress('aaabbc')).toEqual('a3b2c1');
});

test('compress "aabbcca" should return "a2b2c2a1"', () => {
    expect(compress('aabbcca')).toEqual('a2b2c2a1');
});