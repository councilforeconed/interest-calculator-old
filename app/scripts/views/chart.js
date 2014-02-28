/* global Backbone, _, c3, dataset, numeral */

var ChartView = Backbone.View.extend({
  el: '#chart',
  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.on('change', this.rerender, this);
    this.collection.on('add', this.rerender, this);
    this.collection.on('remove', this.unrender, this);
  },
  render: function() {
    this._chart = c3.generate({
      data: { columns: this.collection.data() },
      legend: { show: false },
      axis : {
        x: { label: 'years' },
        y: {
          tick: { format: function (d) { return '$' + numeral(d).format('0,0'); } },
          label: 'amount'
        }
      }
    });
  },
  rerender: function () {
    this._chart.load({
      columns: this.collection.data()
    });
  },
  unrender: function () {
    var removed = this.collection._removed.pop();
    
    if (removed) {
      this._chart.unload(removed);
    }
    this.render();
  }
});