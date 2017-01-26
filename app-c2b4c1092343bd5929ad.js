webpackJsonp([0],{114:function(e,t){},115:function(e,t){},116:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function e(){"ngInject";o(this,e)};t.App={template:n(182),controller:i}},117:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(196),a=o(i),r=n(187),s=n(195),l=o(s),u=angular.module("main",[l.default,r.chart]).component("main",a.default);t.default=u.name},118:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();t.MoviesService=function(){function e(){"ngInject";n(this,e),this.movies=[{title:"Movie 1",releaseDate:"2015-01-04",showTimes:["2015-05-03","2015-05-04"]},{title:"Movie 2",releaseDate:"2015-01-04",showTimes:["2015-05-03","2015-05-04"]}]}return o(e,[{key:"getMovies",value:function(){return this.movies}}]),e}()},119:function(e,t){"use strict";function n(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",component:"app"})}n.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},177:function(e,t){},178:function(e,t){},179:function(e,t){e.exports='<div class="row col-lg-12 chart-box">\n  <div class="title-left">\n    <h2>Total Movie Sales</h2>\n    <h5>Comparison - Movie 1 and Movie 2</h5>\n  </div>\n  <div class="title-right">\n    <h5>Average value of sales in the past month in : <span>United States</span></h5>\n    <h4>All sales: 162,862</h4>\n  </div>\n  <div class="chart-row">\n    <div class="chart-container">\n      <canvas id="line" class="chart chart-line" chart-data="vm.data" chart-labels="vm.labels" chart-series="vm.series" chart-options="vm.options" chart-dataset="vm.dataset" chart-dataset-override="vm.datasetOverride"></canvas>\n    </div>\n    <div class="totals">\n      <h1>2,346</h1>\n      <h5>Total orders - Movie 1</h5>\n      <progress max="100" value="50" class="bar-total"></progress>\n      <h1>4,422</h1>\n      <h5>Total orders - Movie 2</h5>\n      <progress max="100" value="66" class="bar-total"></progress>\n    </div>\n  </div>\n  <div class="caption">\n    <h5><span>Analysis of sales:</span> The value has been changed over time, and last month reached a level over $50,000.</h5>\n    <h5 class="updated-on"><span class="glyphicon glyphicon-time" aria-hidden="true"></span> Update on 16.07.2015</h5>\n  </div>\n</div>\n'},180:function(e,t){e.exports='<div class="row col-sm-5 movie">\n  <h2>{{vm.movie.title}}</h2>\n  <h6><span>Release Date</span> <span class="glyphicon glyphicon-time" aria-hidden="true"></span> {{vm.movie.releaseDate | date : "dd MMM y"}}</h6>\n  <div class="show-time" ng-repeat="time in vm.movie.showTimes">\n    <p>{{time | date : format : "longDate"}}</p>\n    <button class="btn btn-primary buy-tickets-btn">Buy Tickets</button>\n  </div>\n</div>\n'},181:function(e,t){e.exports='<movie ng-repeat="movie in vm.moviesList" movie="movie"></movie>\n'},182:function(e,t){e.exports="<main></main>\n"},183:function(e,t){e.exports='<movies-list movies="vm.moviesList"></movies-list>\n'},184:function(e,t){e.exports="<chart></chart>\n<movies-listing></movies-listing>\n"},186:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.chartComponent=void 0;var a=n(179),r=o(a);t.chartComponent={template:r.default,controller:function e(){"ngInject";i(this,e);var t=this;t.labels=["January","February","March","April","May","June","July"],t.series=["Movie 1","Movie 2"],t.data=[[49,48,60,39,55,38,30],[65,60,40,50,35,25,40]],t.datasetOverride=[{}],t.options={fill:!0,pointRadius:110,responsive:!0,defaultFontSize:24,padding:{left:0,top:15,right:24,bottom:15},scales:{responsive:!0,beginAtZero:!1,yAxes:[{id:"y-axis-1",type:"linear",display:!0,position:"left",ticks:{beginAtZero:!1,min:20,max:70,stepSize:10}}]}}},controllerAs:"vm"}},187:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chart=void 0;var o=n(186);n(177);t.chart=angular.module("chartComponentModule",["chart.js"]).component("chart",o.chartComponent).name},188:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.movieComponent=void 0;var a=n(180),r=o(a);t.movieComponent={restrict:"E",bindings:{movie:"<"},template:r.default,controller:function e(){"ngInject";i(this,e)},controllerAs:"vm"}},189:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.movie=void 0;var o=n(188);n(178);t.movie=angular.module("movie",[]).component("movie",o.movieComponent).name},190:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(181),a=o(i),r=n(191),s=o(r),l={restrict:"E",bindings:{movies:"<"},template:a.default,controller:s.default,controllerAs:"vm"};t.default=l},191:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){"ngInject";n(this,e),this.MoviesService=t,this.moviesList=[]}return e.$inject=["MoviesService"],o(e,[{key:"$onInit",value:function(){this.moviesList=this.MoviesService.getMovies()}}]),e}();t.default=i},192:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(190),a=o(i),r=n(189),s=angular.module("moviesList",[r.movie]).component("moviesList",a.default);t.default=s.name},193:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(183),a=o(i),r=n(194),s=o(r),l={template:a.default,controller:s.default,controllerAs:"vm"};t.default=l},194:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=function(){function e(t){"ngInject";n(this,e),this.MoviesService=t,this.moviesList=[]}return e.$inject=["MoviesService"],o(e,[{key:"$onInit",value:function(){this.moviesList=this.MoviesService.getMovies()}}]),e}();t.default=i},195:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(193),a=o(i),r=n(192),s=o(r),l=angular.module("moviesListing",[s.default]).component("moviesListing",a.default);t.default=l.name},196:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(184),a=o(i),r=n(197),s=o(r),l={template:a.default,controller:s.default,controllerAs:"vm"};t.default=l},197:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function e(){"ngInject";n(this,e),this.name="main"};t.default=o},199:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(114);var i=n(1),a=o(i),r=n(116),s=n(117),l=o(s),u=n(118);n(2),n(3);var c=n(119),v=o(c);n(115),a.default.module("app",["ui.router",l.default,"ui.bootstrap"]).config(v.default).service("MoviesService",u.MoviesService).component("app",r.App)}},[199]);