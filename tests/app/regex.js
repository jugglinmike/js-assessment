if (typeof define !== 'function') { var define = require('amdefine')(module); }
if (typeof expect !== 'function') { var expect = require('expect.js'); }

define([
  'app/regex'
], function(answers) {
  describe("regular expressions", function() {
    it("you should be able to detect a number in a string", function() {
      expect(answers.containsNumber('abc123')).to.be(true);
      expect(answers.containsNumber('abc')).to.be(false);
    });

    it("you should be able to detect a repeating letter in a string", function() {
      expect(answers.containsRepeatingLetter('bookkeeping')).to.be(true);
      expect(answers.containsRepeatingLetter('rattler')).to.be(true);
      expect(answers.containsRepeatingLetter('cats')).to.be(false);
    });

    it("you should be able to determine whether a string ends with a vowel (aeiou)", function() {
      expect(answers.endsWithVowel('cats')).to.be(false);
      expect(answers.endsWithVowel('gorilla')).to.be(true);
    });

    it("you should be able to capture the first series of three numbers", function() {
      expect(answers.captureThreeNumbers('abc123')).to.be('123');
      expect(answers.captureThreeNumbers('9876543')).to.be('987');
      expect(answers.captureThreeNumbers('abcdef')).to.be(false);
      expect(answers.captureThreeNumbers('12ab12ab')).to.be(false);
    });

    it("you should be able to determine whether a string matches a pattern", function() {
      // the pattern is XXX-XXX-XXXX where all X's are digits
      expect(answers.matchesPattern('800-555-1212')).to.be(true);
      expect(answers.matchesPattern('451-933-7899')).to.be(true);
      expect(answers.matchesPattern('33-444-5555')).to.be(false);
      expect(answers.matchesPattern('abc-def-hijk')).to.be(false);
      expect(answers.matchesPattern('1800-555-1212')).to.be(false);
      expect(answers.matchesPattern('800-555-12121')).to.be(false);
    });

  });
});