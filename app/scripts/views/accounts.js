/* global Backbone, AccountView, _ */

var AccountsView = Backbone.View.extend({
  el: '#accounts',
  tagName: 'table',
  className: 'table',
  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.bind('changeAccountType', this.render);
  },
  render: function () {
    this.$el.empty();
    
    this.$el.append(
      '<thead>' +
        '<tr>' +
          '<th class="hidden-xs">Name</th>' +
          '<th class="hidden-xs">Base Amount</th>' +
          '<th>Interest Rate</th>' +
          '<th>Duration</th>' +
        '</tr>' +
      '</thead>'
    );
    
    if (this.collection.accountType === 'loan') {
      this.$('thead tr').append('<th>Monthly Payments</th>');
    }
    
    this.$('thead tr').append('<th>Final Amount</th>');
    this.$('thead tr').append('<th class="hidden-xs"><span class="glyphicon glyphicon-cog"></span></th>');
    
    var $tbody = $('<tbody></tbody>');
    this.collection.models.forEach(function (account) {
      var view = new AccountView({ model: account });
      $tbody.append(view.render(this.collection.accountType).el);
    }, this);
    this.$el.append($tbody);
    return this;
  }
});