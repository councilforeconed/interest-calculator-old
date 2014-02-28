/* global Backbone, _, c3, dataset, numeral */

var ChartView = Backbone.View.extend({
  el: '#chart',
  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.on('change', this.render, this);
    this.collection.on('add', this.render, this);
  },
  render: function() {
    c3.generate({
      data: { columns: this.collection.data() },
      legend: { show: false },
      height: 300,
      axis : {
        x: { label: this.collection.first().get('timeUnits') },
        y: {
          tick: { format: function (d) { return '$' + numeral(d).format('0,0'); } },
          label: 'amount'
        }
      }
    });
  }
});