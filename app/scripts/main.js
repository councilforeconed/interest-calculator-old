/* global Rickshaw, Backbone, _, numeral, moment */

'use strict';

var settings = new Backbone.Model({
  term: 10,
  unit: 'years',
});

var settingsView = new Backbone.View({
  model: settings
});

var Loan = Backbone.Model.extend({
  initialize: function() {
    this.set('color', 'black');
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
    return this;
  }
});

var chartView = new ChartView();
chartView.render();