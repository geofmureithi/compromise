'use strict';
const Text = require('../../index');
const Person = require('./person');
//this is used for pronoun and honorifics, and not intented for more-than grammatical use (see #117)

//the () subset class
const methods = {
  pronoun: function() {
    return this.list.map((ts) => ts.pronoun());
  }
};

const find = function(r, n) {
  let people = r.clauses();
  people = people.match('#Person+');
  if (typeof n === 'number') {
    people = people.get(n);
  }
  people.list = people.list.map((ts) => {
    return new Person(ts.terms, ts.lexicon, ts.refText, ts.refTerms);
  });
  return people;
};

module.exports = Text.makeSubset(methods, find);
