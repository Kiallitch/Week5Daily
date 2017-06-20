var loremIpsum = require('knicklabs-lorem-ipsum.js')
  , output     = loremIpsum();

  output = loremIpsum({
    count: 3, units: 'sentences', sentenceLowerBound: 5, sentenceUpperBound: 15  , paragraphLowerBound: 3, paragraphUpperBound: 7, format: 'plain', words: ['ad', 'dolor', ... ], random: Math.random, suffix: EOL
  });
