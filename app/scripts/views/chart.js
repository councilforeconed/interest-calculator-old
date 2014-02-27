/* global Backbone, _, c3, dataset */

var ChartView = Backbone.View.extend({
  el: '#chart',
  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
  },
  render: function() {
    c3.generate(this.collection.c3());
  }
});