angular.module("beam.organization", [
    'ui.router', 'ui.bootstrap'
])

.config(function ($stateProvider) {
    $stateProvider.state('organization', {
        url: '/organization',
        views: {
            "main": {
                controller: 'OrganizationController as model',
                templateUrl: 'organization/organization.tpl.html'
            }
        },
        data:{ pageTitle: 'Organization Browse' }
    });
})

.controller('OrganizationController', [ '$scope', '$location', 'DiagramHeaders', function OrganizationController($scope, $location, DiagramHeaders) {

    $('#legendBox').combobox({autoResizeMenu: true});
    
    var chart;
    var diagram = "TMY";

    $scope.applyFilter = function() {
        
        var first = true;
        $scope.Plantmodel.forEach(function(index){
            if (first) {
                DiagramHeaders.plantStr = $scope.Plantdata[index.id-1].label;
                first = false;
            } else {
                DiagramHeaders.plantStr = DiagramHeaders.plantStr + ", " + $scope.Plantdata[index.id-1].label;
            }
        });
        if ($scope.Plantmodel.length === $scope.Plantdata.length) {
            DiagramHeaders.plantStr = "All";
        }
        first = true;
        $scope.TMYmodel.forEach(function(index){
            if (first) {
                DiagramHeaders.tmyStr = $scope.TMYdata[index.id-1].label;
                first = false;
            } else {
                DiagramHeaders.tmyStr = DiagramHeaders.tmyStr + ", " + $scope.TMYdata[index.id-1].label;
            }
        });
        if ($scope.TMYmodel.length === $scope.TMYdata.length) {
            DiagramHeaders.tmyStr = "All";
        }
        first = true;
        $scope.Modelmodel.forEach(function(index){
            if (first) {
                DiagramHeaders.modelStr = $scope.Modeldata[index.id-1].label;
                first = false;
            } else {
                DiagramHeaders.modelStr = DiagramHeaders.modelStr + ", " + $scope.Modeldata[index.id-1].label;
            }
        });
        if ($scope.Modelmodel.length === $scope.Modeldata.length) {
            DiagramHeaders.modelStr = "All";
        }
        first = true;
        $scope.VRTmodel.forEach(function(index){
            if (first) {
                DiagramHeaders.vrtStr = $scope.VRTdata[index.id-1].label;
                first = false;
            } else {
                DiagramHeaders.vrtStr = DiagramHeaders.vrtStr + ", " + $scope.VRTdata[index.id-1].label;
            }
        });
        if ($scope.VRTmodel.length === $scope.VRTdata.length) {
            DiagramHeaders.vrtStr = "All";
        }

        chart.titles = [
            //{ "bold": true, "id": "title", "size": 13, "text": "Actual vs Target - 3MIS"	},
            { "bold": false, "id": "title", "size": 11, "text": "Plant = " + DiagramHeaders.plantStr },
            { "bold": false, "id": "title", "size": 11, "text": "TMY = " +  DiagramHeaders.tmyStr},
            { "bold": false, "id": "title", "size": 11, "text": "Model Type = "	+ DiagramHeaders.modelStr},
            { "bold": false, "id": "title", "size": 11, "text": "VRT = " + DiagramHeaders.vrtStr}
        ];	
        
        switch($('#legendBox').combobox('selectedItem').value) {
            case 1: // Technical Model Year
                showTMY();
                diagram = "TMY";
                break;
            case 2:  // Assembly plant
              showPlant();
              diagram = "PLANT";
                break;
            case 3:  // Vehicle Line
              showVehicleLine();
              diagram = "VL";
                break;
            case 4: // VRT
              showVRT();
              diagram = "VRT";
                break;
        }
    }
    
    createGraph();

    function createGraph() {
        var chartData = [];

        chart = new AmCharts.AmSerialChart();
        chart.dataProvider = chartData;
        chart.categoryField = "category";

        var graph = new AmCharts.AmGraph();
        graph.valueField = "column-1";
        graph.type = "column";
        graph.fillAlphas = 0.9;
        graph.title = "3 MIS - R/1000";
        graph.ballonText = "[[value]]";
        chart.addGraph(graph);

        graph = new AmCharts.AmGraph();
        graph.valueField = "column-2";
        graph.type = "column";
        graph.fillAlphas = 0.9;
        graph.title = "3 MIS - Target";
        graph.ballonText = "[[value]]";
        chart.addGraph(graph);

        var leg = new AmCharts.AmLegend();
        leg.align = "center";
        chart.addLegend(leg);

        var vaxis = new AmCharts.ValueAxis();
        vaxis.id = "v1";
        vaxis.title = "R/1000";
        chart.addValueAxis(vaxis);

        chart.write('container1');

        chart.addListener("clickGraphItem", clickGraph);
    };
    
    function clickGraph(event) {

        var clickedItem = event.item.category;
        var title = clickedItem;

        switch(diagram) {
            case "TMY": // Technical Model Year
                //var title = "Actual vs Target - 3MIS";
                chart.titles[1].text = "TMY = " + title;
                DiagramHeaders.tmyStr = title;
                showVehicleLine();
                diagram = "VL";
                break;
            case "PLANT": // Assembly plant
                chart.titles[0].text = "Plant = " + title;
                DiagramHeaders.plantStr = title;
                showTMY();
                diagram = "TMY";
                break;
            case "VL": // Vehicle line
                chart.titles[2].text = "Model Type = " + title;
                DiagramHeaders.modelStr = title;
                showVRT();
                diagram = "VRT";
                break;
            case "VRT": // VRT
                DiagramHeaders.vrtStr = title;
                $location.path('/toplist').replace();
                $scope.$apply();

        }
    }
    
    function showTMY() {
        chart.dataProvider = [
				{
					"category": "2009",
					"column-1": "110",
					"column-2": "190"
				},
				{
					"category": "2010",
					"column-1": "90",
					"column-2": "180"
				},
				{
					"category": "2011",
					"column-1": "165",
					"column-2": "170"
				},
				{
					"category": "2012",
					"column-1": "190",
					"column-2": "150"
				},
				{
					"category": "2013",
					"column-1": "130",
					"column-2": "120"
				},
				{
					"category": "2014",
					"column-1": "90",
					"column-2": "120"
				},
				{
					"category": "2015",
					"column-1": "100",
					"column-2": "110"
				}
        ];
		chart.validateData();
		chart.animateAgain();
	}

	function showVehicleLine() {
        chart.dataProvider = [
			{
				"category": "C30",
				"column-1": "97",
				"column-2": "90"
			},
			{
				"category": "S40",
				"column-1": "0",
				"column-2": "0"
			},
			{
				"category": "V40",
				"column-1": "148",
				"column-2": "130"
			},
			{
				"category": "V40CC",
				"column-1": "128",
				"column-2": "135"
			},					
			{
				"category": "V50",
				"column-1": "0",
				"column-2": "0"
			},
			{
				"category": "S60",
				"column-1": "130",
				"column-2": "140"
			},					
			{
				"category": "S60L",
				"column-1": "180",
				"column-2": "190"
			},
			{
				"category": "V60",
				"column-1": "142",
				"column-2": "140"
			},
			{
				"category": "XC60",
				"column-1": "128",
				"column-2": "150"
			},					
			{
				"category": "V70",
				"column-1": "95",
				"column-2": "120"
			},
			{
				"category": "XC70",
				"column-1": "120",
				"column-2": "130"
			},					
			{
				"category": "C70",
				"column-1": "155",
				"column-2": "145"
			},
			{
				"category": "S80",
				"column-1": "95",
				"column-2": "120"
			},						
			{
				"category": "S80L",
				"column-1": "98",
				"column-2": "130"
			},					
			{
				"category": "XC90",
				"column-1": "120",
				"column-2": "120"
			}
        ];
		chart.validateData();
		chart.animateAgain();
	}
	
	function showPlant() {
        chart.dataProvider = [
			{
				"category": "VCT",
				"column-1": "170",
				"column-2": "190"
			},
			{
				"category": "VCG",
				"column-1": "130",
				"column-2": "120"
			}
        ];
		chart.validateData();
		chart.animateAgain();
	}
	
	function showVRT() {
        chart.dataProvider = [
			{
				"category": "F02 Ch",
				"column-1": "12",
				"column-2": "13"
			},

			{
				"category": "F03 El",
				"column-1": "35",
				"column-2": "35"
			},
			{
				"category": "F04 PT",
				"column-1": "50",
				"column-2": "30"
			},
			{
				"category": "F05 VE",
				"column-1": "50",
				"column-2": "30"
			},
			{
				"category": "F06 Pa",
				"column-1": "2",
				"column-2": "2"
			},
			{
				"category": "F07 BI",
				"column-1": "25",
				"column-2": "22"
			},
			{
				"category": "F08 BE",
				"column-1": "5",
				"column-2": "10"
			}
        ];
		chart.validateData();
		chart.animateAgain();
	}
	
$scope.Plantmodel = [ {id: 1} ];
$scope.Plantdata = [
    {id: 1, label: "VCC"},
    {id: 2, label: "VCT"},
    {id: 3, label: "VCG"},
    {id: 4, label: "VDUV"},
    {id: 5, label: "SMA"},
    {id: 6, label: "Chengdo"},
    {id: 7, label: "CFMA"}];
    
$scope.TMYmodel = [ {id: 1} ];
$scope.TMYdata = [
    {id: 1, label: "2015"},
    {id: 2, label: "2014"},
    {id: 3, label: "2013"},
    {id: 4, label: "2012"},
    {id: 5, label: "2011"},
    {id: 6, label: "2010"},
    {id: 7, label: "2009"}];
    
$scope.Modelmodel = [ {id: 1} ];
$scope.Modeldata = [
    {id: 1, label: "C30"},
    {id: 2, label: "S40"},
    {id: 3, label: "V40"},
    {id: 4, label: "V40CC"},
    {id: 5, label: "V50"},
    {id: 6, label: "S60"},
    {id: 7, label: "S60L"},
    {id: 8, label: "V60"},
    {id: 9, label: "V70"},
    {id: 10, label: "XC70"},
    {id: 11, label: "C70"},
    {id: 12, label: "S80"},
    {id: 13, label: "S80L"},
    {id: 14, label: "XC90"}];
    
$scope.VRTmodel = [ {id: 1} ];
$scope.VRTdata = [
    {id: 1, label: "F02"},
    {id: 2, label: "F03"},
    {id: 3, label: "F04"},
    {id: 4, label: "F05"},
    {id: 5, label: "F06"},
    {id: 6, label: "F07"},
    {id: 7, label: "F08"}];

$scope.MSsettings = {
    smartButtonMaxItems: 3
};
    
}]);
