/* global Backbone, AccountView, _ */

var AccountsView = Backbone.View.extend({
  el: '#accounts',
  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
  },
  render: function () {
    this.$el.empty();
    this.collection.models.forEach(function (account) {
      var view = new AccountView({ model: account });
      this.$el.append(view.render().el);
    }, this);
    return this;
  }
});