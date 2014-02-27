/* global DataSet, ChartView */

var dataset = new DataSet();
dataset.add({ name: 'First Financial', rate: 5 });
dataset.add({ name: 'Secondary Savings', rate: 4.5 });
dataset.add({ name: 'Third Bank', rate: 3.5 });

var chartView = new ChartView({ collection: dataset });
chartView.render();