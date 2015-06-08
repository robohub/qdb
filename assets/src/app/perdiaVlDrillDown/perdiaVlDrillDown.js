angular.module("beam.perdiaVlDrillDown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('perdiaVlDrillDown', {
        url: '/perdiaVlDrillDown',
        views: {
            "main": {
                controller: 'PerdiaVlDrillDownController as model',
                templateUrl: 'perdiaVlDrillDown/perdiaVlDrillDown.tpl.html'
            }
        },
        data:{ pageTitle: 'Perdia VL Drilldown' }
    });
})

.controller('PerdiaVlDrillDownController', [ '$scope', '$location', 'DiagramHeaders', function PerdiaVlDrillDownController($scope, $location, DiagramHeaders) {

    //$scope.showVRT = DiagramHeaders.showVRT;

    // Hämta variabler från Actual vs Target  -------------
    $scope.plantStr = DiagramHeaders.plantStr;
    $scope.tmyStr = DiagramHeaders.tmyStr;
    $scope.modelStr = DiagramHeaders.modelStr;
    $scope.vrtStr = DiagramHeaders.vrtStr;


		var perdia8 = new AmCharts.AmSerialChart();
		perdia8.startDuration = 0.5;
		perdia8.categoryField = "category";
		perdia8.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia8.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia8.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia8.addValueAxis(vaxis);
		
		perdia8.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia8.write('div8');

 		var perdia9 = new AmCharts.AmSerialChart();
		perdia9.startDuration = 0.5;
		perdia9.categoryField = "category";
		perdia9.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia9.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia9.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia9.addValueAxis(vaxis);
		
		perdia9.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia9.write('div9');

		var perdia10 = new AmCharts.AmSerialChart();
		perdia10.startDuration = 0.5;
		perdia10.categoryField = "category";
		perdia10.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia10.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia10.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia10.addValueAxis(vaxis);
		
		perdia10.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia10.write('div10');

		var perdia11 = new AmCharts.AmSerialChart();
		perdia11.startDuration = 0.5;
		perdia11.categoryField = "category";
		perdia11.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia11.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia11.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia11.addValueAxis(vaxis);
		
		perdia11.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia11.write('div11');

		var perdia12 = new AmCharts.AmSerialChart();
		perdia12.startDuration = 0.5;
		perdia12.categoryField = "category";
		perdia12.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia12.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia12.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia12.addValueAxis(vaxis);
		
		perdia12.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia12.write('div12');

		var perdia13 = new AmCharts.AmSerialChart();
		perdia13.startDuration = 0.5;
		perdia13.categoryField = "category";
		perdia13.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia13.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia13.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia13.addValueAxis(vaxis);
		
		perdia13.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia13.write('div13');

		var perdia14 = new AmCharts.AmSerialChart();
		perdia14.startDuration = 0.5;
		perdia14.categoryField = "category";
		perdia14.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		
		graph.valueField = "target";
		//graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.fillAlphas = 0;
		graph.lineAlpha = 1;
		graph.lineThickness = 4;
		//graph.columnWidth = 0.2;
		//graph.newStack = true;
		perdia14.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia14.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia14.addValueAxis(vaxis);
		
		perdia14.dataProvider = [
						{
							"category": "10Q1",
							"target": "180",
							"actual": "260"
						},
						{
							"category": "10Q2",
							"target": "175",
							"actual": "248"
						},
						{
							"category": "10Q3",
							"target": "175",
							"actual": "230"
						},
						{
							"category": "10Q4",
							"target": "175",
							"actual": "220"
						},
						{
							"category": "11Q1",
							"target": "175",
							"actual": "210"
						},
						{
							"category": "11Q2",
							"target": "160",
							"actual": "210"
						},
						{
							"category": "11Q3",
							"target": "160",
							"actual": "170"
						},
						{
							"category": "11Q4",
							"target": "160",
							"actual": "160"
						},
						{
							"category": "12Q1",
							"target": "160",
							"actual": "140"
						},
						{
							"category": "12Q2",
							"target": "130",
							"actual": "245"
						},
						{
							"category": "12Q3",
							"target": "130",
							"actual": "230"
						}
					];
					
		perdia14.write('div14');

   $scope.viewBreakdown1 = function() {
       DiagramHeaders.vrtStr = 'F02';
       redirect();
    }
   $scope.viewBreakdown2 = function() {
       DiagramHeaders.vrtStr = 'F03';
       redirect();
    }
     $scope.viewBreakdown3 = function() {
       DiagramHeaders.vrtStr = 'F04';
       redirect();
    }
     $scope.viewBreakdown4 = function() {
       DiagramHeaders.vrtStr = 'F05';
       redirect();
    }
     $scope.viewBreakdown5 = function() {
       DiagramHeaders.vrtStr = 'F06';
       redirect();
    }
     $scope.viewBreakdown6 = function() {
       DiagramHeaders.vrtStr = 'F07';
       redirect();
    }
     $scope.viewBreakdown7 = function() {
       DiagramHeaders.vrtStr = 'F08';
       redirect();
    }
     
    function redirect() {
        DiagramHeaders.plantStr = 'VCT';
        //DiagramHeaders.modelStr = 'All';
        $location.path('/perdiaBreakdown');
        //$scope.$apply();
    }

}]);
