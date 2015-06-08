angular.module("beam.faildiaAPVCCDvlDrilldown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('faildiaAPVCCDvlDrilldown', {
        url: '/faildiaAPVCCDvlDrilldown',
        views: {
            "main": {
                controller: 'FaildiaAPVCCDvlDrilldownController as model',
                templateUrl: 'faildiaAPVCCDvlDrilldown/faildiaAPVCCDvlDrilldown.tpl.html'
            }
        },
        data:{ pageTitle: 'Faildia VCCD VL Drilldown' }
    });
})

.controller('FaildiaAPVCCDvlDrilldownController', [ '$scope', '$location', 'DiagramHeaders', function FaildiaAPVCCDvlDrilldownController($scope, $location, DiagramHeaders) {

    var vrts = [ 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F08' ];
    $scope.selFunc0 = "Toplist";
    $scope.selFunc1 = "Toplist";
    $scope.selFunc2 = "Toplist";
    $scope.selFunc3 = "Toplist";
    $scope.selFunc4 = "Toplist";
    $scope.selFunc5 = "Toplist";
    $scope.selFunc6 = "Toplist";
    
    var chart8 = new AmCharts.AmSerialChart();
		chart8.startDuration = 0.5;
		chart8.categoryField = "category";
		chart8.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart8.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart8.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart8.addValueAxis(vaxis);
    
    chart8.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart8.write('div8');
    chart8.addListener("clickGraphItem", click1Diagram);
   
    var chart9 = new AmCharts.AmSerialChart();
		chart9.startDuration = 0.5;
		chart9.categoryField = "category";
		chart9.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart9.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart9.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart9.addValueAxis(vaxis);
    
    chart9.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart9.write('div9');
    chart9.addListener("clickGraphItem", click2Diagram);

    var chart10 = new AmCharts.AmSerialChart();
		chart10.startDuration = 0.5;
		chart10.categoryField = "category";
		chart10.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart10.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart10.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart10.addValueAxis(vaxis);
    
    chart10.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart10.write('div10');
    chart10.addListener("clickGraphItem", click3Diagram);

    var chart11 = new AmCharts.AmSerialChart();
		chart11.startDuration = 0.5;
		chart11.categoryField = "category";
		chart11.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart11.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart11.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart11.addValueAxis(vaxis);
    
    chart11.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart11.write('div11');
    chart11.addListener("clickGraphItem", click4Diagram);

    var chart12 = new AmCharts.AmSerialChart();
		chart12.startDuration = 0.5;
		chart12.categoryField = "category";
		chart12.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart12.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart12.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart12.addValueAxis(vaxis);
    
    chart12.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart12.write('div12');
    chart12.addListener("clickGraphItem", click5Diagram);
    
    var chart13 = new AmCharts.AmSerialChart();
		chart13.startDuration = 0.5;
		chart13.categoryField = "category";
		chart13.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart13.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart13.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart13.addValueAxis(vaxis);
    
    chart13.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart13.write('div13');
    chart13.addListener("clickGraphItem", click6Diagram);
    
    var chart14 = new AmCharts.AmSerialChart();
		chart14.startDuration = 0.5;
		chart14.categoryField = "category";
		chart14.categoryAxis.gridThickness = 0;

		graph = new AmCharts.AmGraph();
		graph.title = "Target";
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		chart14.addGraph(graph);
		
		graph = new AmCharts.AmGraph();
		graph.title = "Actual";
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.lineAlpha = 0.2;
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart14.addGraph(graph);

		vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart14.addValueAxis(vaxis);
    
    chart14.dataProvider = [
        {
          "category": "S60L",
          "target": "135",
          "actual": "156"
        },
        {
          "category": "XC60",
          "target": "130",
          "actual": "90"
        }
    ];
    chart14.write('div14');
    chart14.addListener("clickGraphItem", click7Diagram);
    
    function click1Diagram(event) {
        DiagramHeaders.vrtStr = 'F02';
        redirect(event, $scope.selFunc0);
    }
    function click2Diagram(event) {      
        DiagramHeaders.vrtStr = 'F03';
        redirect(event, $scope.selFunc1);
    }
    function click3Diagram(event) {      
        DiagramHeaders.vrtStr = 'F04';
        redirect(event, $scope.selFunc2);
    }
    function click4Diagram(event) {      
        DiagramHeaders.vrtStr = 'F05';
        redirect(event, $scope.selFunc3);
    }
    function click5Diagram(event) {      
        DiagramHeaders.vrtStr = 'F06';
        redirect(event, $scope.selFunc4);
    }
    function click6Diagram(event) {      
        DiagramHeaders.vrtStr = 'F07';
        redirect(event, $scope.selFunc5);
    }
    function click7Diagram(event) {      
        DiagramHeaders.vrtStr = 'F08';
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
        DiagramHeaders.modelStr = event.item.category;
        $location.path('/toplist');
        $scope.$apply();
    }
    function showJoblist(event) {
        DiagramHeaders.modelStr = event.item.category;
        $location.path('/joblist');
        $scope.$apply();
    }
    
    $scope.viewPerdia = function(index) {
        DiagramHeaders.vrtStr = vrts[index];        
        $location.path('/perdiaAPVCCDvrtDrilldown');
        //$scope.$apply();
    }
    $scope.historic = function(index) {
        DiagramHeaders.vrtStr = vrts[index];
        $location.path('/historicVCCDvrt');
        //$scope.$apply();
    }
}]);
