angular.module("beam.faildiaAPvrtDrillDown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('faildiaAPvrtDrillDown', {
        url: '/faildiaAPvrtDrillDown',
        views: {
            "main": {
                controller: 'FaildiaAPvrtDrillDownController as model',
                templateUrl: 'faildiaAPvrtDrillDown/faildiaAPvrtDrillDown.tpl.html'
            }
        },
        data:{ pageTitle: 'Faildia AP VRT Drilldown' }
    });
})

.controller('FaildiaAPvrtDrillDownController', [ '$scope', '$location', 'DiagramHeaders', function FaildiaAPvrtDrillDownController($scope, $location, DiagramHeaders) {
    
    $scope.selFunc0 = "Toplist";
    $scope.selFunc1 = "Toplist";
    $scope.selFunc2 = "Toplist";
    $scope.selFunc3 = "Toplist";
    $scope.selFunc4 = "Toplist";
    $scope.selFunc5 = "Toplist";
    $scope.selFunc6 = "Toplist";
    
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
    chart3.write('div3');
    chart3.addListener("clickGraphItem", click3Diagram);
    
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
    chart4.write('div4');
    chart4.addListener("clickGraphItem", click4Diagram);
    
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
    chart5.write('div5');
    chart5.addListener("clickGraphItem", click5Diagram);
    
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
    chart6.write('div6');
    chart6.addListener("clickGraphItem", click6Diagram);
    
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
    chart7.write('div7');
    chart7.addListener("clickGraphItem", click7Diagram);
    
    
    function click1Diagram(event) {
        DiagramHeaders.modelStr = 'S60';
        redirect(event, $scope.selFunc0);
    }
    function click2Diagram(event) {
        DiagramHeaders.modelStr = 'S80';
        redirect(event, $scope.selFunc1);
    }
        function click3Diagram(event) {
        DiagramHeaders.modelStr = 'V60';
        redirect(event, $scope.selFunc2);
    }
        function click4Diagram(event) {
        DiagramHeaders.modelStr = 'V60CC';
        redirect(event, $scope.selFunc3);
    }
        function click5Diagram(event) {
        DiagramHeaders.modelStr = 'V70';
        redirect(event, $scope.selFunc4);
    }
        function click6Diagram(event) {
        DiagramHeaders.modelStr = 'XC70';
        redirect(event, $scope.selFunc5);
    }
        function click7Diagram(event) {
        DiagramHeaders.modelStr = 'XC90';
        redirect(event, $scope.selFunc6);
    }
        
    function redirect(event, selFunc) {
        if (selFunc === "Toplist") {
            showToplist(event);
        } else if (selFunc === "Joblist") {
            showJoblist(event);
            //self.location='../joblist';
        }
    }

    function showToplist(event) {
        DiagramHeaders.vrtStr = event.item.category;
        $location.path('/toplist');
        $scope.$apply();
    }
    function showJoblist(event) {
        DiagramHeaders.vrtStr = event.item.category;
        $location.path('/joblist');
        $scope.$apply();
    }
    
    $scope.viewPerdia = function(str) {
        DiagramHeaders.modelStr = str;
        $location.path('/perdiaVlDrillDown');
        //$scope.$apply();
    }
    $scope.historic = function(str) {
        DiagramHeaders.modelStr = str;
        $location.path('/historicVCTvl');
        //$scope.$apply();
    }
}]);
