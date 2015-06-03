angular.module("beam.toplist", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('toplist', {
        url: '/toplist',
        views: {
            "main": {
                controller: 'ToplistController as model',
                templateUrl: 'toplist/toplist.tpl.html'
            }
        },
        data:{ pageTitle: 'Toplist' }
    });
})

.controller('ToplistController', [ '$scope', '$location', 'DiagramHeaders', function ToplistController($scope, $location, DiagramHeaders) {

	
	// Hämta variabler från Actual vs Target  -------------
	$scope.plantStr = DiagramHeaders.plantStr;
	$scope.tmyStr = DiagramHeaders.tmyStr;
	$scope.modelStr = DiagramHeaders.modelStr;
	$scope.vrtStr = DiagramHeaders.vrtStr;

	showCCC();
  showCSC();
  showPart();
  showPartNo();
  showAdjustment();
  showMarket();
 /*   
	function clickGraph(event) {
		self.location='../joblist';
	}
*/
    
  function showCCC() {
		
		var chartData = [
				{
					"category": "W99 - Administrative",
					"column-1": "92",
					"column-2": "92"
				},
				{
					"category": "C24 - Clutch/Clutch Pedal",
					"column-1": "90",
					"column-2": "92"
				},
				{
					"category": "W41 - DIM Message",
					"column-1": "65",
					"column-2": "74"
				},
				{
					"category": "A33 - Poor Performance/Engine Power and Acceleration",
					"column-1": "59",
					"column-2": "38"
				},
				{
					"category": "A45 - Unusual Engine Noise/Vibrations ",
					"column-1": "43",
					"column-2": "45"
				},
				{
					"category": "R10 - Door Locks and Handles",
					"column-1": "39",
					"column-2": "30"
				},
				{
					"category": "L14 - Air Conditioner",
					"column-1": "25",
					"column-2": "10"
				},
				{
					"category": "A18 - Oil Troubles",
					"column-1": "19",
					"column-2": "38"
				},
				{
					"category": "B31 - Radiator Fluid Leaks",
					"column-1": "13",
					"column-2": "5"
				},
				{
					"category": "A27 - Engine Runs, Then Dies/Stalls",
					"column-1": "9",
					"column-2": "2"
				}
			];	
		
			var chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2012";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "column-2";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2011";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.write('container1');
		  //chart.addListener("clickGraph", clickGraph);
	};

  function showCSC() {
		
		var chartData = [
				{
					"category": "ZQ - Rear wheel suspension-Rust/Corrosion",
					"column-1": "99",
					"column-2": "92"
				},
				{
					"category": "ZE - Idling-Unusal noise",
					"column-1": "77",
					"column-2": "90"
				},
				{
					"category": "VF - Doors-Hard to close",
					"column-1": "65",
					"column-2": "100"
				},
				{
					"category": "D2 - Front/real axle-Unusual noise",
					"column-1": "52",
					"column-2": "43"
				},
				{
					"category": "F5 - Gear selector-Unusual noise",
					"column-1": "47",
					"column-2": "43"
				},
				{
					"category": "H3 - Steering column/wheel-Squeak/rattle",
					"column-1": "32",
					"column-2": "33"
				},
				{
					"category": "F2 - Driving-Unusual noise-During acceleration",
					"column-1": "20",
					"column-2": "30"
				},
				{
					"category": "PE - Brakes-Vehicle pulls to left",
					"column-1": "19",
					"column-2": "6"
				},
				{
					"category": "8A - Manual transmission-Vibration",
					"column-1": "14",
					"column-2": "18"
				},
				{
					"category": "8T - Instrument panel/dashboard-Cup holder problems",
					"column-1": "12",
					"column-2": "13"
				}
        ];
		
			var chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2012";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "column-2";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2011";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.write('container2');
		  //chart.addListener("clickGraph", clickGraph);
	};

  function showPart() {
		
		var chartData = [
				{
					"category": "LAMBDA SOND",
					"column-1": "92",
					"column-2": "92"
				},
				{
					"category": "HOUSING",
					"column-1": "90",
					"column-2": "92"
				},
				{
					"category": "CASING",
					"column-1": "65",
					"column-2": "74"
				},
				{
					"category": "MOTOR",
					"column-1": "59",
					"column-2": "38"
				},
				{
					"category": "CONTROL UNIT",
					"column-1": "43",
					"column-2": "45"
				},
				{
					"category": "WIPER BLADE",
					"column-1": "39",
					"column-2": "30"
				},
				{
					"category": "WATER PUMP KIT",
					"column-1": "25",
					"column-2": "10"
				},
				{
					"category": "LUBRICANT",
					"column-1": "19",
					"column-2": "38"
				},
				{
					"category": "LOCK",
					"column-1": "13",
					"column-2": "5"
				},
				{
					"category": "AIR DUCT",
					"column-1": "9",
					"column-2": "2"
				}
			];	
		
			var chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2012";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "column-2";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2011";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.write('container3');
		  //chart.addListener("clickGraph", clickGraph);
	};

  function showPartNo() {
		
		var chartData = [
				{
					"category": "31319385 LAMBDA SOND",
					"column-1": "31",
					"column-2": "9"
				},
				{
					"category": "30787653 AIR VENT PIPE",
					"column-1": "30",
					"column-2": "20"
				},
				{
					"category": "31253233 WIPER BLADE",
					"column-1": "28",
					"column-2": "22"
				},
				{
					"category": "30751971 WATER PUMP KIT",
					"column-1": "25",
					"column-2": "12"
				},
				{
					"category": "31386722 ENGINE UNIT",
					"column-1": "19",
					"column-2": "19"
				},
				{
					"category": "31423710 SPRING",
					"column-1": "15",
					"column-2": "3"
				},
				{
					"category": "31370891 AIR DUCT",
					"column-1": "13",
					"column-2": "0"
				},
				{
					"category": "31303451 FUEL FILLER CAP",
					"column-1": "12",
					"column-2": "6"
				},
				{
					"category": "8646996 SPACER",
					"column-1": "11",
					"column-2": "18"
				},
				{
					"category": "31405340 PRESSURE SENSOR",
					"column-1": "10",
					"column-2": "1"
				}
        ];
		
			var chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2012";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "column-2";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2011";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.write('container4');
		  //chart.addListener("clickGraph", clickGraph);
	};

  function showAdjustment() {
		
		var chartData = [
				{
					"category": "25412 Heated oxygen sensor replace",
					"column-1": "99",
					"column-2": "92"
				},
				{
					"category": "41103 Clutch plate and pressure plate replace",
					"column-1": "77",
					"column-2": "90"
				},
				{
					"category": "26107 Radiator hose upper replace",
					"column-1": "65",
					"column-2": "100"
				},
				{
					"category": "26104 Radiator remove-install/replace",
					"column-1": "52",
					"column-2": "43"
				},
				{
					"category": "87153 Control panel/climate control module (CCM) replace",
					"column-1": "47",
					"column-2": "43"
				},
				{
					"category": "25625 Charge air hose mix pipe-charge air cooler replace",
					"column-1": "32",
					"column-2": "33"
				},
				{
					"category": "43103 Transmission replace",
					"column-1": "20",
					"column-2": "30"
				},
				{
					"category": "25411 EGR valve replace",
					"column-1": "19",
					"column-2": "6"
				},
				{
					"category": "26203 Coolant pump replace",
					"column-1": "14",
					"column-2": "18"
				},
				{
					"category": "25622 Fresh air intake hose filter-turbocharger (TC) replace",
					"column-1": "12",
					"column-2": "13"
				}
        ];
		
			var chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2012";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "column-2";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2011";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.write('container5');
		  //chart.addListener("clickGraph", clickGraph);
	};
    
  function showMarket() {
		
		var chartData = [
				{
					"category": "Sweden",
					"column-1": "99",
					"column-2": "92"
				},
				{
					"category": "US",
					"column-1": "77",
					"column-2": "90"
				},
				{
					"category": "China",
					"column-1": "65",
					"column-2": "100"
				},
				{
					"category": "Germany",
					"column-1": "52",
					"column-2": "43"
				},
				{
					"category": "UK",
					"column-1": "47",
					"column-2": "43"
				},
				{
					"category": "Norway",
					"column-1": "32",
					"column-2": "33"
				},
				{
					"category": "Finland",
					"column-1": "20",
					"column-2": "30"
				},
				{
					"category": "Russia",
					"column-1": "19",
					"column-2": "6"
				},
				{
					"category": "Italy",
					"column-1": "14",
					"column-2": "18"
				},
				{
					"category": "Denmark",
					"column-1": "12",
					"column-2": "13"
				}
        ];
		
			var chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2012";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			graph = new AmCharts.AmGraph();
			graph.valueField = "column-2";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "2011";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.write('container6');
		  //chart.addListener("clickGraph", clickGraph);
	};
        
}]);
