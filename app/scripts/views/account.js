/* global Backbone, numeral */

var AccountView = Backbone.View.extend({
  className: 'row',
  render: function () {
    this.$el.append('<div class="col-md-4 account-name">' + this.model.get('name') + '</div>');
    this.$el.append('<div class="col-md-2 account-base">$' + numeral(this.model.get('base')).format('0,0') + '</div>');
    this.$el.append('<div class="col-md-2 account-interest-rate">' + this.model.get('rate') + '%</div>');
    this.$el.append('<div class="col-md-2 account-term">' + this.model.get('term') + ' ' + this.model.get('timeUnit') + '</div>');
    this.$el.append('<div class="col-md-2 account-total">$' + numeral(this.model.data().pop()).format('0,0') + '</div>');
    return this;
  }
});