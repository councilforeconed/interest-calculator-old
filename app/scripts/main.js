/* global Rickshaw, Backbone, _, numeral, moment */

'use strict';

var settings = new Backbone.Model({
  term: 10,
  unit: 'years',
  palette: new Rickshaw.Color.Palette({scheme: 'colorwheel'})
});

var settingsView = new Backbone.View({
  model: settings
});

var Loan = Backbone.Model.extend({
  initialize: function() {
    this.set('color', settings.get('palette').color());
  },
  defaults: {
    name: '',
    base: 10000,
    rate: 5
  },
  data: function() {
    var data = [];
    var amount = this.get('base');
    var date = moment();
    _.times(settings.get('term'), function(i) {
      data.push({ x: date.unix(), y: amount });
      amount = amount + (amount * this.get('rate') / 100);
      date = date.add(settings.get('unit'), 1);
    }, this);
    return data;
  }
});

var DataSet = Backbone.Collection.extend({
  model: Loan,
  data: function() {
    return this.models.map(function(d) {
      return {color: d.get('color'), data: d.data(), name: d.get('name')};
    });
  },
  min: function() {
    var min = _.min(this.models.map(function(d) {
      return d.get('base');
    })) - 500;
    return min;
  }
});

var dataset = new DataSet();
dataset.add({ name: 'First Financial', rate: 5 });
dataset.add({ name: 'Secondary Savings', rate: 4.5 });
dataset.add({ name: 'Third Bank', rate: 3.5 });

var ChartView = Backbone.View.extend({
  el: '#chart',
  model: dataset,
  render: function() {
    this.$el.children().detach();
    var graph = new Rickshaw.Graph( {
      element: this.el,
      height: 250,
      renderer: 'line',
      min: this.model.min(),
      series: this.model.data()
    });
  
    var xAxis = new Rickshaw.Graph.Axis.Time({
      graph: graph
    });
  
    var yAxis = new Rickshaw.Graph.Axis.Y({
      graph: graph,
      tickFormat: function(y) {
        return '$' + numeral(y).format('0,0');
      }
    });
  
    var hoverDetail = new Rickshaw.Graph.HoverDetail( {
      graph: graph,
      yFormatter: function(y) { return '$' + numeral(y).format('0,0'); }
    });
  
    xAxis.render();
    yAxis.render();
    graph.render();
    return this;
  }
});

var chartView = new ChartView();
chartView.render();