/* global Backbone, numeral, Handlebars, Account, _ */

var AddAccountView = Backbone.View.extend({
  el: '#add-account',
  events: {
    'click #submit-new-account': 'addNew'
  },
  render: function () {
    this.$el.append(Handlebars.compile($('#add-account-template').html()));
  },
  addNew: function (e) {
    e.preventDefault();
    var newAccountName = $('#new-account-name');
    var newAccountBaseAmount = $('#new-account-base-amount');
    var newAccountInterestRate = $('#new-account-interest-rate');
    var newAccountDuration = $('#new-account-duration');
    var fields = [newAccountName, newAccountBaseAmount, newAccountInterestRate, newAccountDuration];
    
    var account = {
      name: newAccountName.val(),
      base: parseInt(newAccountBaseAmount.val(), 10),
      rate: parseInt(newAccountInterestRate.val(), 10),
      term: parseInt(newAccountDuration.val(), 10)
    };
    
    console.log(new Account(account).toJSON());
    
  },
  isValid: function () {
    
  }
});