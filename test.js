let chai = require('chai');
let expect = chai.expect;
let app = require('index.js');

describe('Mathematical Tests', () => {
  describe('Adds numbers', () => {
    it('Adds positive numbers', () => {
      expect(app.addsTwo(3, 4)).toEqual(7);
    })
  })
})