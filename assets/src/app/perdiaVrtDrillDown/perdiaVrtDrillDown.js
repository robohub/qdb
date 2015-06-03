angular.module("beam.perdiaVrtDrillDown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('perdiaVrtDrillDown', {
        url: '/perdiaVrtDrillDown',
        views: {
            "main": {
                controller: 'PerdiaVrtDrillDownController as model',
                templateUrl: 'perdiaVrtDrillDown/perdiaVrtDrillDown.tpl.html'
            }
        },
        data:{ pageTitle: 'Perdia VRT Drilldown' }
    });
})

.controller('PerdiaVrtDrillDownController', [ '$scope', '$location', 'DiagramHeaders', function PerdiaVrtDrillDownController($scope, $location, DiagramHeaders) {

    //$scope.showVRT = DiagramHeaders.showVRT;

    // Hämta variabler från Actual vs Target  -------------
    $scope.plantStr = DiagramHeaders.plantStr;
    $scope.tmyStr = DiagramHeaders.tmyStr;
    $scope.modelStr = DiagramHeaders.modelStr;
    $scope.vrtStr = DiagramHeaders.vrtStr;


		var perdia1 = new AmCharts.AmSerialChart();
		perdia1.startDuration = 0.5;
		perdia1.categoryField = "category";
		perdia1.categoryAxis.gridThickness = 0;
		
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
		perdia1.addGraph(graph);

		
		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia1.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia1.addValueAxis(vaxis);
		
		perdia1.dataProvider = [
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
					
    perdia1.addChartCursor(new AmCharts.ChartCursor());
    perdia1.addListener("zoomed", zoomDiagram1);
    perdia1.write('div1');

		var perdia2 = new AmCharts.AmSerialChart();
		perdia2.startDuration = 0.5;
		perdia2.categoryField = "category";
		perdia2.categoryAxis.gridThickness = 0;
		
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
		perdia2.addGraph(graph);
		
		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia2.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia2.addValueAxis(vaxis);
		
		perdia2.dataProvider = [
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
    
    perdia2.addChartCursor(new AmCharts.ChartCursor());
    perdia2.addListener("zoomed", zoomDiagram2);
		perdia2.write('div2');

		var perdia3 = new AmCharts.AmSerialChart();
		perdia3.startDuration = 0.5;
		perdia3.categoryField = "category";
		perdia3.categoryAxis.gridThickness = 0;
		
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
		perdia3.addGraph(graph);

		
		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia3.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia3.addValueAxis(vaxis);
		
		perdia3.dataProvider = [
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
    
    perdia3.addChartCursor(new AmCharts.ChartCursor());
    perdia3.addListener("zoomed", zoomDiagram3);
		perdia3.write('div3');
    
    var perdia4 = new AmCharts.AmSerialChart();
		perdia4.startDuration = 0.5;
		perdia4.categoryField = "category";
		perdia4.categoryAxis.gridThickness = 0;
		
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
		perdia4.addGraph(graph);

		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia4.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia4.addValueAxis(vaxis);
		
		perdia4.dataProvider = [
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
					
    perdia4.addChartCursor(new AmCharts.ChartCursor());
    perdia4.addListener("zoomed", zoomDiagram4);
		perdia4.write('div4');
    
    var perdia5 = new AmCharts.AmSerialChart();
		perdia5.startDuration = 0.5;
		perdia5.categoryField = "category";
		perdia5.categoryAxis.gridThickness = 0;
		
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
		perdia5.addGraph(graph);

		
		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia5.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia5.addValueAxis(vaxis);
		
		perdia5.dataProvider = [
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
					
    perdia5.addChartCursor(new AmCharts.ChartCursor());
    perdia5.addListener("zoomed", zoomDiagram5);
		perdia5.write('div5');
    
    var perdia6 = new AmCharts.AmSerialChart();
		perdia6.startDuration = 0.5;
		perdia6.categoryField = "category";
		perdia6.categoryAxis.gridThickness = 0;
		
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
		perdia6.addGraph(graph);
		
		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia6.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia6.addValueAxis(vaxis);
		
		perdia6.dataProvider = [
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
					
    perdia6.addChartCursor(new AmCharts.ChartCursor());
    perdia6.addListener("zoomed", zoomDiagram6);
		perdia6.write('div6');
    
    var perdia7 = new AmCharts.AmSerialChart();
		perdia7.startDuration = 0.5;
		perdia7.categoryField = "category";
		perdia7.categoryAxis.gridThickness = 0;
		
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
		perdia7.addGraph(graph);

		
		var graph = new AmCharts.AmGraph();

		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		perdia7.addGraph(graph);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		perdia7.addValueAxis(vaxis);
		
		perdia7.dataProvider = [
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
					
    perdia7.addChartCursor(new AmCharts.ChartCursor());
    perdia7.addListener("zoomed", zoomDiagram7);
		perdia7.write('div7');

    
   $scope.viewBreakdown1 = function() {
       DiagramHeaders.modelStr = 'S60';
       redirect();
    }
   $scope.viewBreakdown2 = function() {
       DiagramHeaders.modelStr = 'S80';
       redirect();
    }
   $scope.viewBreakdown3 = function() {
       DiagramHeaders.modelStr = 'V60';
       redirect();
    }
   $scope.viewBreakdown4 = function() {
       DiagramHeaders.modelStr = 'V60CC';
       redirect();
    }
   $scope.viewBreakdown5 = function() {
       DiagramHeaders.modelStr = 'V70';
       redirect();
    }
   $scope.viewBreakdown6 = function() {
       DiagramHeaders.modelStr = 'XC70';
       redirect();
    }
   $scope.viewBreakdown7 = function() {
       DiagramHeaders.modelStr = 'XC90';
       redirect();
    }
   
   
    function zoomDiagram1(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    } 
    function zoomDiagram2(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    } 
    function zoomDiagram3(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    }
    function zoomDiagram4(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    }
     function zoomDiagram5(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    }
    function zoomDiagram6(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    }
    function zoomDiagram7(event) {
        /// Ta reda på start och slutperiod - lägg till attribut i DiagramHeaders!!!
        var startValue = event.startValue;
        var startIndex = event.startIndex;
        var endValue = event.endValue;
        var endIndex = event.endIndex;
    }
   
    function redirect() {
        DiagramHeaders.plantStr = 'VCT';
        //DiagramHeaders.vrtStr = 'All';
        $location.path('/perdiaBreakdown').replace();
        $scope.$apply();
    }
}]);
