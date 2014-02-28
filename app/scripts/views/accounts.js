/* global Backbone, AccountView, _ */

var AccountsView = Backbone.View.extend({
  el: '#accounts',
  tagName: 'table',
  className: 'table',
  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
  },
  render: function () {
    this.$el.empty();
    
    this.$el.append(
      '<thead>' +
        '<tr>' +
          '<th>Name</th>' +
          '<th>Base Amount</th>' +
          '<th>Interest Rate</th>' +
          '<th>Duration</th>' +
          '<th>Final Amount</th>' +
        '</tr>' +
      '</thead>'
    );
    
    var $tbody = $('<tbody></tbody>');
    this.collection.models.forEach(function (account) {
      var view = new AccountView({ model: account });
      $tbody.append(view.render().el);
    }, this);
    this.$el.append($tbody);
    return this;
  }
});