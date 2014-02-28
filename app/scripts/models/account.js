/* global  Backbone, _ */

var Account = Backbone.Model.extend({
  defaults: {
    name: 'New Account',
    base: 10000,
    rate: 5,
    term: 10,
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
  monthlyPayments: function () {
    return this.final() / this.months();
  },
  months: function () {
    return this.get('term') * 12;
  },
  final: function () {
    return this.data().pop();
  }
});