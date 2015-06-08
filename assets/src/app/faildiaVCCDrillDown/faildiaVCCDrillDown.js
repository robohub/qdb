angular.module("beam.faildiaVCCDrillDown", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('faildiaVCCDrillDown', {
        url: '/faildiaVCCDrillDown',
        views: {
            "main": {
                controller: 'FaildiaVCCDrillDownController as model',
                templateUrl: 'faildiaVCCDrillDown/faildiaVCCDrillDown.tpl.html'
            }
        },
        data:{ pageTitle: 'Faildia VCC Drilldown' }
    });
})

.controller('FaildiaVCCDrillDownController', [ '$scope', '$location', 'DiagramHeaders', function FaildiaVCCDrillDownController($scope, $location, DiagramHeaders) {

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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart.write('div1');
    chart.addListener("clickGraphItem", clickDiagram1);

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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart2.write('div2');
    chart2.addListener("clickGraphItem", clickDiagram2);

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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart3.write('div3');
    chart3.addListener("clickGraphItem", clickDiagram3);

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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart4.write('div4');
    chart4.addListener("clickGraphItem", clickDiagram4);
    
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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart5.write('div5');
    chart5.addListener("clickGraphItem", clickDiagram5);

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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart6.write('div6');
    chart6.addListener("clickGraphItem", clickDiagram6);

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
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart7.write('div7');
    chart7.addListener("clickGraphItem", clickDiagram7);
    
     var chart8 = new AmCharts.AmSerialChart();
		chart8.startDuration = 0.5;
		chart8.categoryField = "category";
		chart8.categoryAxis.gridThickness = 0;

		var graph = new AmCharts.AmGraph();
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

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart8.addValueAxis(vaxis);
		
		chart8.dataProvider = [
						{
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart8.write('div8');
    chart8.addListener("clickGraphItem", clickDiagram8);

    var chart9 = new AmCharts.AmSerialChart();
		chart9.startDuration = 0.5;
		chart9.categoryField = "category";
		chart9.categoryAxis.gridThickness = 0;

		var graph = new AmCharts.AmGraph();
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

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart9.addValueAxis(vaxis);
		
		chart9.dataProvider = [
						{
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart9.write('div9');
    chart9.addListener("clickGraphItem", clickDiagram9);

    var chart10 = new AmCharts.AmSerialChart();
		chart10.startDuration = 0.5;
		chart10.categoryField = "category";
		chart10.categoryAxis.gridThickness = 0;

		
		var graph = new AmCharts.AmGraph();
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

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart10.addValueAxis(vaxis);
		
		chart10.dataProvider = [
						{
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart10.write('div10');
    chart10.addListener("clickGraphItem", clickDiagram10);

    var chart11 = new AmCharts.AmSerialChart();
		chart11.startDuration = 0.5;
		chart11.categoryField = "category";
		chart11.categoryAxis.gridThickness = 0;

		var graph = new AmCharts.AmGraph();
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

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart11.addValueAxis(vaxis);
		
		chart11.dataProvider = [
						{
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart11.write('div11');
    chart11.addListener("clickGraphItem", clickDiagram11);

    var chart12 = new AmCharts.AmSerialChart();
		chart12.startDuration = 0.5;
		chart12.categoryField = "category";
		chart12.categoryAxis.gridThickness = 0;

		var graph = new AmCharts.AmGraph();
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

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart12.addValueAxis(vaxis);
		
		chart12.dataProvider = [
						{
							"category": "MY 2009",
							"target": "190",
							"actual": "189"
						},
						{
							"category": "MY 2010",
							"target": "171",
							"actual": "191"
						},
						{
							"category": "MY 2011",
							"target": "154",
							"actual": "168"
						},
						{
							"category": "MY 2012",
							"target": "143",
							"actual": "161"
						}
					];
    
		chart12.write('div12');
    chart12.addListener("clickGraphItem", clickDiagram12);
   
    function clickDiagram1(event) {
        DiagramHeaders.modelStr = "S60";
        redirect();
    }
    function clickDiagram2(event) {
        DiagramHeaders.modelStr = "S60CC";
        redirect();
    }
    function clickDiagram3(event) {
        DiagramHeaders.modelStr = "S60L";
        redirect();
    }
    function clickDiagram4(event) {
        DiagramHeaders.modelStr = "V40";
        redirect();
    }
    function clickDiagram5(event) {
        DiagramHeaders.modelStr = "V40CC";
        redirect();
    }
    function clickDiagram6(event) {
        DiagramHeaders.modelStr = "XC60";
        redirect();
    }
    function clickDiagram7(event) {
        DiagramHeaders.modelStr = "S80";
        redirect();
    }
    function clickDiagram8(event) {
        DiagramHeaders.modelStr = "V60";
        redirect();
    }
    function clickDiagram9(event) {
        DiagramHeaders.modelStr = "V60CC";
        redirect();
    }
    function clickDiagram10(event) {
        DiagramHeaders.modelStr = "V70";
        redirect();
    }
    function clickDiagram11(event) {
        DiagramHeaders.modelStr = "XC70";
        redirect();
    }
    function clickDiagram12(event) {
        DiagramHeaders.modelStr = "XC90";
        redirect();
    }
    
    function redirect() {
        var title = "Faildia VCC Ranking";
        DiagramHeaders.plantStr = "VCC";
        DiagramHeaders.tmyStr = "2011;2012";
        DiagramHeaders.vrtStr = "All";
        
        $location.path('/toplist');
        $scope.$apply();
    }
    
}]);
