/* global Backbone, numeral */

var AccountView = Backbone.View.extend({
  className: 'account',
  tagName: 'tr',
  render: function () {
    this.$el.append('<td class="account-name">' + this.model.get('name') + '</td>');
    this.$el.append('<td class="account-base">$' + numeral(this.model.get('base')).format('0,0') + '</td>');
    this.$el.append('<td class="account-interest-rate">' + this.model.get('rate') + '%</td>');
    this.$el.append('<td class="account-term">' + this.model.get('term') + ' years</td>');
    this.$el.append('<td class="account-total">$' + numeral(this.model.data().pop()).format('0,0') + '</td>');
    return this;
  }
});