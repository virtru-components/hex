var assert = require('chai').assert,
    hex = require('./index.js');

describe('hex', function() {
  it('encodes', function() {
    var encodedString = hex.encode('Hello world');
    assert.equal(encodedString, "48656c6c6f20776f726c64");
  });
  it('decodes', function() {
    var string = hex.decode('466f6f');
    assert.equal(string, 'Foo');
  });
});
