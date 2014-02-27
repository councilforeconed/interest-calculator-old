/* global Backbone, _, Account, settings, numeral */

var DataSet = Backbone.Collection.extend({
  model: Account,
  data: function() {
    var data = this.models.map(function (datum) {
      return datum.data();
    });
    return data;
  },
  c3: function () {
    return {
      data: {
        columns: this.data()
      },
      legend: {
        show: false
      },
      axis : {
        x: {
          label: this.first().get('timeUnits')
        },
        y: {
          tick: {
            format: function (d) { return '$' + numeral(d).format('0,0'); }
          },
          label: 'amount'
        }
      }
    };
  }
});