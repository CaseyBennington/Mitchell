'use strict';

import template from './chart.html';

export const chartComponent = {
  template,
  controller: class ChartController {
    constructor() {
      'ngInject';
      const vm = this;
      vm.labels = ["January", "February", "March", "April", "May", "June", "July"];
      vm.series = ['Movie 1', 'Movie 2'];
      vm.data = [
        [49, 48, 60, 39, 55, 38, 30],
        [65, 60, 40, 50, 35, 25, 40]
      ];
      vm.datasetOverride = [{}];
      vm.options = {
        fill: true,
        pointRadius: 110,
        responsive: true,
        defaultFontSize: 24,
        padding: {
          left: 0,
          top: 15,
          right: 24,
          bottom: 15
        },
        scales: {
          responsive: true,
          beginAtZero: false,
          yAxes: [{
            id: 'y-axis-1',
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              beginAtZero: false,
              min: 20,
              max: 70,
              stepSize: 10
            }
          }]
        }
      };
    }
  },
  controllerAs: 'vm'
};

// Directives, from the docs:
// .chart-line
//   chart-data: series data
//   chart-labels: x axis labels
//   chart-options (default: {}): Chart.js options
//   chart-series (default: []): series labels
//   chart-colors (default to global colors): colors for the chart
//   chart-dataset-override (optional): override datasets individually
