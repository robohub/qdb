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

    $('#legendBox').combobox({autoResizeMenu: true});
    
    $scope.applyFilter = function() {

        switch($('#legendBox').combobox('selectedItem').value) {
            case 1: // Part
                showPart();
                diagram = "Part";
                break;
            case 2:  // CSC
              showCSC();
              diagram = "CSC";
                break;
        }
    }
    
	var chart;
	var diagram = "Part";
	
	// Hämta variabler från Actual vs Target  -------------
	var plantStr = DiagramHeaders.plantStr;
	var tmyStr = DiagramHeaders.tmyStr;
	var modelStr = DiagramHeaders.modelStr;
	var vrtStr = DiagramHeaders.vrtStr;


	function showPart() {
		
		var chartData = [
				{
					"category": "Engine",
					"column-1": "92"
				},
				{
					"category": "TCM",
					"column-1": "90"
				},
				{
					"category": "Catalyst",
					"column-1": "65"
				},
				{
					"category": "Spark plug",
					"column-1": "59"
				},
				{
					"category": "ECM",
					"column-1": "43"
				},
				{
					"category": "Wiper",
					"column-1": "39"
				},
				{
					"category": "Oil pump",
					"column-1": "25"
				},
				{
					"category": "Injection",
					"column-1": "19"
				},
				{
					"category": "Mass air meter",
					"column-1": "13"
				},
				{
					"category": "Air duct",
					"column-1": "9"
				}
			];	
		

			chart = new AmCharts.AmSerialChart();
			chart.dataProvider = chartData;
			chart.categoryField = "category";
			chart.rotate = true;
			
			var graph = new AmCharts.AmGraph();
			graph.valueField = "column-1";
			graph.type = "column";
			graph.fillAlphas = 0.9;
			graph.title = "Part";
			graph.ballonText = "[[value]]";
			chart.addGraph(graph);
			
			var leg = new AmCharts.AmLegend();
			leg.align = "center";
			chart.addLegend(leg);

			var vaxis = new AmCharts.ValueAxis();
			vaxis.id = "v1";
			vaxis.title = "Count";
			chart.addValueAxis(vaxis);
			
			chart.titles = [
				{
					"bold": true,
					"id": "title",
					"size": 13,
					"text": "Toplist - Parts"
				},
	    		{ "bold": false, "id": "title", "size": 11, "text": "Plant = " + plantStr },
	    		{ "bold": false, "id": "title", "size": 11, "text": "TMY = " +  tmyStr},
	    		{ "bold": false, "id": "title", "size": 11, "text": "Model Type = "	+ modelStr},
	    		{ "bold": false, "id": "title", "size": 11, "text": "VRT = " + vrtStr}
			];
			
			chart.write('container1');
		  chart.addListener("clickGraph", clickGraph);
	};

		
	function showCSC() {
        chart.dataProvider = [
				{
					"category": "ZQ - Rear wheel suspension-Rust/Corrosion",
					"column-1": "99"
				},
				{
					"category": "ZE - Idling-Unusal noise",
					"column-1": "77"
				},
				{
					"category": "VF - Doors-Hard to close",
					"column-1": "65"
				},
				{
					"category": "D2 - Front/real axle-Unusual noise",
					"column-1": "52"
				},
				{
					"category": "F5 - Gear selector-Unusual noise",
					"column-1": "47"
				},
				{
					"category": "H3 - Steering column/wheel-Squeak/rattle",
					"column-1": "32"
				},
				{
					"category": "F2 - Driving-Unusual noise-During acceleration",
					"column-1": "20"
				},
				{
					"category": "PE - Brakes-Vehicle pulls to left",
					"column-1": "19"
				},
				{
					"category": "8A - Manual transmission-Vibration",
					"column-1": "14"
				},
				{
					"category": "8T - Instrument panel/dashboard-Cup holder problems",
					"column-1": "12"
				}
        ];
		  chart.validateData();
			chart.titles = [
				{
					"bold": true,
					"id": "title",
					"size": 13,
					"text": "Toplist - CSC"
				},
	    		{ "bold": false, "id": "title", "size": 11, "text": "Plant = " + plantStr },
	    		{ "bold": false, "id": "title", "size": 11, "text": "TMY = " +  tmyStr},
	    		{ "bold": false, "id": "title", "size": 11, "text": "Model Type = "	+ modelStr},
	    		{ "bold": false, "id": "title", "size": 11, "text": "VRT = " + vrtStr}
			];
		chart.graphs[0].title = "Customer Symptom Code";
		chart.animateAgain();
	}

	$('#legend').multiselect( { maxHeight: 200 , buttonWidth: '200px'} );
	
	showPart();

	function clickGraph(event) {
		self.location='../joblist';
	}

    
}]);
