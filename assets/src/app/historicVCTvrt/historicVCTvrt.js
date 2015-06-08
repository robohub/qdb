angular.module("beam.historicVCTvrt", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('historicVCTvrt', {
        url: '/historicVCTvrt',
        views: {
            "main": {
                controller: 'HistoricVCTvrtController as model',
                templateUrl: 'historicVCTvrt/historicVCTvrt.tpl.html'
            }
        },
        data:{ pageTitle: 'Historic VCT VRT Drilldown' }
    });
})

.controller('HistoricVCTvrtController', [ '$scope', '$location', 'DiagramHeaders', function HistoricVCTvrtController($scope, $location, DiagramHeaders) {
    
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

    var chart3 = new AmCharts.AmSerialChart();
		chart3.startDuration = 0.5;
		chart3.categoryField = "category";
		chart3.categoryAxis.gridThickness = 0;

		
		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart3.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart3.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart3.addValueAxis(vaxis);
		
    chart3.dataProvider = [
                
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
    chart3.write('div3');
    
    var chart4 = new AmCharts.AmSerialChart();
		chart4.startDuration = 0.5;
		chart4.categoryField = "category";
		chart4.categoryAxis.gridThickness = 0;

		
		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart4.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart4.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart4.addValueAxis(vaxis);
		
    chart4.dataProvider = [
                
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
    chart4.write('div4');
    
    var chart5 = new AmCharts.AmSerialChart();
		chart5.startDuration = 0.5;
		chart5.categoryField = "category";
		chart5.categoryAxis.gridThickness = 0;

		
		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart5.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart5.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart5.addValueAxis(vaxis);
		
    chart5.dataProvider = [
                
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
    chart5.write('div5');
    
    var chart6 = new AmCharts.AmSerialChart();
		chart6.startDuration = 0.5;
		chart6.categoryField = "category";
		chart6.categoryAxis.gridThickness = 0;

		
		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart6.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart6.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart6.addValueAxis(vaxis);
		
    chart6.dataProvider = [
                
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
    chart6.write('div6');
    
    var chart7 = new AmCharts.AmSerialChart();
		chart7.startDuration = 0.5;
		chart7.categoryField = "category";
		chart7.categoryAxis.gridThickness = 0;

		var graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart7.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart7.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart7.addValueAxis(vaxis);
		
    chart7.dataProvider = [
                
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
    chart7.write('div7');
    

    $scope.viewToplist = function(str) {
        DiagramHeaders.tmyStr = '2009-2014';
        DiagramHeaders.modelStr = str;
        $location.path('/toplist');
        //$scope.$apply();
    }
}]);
