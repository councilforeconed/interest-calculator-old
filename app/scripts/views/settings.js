/* global Backbone, numeral, Handlebars, Account, _ */

var SettingsView = Backbone.View.extend({
  el: '#settings',
  events: {
    'change': 'changeAccountType'
  },
  render: function () {
    this.$el.append(Handlebars.compile($('#settings-template').html()));
  },
  changeAccountType: function () {
    this.collection.accountType = this.$('input[type=radio]:checked').val();
    this.collection.trigger('changeAccountType');
  }
});