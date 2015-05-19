angular.module("beam.faildiaAPVCCDvrtDrilldown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('faildiaAPVCCDvrtDrilldown', {
        url: '/faildiaAPVCCDvrtDrilldown',
        views: {
            "main": {
                controller: 'FaildiaAPVCCDvrtDrilldownController as model',
                templateUrl: 'faildiaAPVCCDvrtDrilldown/faildiaAPVCCDvrtDrilldown.tpl.html'
            }
        },
        data:{ pageTitle: 'Faildia VCCD VRT Drilldown' }
    });
})

.controller('FaildiaAPVCCDvrtDrilldownController', [ '$scope', '$location', 'DiagramHeaders', function FaildiaAPVCCDvrtDrilldownController($scope, $location, DiagramHeaders) {

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
          "category": "F02",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "F03",
          "target": "165",
          "actual": "153"
        },
        {
          "category": "F04",
          "target": "135",
          "actual": "172"
        },
        {
          "category": "F05",
          "target": "150",
          "actual": "187"
        },
        {
          "category": "F06",
          "target": "150",
          "actual": "157"
        },
        {
          "category": "F07",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "F08",
          "target": "165",
          "actual": "153"
        }
    ];
    chart.write('div1');
    chart.addListener("clickGraphItem", click1Diagram);

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
          "category": "F02",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "F03",
          "target": "165",
          "actual": "153"
        },
        {
          "category": "F04",
          "target": "135",
          "actual": "172"
        },
        {
          "category": "F05",
          "target": "150",
          "actual": "187"
        },
        {
          "category": "F06",
          "target": "150",
          "actual": "157"
        },
        {
          "category": "F07",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "F08",
          "target": "165",
          "actual": "153"
        }
    ];
    chart2.write('div2');
    chart2.addListener("clickGraphItem", click2Diagram);

    
    function click1Diagram(event) {
        DiagramHeaders.modelStr = 'S60L';
        redirect(event);
    }
    function click2Diagram(event) {
        DiagramHeaders.modelStr = 'XC60';
        redirect(event);
    }

        
    function redirect(event) {
        var title = "Faildia VCCD Ranking";
        //DiagramHeaders.plantStr = "VCC";
        DiagramHeaders.vrtStr = event.item.category;
        
        $location.path('/toplist').replace();
        $scope.$apply();
    }
    
    $scope.viewPerdia = function() {
        $location.path('/perdiaAPVCCDvrtDrilldown').replace();
        $scope.$apply();
    }
}]);

