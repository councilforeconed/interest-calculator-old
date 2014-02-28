/* global Backbone, numeral */

var AccountView = Backbone.View.extend({
  className: 'account',
  tagName: 'tr',
  events: {
    'click .remove a': 'removeAccount'
  },
  render: function (accountType) {
    this.$el.append('<td class="account-name hidden-xs">' + this.model.get('name') + '</td>');
    this.$el.append('<td class="account-base hidden-xs">$' + numeral(this.model.get('base')).format('0,0') + '</td>');
    this.$el.append('<td class="account-interest-rate">' + this.model.get('rate') + '%</td>');
    this.$el.append('<td class="account-term">' + this.model.get('term') + ' years</td>');
    this.$el.append('<td class="account-total">$' + numeral(this.model.data().pop()).format('0,0') + '</td>');
    if (accountType === 'loan') {
      this.$el.append('<td class="account-total">$' + numeral(this.model.monthlyPayments()).format('0,0') + '</td>');
    }
    this.$el.append('<td class="remove hidden-xs"><a href="#">&times;</a></td>');
    return this;
  },
  removeAccount: function (e) {
    e.preventDefault();
    this.model.trigger('removeAccount', this.model);
  }
});