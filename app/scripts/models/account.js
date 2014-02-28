/* global  Backbone, _ */

var Account = Backbone.Model.extend({
  initialize: function() {
    this.set('color', 'black');
  },
  defaults: {
    name: '',
    base: 10000,
    rate: 5,
    term: 10,
    timeUnit: 'years'
  },
  data: function() {
    var data = [this.get('name')];
    var amount = this.get('base');
    _.times(this.get('term') + 1, function(i) {
      data.push(amount);
      amount = amount + (amount * this.get('rate') / 100);
    }, this);
    return data;
  },
  final: function () {
    return this.data().pop();
  }
});