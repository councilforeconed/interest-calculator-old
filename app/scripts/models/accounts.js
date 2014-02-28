/* global Backbone, _, Account, settings, numeral */

var Accounts = Backbone.Collection.extend({
  initialize: function () {
    this._removed = [];
    this.on('removeAccount', function (account) {
      this._removed.push(account.get('name'));
      this.remove(account);
    }, this);
  },
  model: Account,
  data: function() {
    var data = this.models.map(function (datum) {
      return datum.data();
    });
    return data;
  },
  accountType: 'savings'
});