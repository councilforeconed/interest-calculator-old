/* global Backbone, numeral, Handlebars, Account, _ */

var AddAccountView = Backbone.View.extend({
  el: '#add-account',
  events: {
    'click #submit-new-account': 'addNew'
  },
  render: function () {
    this.$el.append(Handlebars.compile($('#add-account-template').html()));
    var account = this.collection.last();
    $('#new-account-base-amount').val(account.get('base'));
    $('#new-account-interest-rate').val(account.get('rate') + 1.6);
    $('#new-account-duration').val(account.get('term'));
  },
  addNew: function (e) {
    e.preventDefault();
    var newAccountName = $('#new-account-name');
    var newAccountBaseAmount = $('#new-account-base-amount');
    var newAccountInterestRate = $('#new-account-interest-rate');
    var newAccountDuration = $('#new-account-duration');
    
    var account = {
      name: newAccountName.val(),
      base: parseInt(newAccountBaseAmount.val(), 10),
      rate: parseFloat(newAccountInterestRate.val(), 10),
      term: parseInt(newAccountDuration.val(), 10)
    };
    
    _.keys(account).forEach(function (key) {
      if (_.isNaN(account[key]) || !account[key]) {
        delete account[key];
      }
    });
    
    this.collection.add(account);
    newAccountInterestRate.val(newAccountInterestRate.val() * 1.25);
    newAccountName.val(numeral(Math.ceil(Math.random()*1000)).format('0o') + ' National Bank');
  }
});