/*global describe, it, Account, assert */

'use strict';
(function () {
  describe('Account class', function () {
    it('should exist', function () {
      assert.ok(Account);
    });
    it('should be a function', function () {
      assert.typeOf(Account, 'function');
    });
  });
  
  describe('Account instance', function () {
    var account = new Account();
    ['name', 'base', 'rate', 'term'].forEach(function (property) {
      it('should have should have a default ' + property, function () {
        assert.ok(account.get(property));
      });
    });
    it('should have an annual data array that is the term length + 2', function () {
      assert.equal(account.data('years').length, account.get('term') + 2);
    });
  });
})();
