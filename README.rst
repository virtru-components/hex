hex - Encodes and decodes hex strings
=====================================

A simple tool for encoding and decoding hex strings.

Usage::
    
    var hex = require('hex');

    var encodedString = hex.encode('Hello world');
    // encodedString == "48656c6c6f20776f726c64"

    var string = hex.decode('466f6f');
    // string == 'Foo'
