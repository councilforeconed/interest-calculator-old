/* global Backbone, _, Account, settings, numeral */

var Accounts = Backbone.Collection.extend({
  model: Account,
  data: function() {
    var data = this.models.map(function (datum) {
      return datum.data();
    });
    return data;
  }
});