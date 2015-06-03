angular.module("beam.historicVCCDvrt", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('historicVCCDvrt', {
        url: '/historicVCCDvrt',
        views: {
            "main": {
                controller: 'HistoricVCCDvrtController as model',
                templateUrl: 'historicVCCDvrt/historicVCCDvrt.tpl.html'
            }
        },
        data:{ pageTitle: 'Historic VCG VRT Drilldown' }
    });
})

.controller('HistoricVCCDvrtController', [ '$scope', '$location', 'DiagramHeaders', function HistoricVCCDvrtController($scope, $location, DiagramHeaders) {
    
    $scope.selFunc = "Toplist";
    $scope.vrtStr = DiagramHeaders.vrtStr;

    var chart = new AmCharts.AmSerialChart();
		chart.startDuration = 0.5;
		chart.categoryField = "category";
		chart.categoryAxis.gridThickness = 0;

		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart.addValueAxis(vaxis);
		
    chart.dataProvider = [

        {
          "category": "2009",
          "target": "115",
          "actual": "153"
        },
        {
          "category": "2010",
          "target": "135",
          "actual": "172"
        },
        {
          "category": "2011",
          "target": "190",
          "actual": "187"
        },
        {
          "category": "2012",
          "target": "150",
          "actual": "143"
        },
        {
          "category": "2013",
          "target": "135",
          "actual": "120"
        },
        {
          "category": "2014",
          "target": "120",
          "actual": "153"
        }
    ];
    chart.write('div1');

    var chart2 = new AmCharts.AmSerialChart();
		chart2.startDuration = 0.5;
		chart2.categoryField = "category";
		chart2.categoryAxis.gridThickness = 0;

		
		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart2.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart2.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart2.addValueAxis(vaxis);
		
    chart2.dataProvider = [
                
        {
          "category": "2009",
          "target": "115",
          "actual": "153"
        },
        {
          "category": "2010",
          "target": "135",
          "actual": "172"
        },
        {
          "category": "2011",
          "target": "190",
          "actual": "187"
        },
        {
          "category": "2012",
          "target": "150",
          "actual": "143"
        },
        {
          "category": "2013",
          "target": "135",
          "actual": "120"
        },
        {
          "category": "2014",
          "target": "120",
          "actual": "153"
        }
    ];
    chart2.write('div2');
        

    function redirect(event) {
        DiagramHeaders.vrtStr = event.item.category;
        $location.path('/toplist').replace();
        $scope.$apply();
    }
    
    $scope.viewToplist = function(str) {
        DiagramHeaders.tmyStr = '2009-2014';
        DiagramHeaders.modelStr = str;
        $location.path('/toplist').replace();
        $scope.$apply();
    }
}]);
