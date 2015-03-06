angular.module( 'beam.home', [
])

.config(function config( $stateProvider ) {
	$stateProvider.state( 'home', {
		url: '/home',
		views: {
			"main": {
				controller: 'HomeCtrl',
				templateUrl: 'home/index.tpl.html'
			}
		}
	});
})

.controller( 'HomeCtrl', function HomeController( $scope, titleService ) {
	titleService.setTitle('Home');
    

    chart = new AmCharts.AmSerialChart();
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

		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chart.addLegend(leg);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart.addValueAxis(vaxis);
		
		/*chart.titles = [
			{
				"bold": true,
				"id": "title",
				"size": 13,
				"text": "VCC - Results @ 3MIS"
			}];*/
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
					
		chart.write('chartdiv');
		
		chart2 = new AmCharts.AmSerialChart();
		chart2.startDuration = 0.5;
		chart2.categoryField = "category";
		chart2.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		chart2.addGraph(graph);	var graph = new AmCharts.AmGraph();
		
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart2.addGraph(graph);
		

		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chachart2rt.addLegend(leg);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart2.addValueAxis(vaxis);
		
		chart2.dataProvider = [
						{
							"category": "VCT",
							"target": "151",
							"actual": "175"
						},
						{
							"category": "S80",
							"target": "135",
							"actual": "156"
						},
						{
							"category": "V60",
							"target": "165",
							"actual": "153"
						},
						{
							"category": "V70",
							"target": "135",
							"actual": "172"
						},
						{
							"category": "XC70",
							"target": "150",
							"actual": "187"
						},
						{
							"category": "XC90",
							"target": "150",
							"actual": "157"
						}
					];
					
		chart2.write('tfaildiadiv');
		
		
		chart3 = new AmCharts.AmSerialChart();
		chart3.startDuration = 0.5;
		chart3.categoryField = "category";
		chart3.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		chart3.addGraph(graph);	var graph = new AmCharts.AmGraph();
		
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart3.addGraph(graph);
		

		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chachart2rt.addLegend(leg);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart3.addValueAxis(vaxis);
		
		chart3.dataProvider = [
						{
							"category": "VCG",
							"target": "138",
							"actual": "163"
						},
						{
							"category": "C30",
							"target": "90",
							"actual": "111"
						},
						{
							"category": "S40",
							"target": "80",
							"actual": "101"
						},
						{
							"category": "S60",
							"target": "160",
							"actual": "135"
						},
						{
							"category": "V50",
							"target": "100",
							"actual": "130"
						},
						{
							"category": "XC60",
							"target": "160",
							"actual": "206"
						}
					];
					
		chart3.write('gfaildiadiv');
		
		
		chart4 = new AmCharts.AmSerialChart();
		chart4.startDuration = 0.5;
		chart4.categoryField = "category";
		chart4.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		chart4.addGraph(graph);	var graph = new AmCharts.AmGraph();
		
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart4.addGraph(graph);
		

		
		/*var leg = new AmCharts.AmLegend();
		leg.align = "center";
		chart4.addLegend(leg);*/

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart4.addValueAxis(vaxis);
		
		chart4.dataProvider = [
						{
							"category": "VCCD",
							"target": "138",
							"actual": "163"
						},
						{
							"category": "C30",
							"target": "90",
							"actual": "111"
						},
						{
							"category": "S40",
							"target": "80",
							"actual": "101"
						},
						{
							"category": "S60",
							"target": "160",
							"actual": "135"
						},
						{
							"category": "V50",
							"target": "100",
							"actual": "130"
						},
						{
							"category": "XC60",
							"target": "160",
							"actual": "206"
						}
					];
					
		chart4.write('cdfaildiadiv');

/*
		chart3 = new AmCharts.AmSerialChart();
		chart3.startDuration = 0.5;
		chart3.categoryField = "category";
		chart3.categoryAxis.gridThickness = 0;
		
		var graph = new AmCharts.AmGraph();
		graph.valueField = "target";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Target";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.4;
		graph.newStack = true;
		chart3.addGraph(graph);	
		
		var graph = new AmCharts.AmGraph();
		graph.valueField = "actual";
		graph.type = "column";
		graph.fillAlphas = 1;
		graph.title = "Actual";
		graph.balloonText = "[[title]] of [[category]]: <b>[[value]]</b>";
		graph.columnWidth = 0.2;
		graph.newStack = true;
		chart3.addGraph(graph);
		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chachart2rt.addLegend(leg);

		var vaxis = new AmCharts.ValueAxis();
		vaxis.id = "v1";
		vaxis.title = "R/1000";
		chart3.addValueAxis(vaxis);
		
		chart3.titles = [
			{
				"bold": true,
				"id": "title",
				"size": 13,
				"text": "VCC - F02 - 2012 - Results @ 3MIS"
			}];
		chart3.dataProvider = [
						{
							"category": "C30",
							"target": "90",
							"actual": "111"
						},
						{
							"category": "C70",
							"target": "145",
							"actual": "122"
						},
						{
							"category": "S40",
							"target": "80",
							"actual": "101"
						},
						{
							"category": "S60",
							"target": "160",
							"actual": "138"
						},
						{
							"category": "S80",
							"target": "135",
							"actual": "160"
						},
						{
							"category": "V50",
							"target": "100",
							"actual": "141"
						},
						{
							"category": "V60",
							"target": "165",
							"actual": "161"
						},
						{
							"category": "V70",
							"target": "135",
							"actual": "187"
						},
						{
							"category": "XC60",
							"target": "160",
							"actual": "226"
						},
						{
							"category": "XC70",
							"target": "150",
							"actual": "203"
						},
						{
							"category": "XC90",
							"target": "150",
							"actual": "160"
						}
					];
					
		chart3.write('chartdiv3');
		
	*/	
		
		perdia1 = new AmCharts.AmSerialChart();
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

		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chachart2rt.addLegend(leg);

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
					
		perdia1.write('perdiadiv');

		perdia2 = new AmCharts.AmSerialChart();
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

		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chachart2rt.addLegend(leg);

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
					
		perdia2.write('tperdiadiv');

		perdia3 = new AmCharts.AmSerialChart();
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

		
		//var leg = new AmCharts.AmLegend();
		//leg.align = "center";
		//chachart2rt.addLegend(leg);

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
					
		perdia3.write('gperdiadiv');

		perdia4 = new AmCharts.AmSerialChart();
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

		
		/*var leg = new AmCharts.AmLegend();
		leg.align = "center";
		perdia4.addLegend(leg);*/

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
					
		perdia4.write('cdperdiadiv');
});