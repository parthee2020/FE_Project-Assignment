'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('MyApplication', ['ui.grid','ui.grid.pagination','ui.grid.selection','ui.bootstrap']);
app.controller('Mycontroller', function( $scope, $http) {

    $scope.reloadRoute = function() {
    $route.reload();
    }


  $scope.model = {
    name: 'Tabs'
  };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  $scope.fundContents = null;
 	 $scope.discPerfcontents = null;
 	 $scope.annualPerfContents = null;
 	 var columndef = [
 	                     {field: 'Rank', width:60, cellClass: 'center-align'},
     	                 {field: 'Fund', width:250, cellClass: 'center-align'},
     	                 {field: 'Group', width:250, cellClass: 'center-align'},
     	                 {field: 'Focus', width:200, cellClass: 'center-align'},
     	                 {field: 'Yield', width:60, cellClass: 'center-align'},
     	                 {field: '1Y'},
     	                 {field: '3Y'},
     	                 {field: '5Y'}
     	                ,{field: 'image', displayName: '', enableFiltering: false, enableSorting: false, enableGridMenu: false,
     	    			    enableSelectAll: false, width:20, cellTemplate:"<span class=\"fa fa-plus-circle green-icon\"></span>"}
 	               ];

     	 	 $http.get('/Project/JSON/fundtable.json').success(function(data) {
 		    $scope.fundContents=data.fundOverview;
 		    $scope.discPerfcontents=data.discretePerformance;
 		    $scope.annualPerfContents=data.annualPerformance;
 		    });
    	
 	 $scope.fundContents_grid = {
 			 	data: 'fundContents',
 			 	enableSorting: true,
 			 	enableFiltering: true,
 			    enableGridMenu: true,
 			    enableSelectAll: true,
 			    enablePaging: true,
 			    paginationPageSizes: [10, 20, 30],
 			    paginationPageSize: 10,
 			    noTabInterference: true,
 			    enableColumnResizing: true,
 	    	    columnDefs: columndef
 			  };
 	 $scope.discPerfcontents_grid = {
 			 	data: 'discPerfcontents',
 			 	enableSorting: true,
 			 	enableFiltering: true,
 			    enableGridMenu: true,
 			    enableSelectAll: true,
 			    enablePaging: true,
 			    paginationPageSizes: [10, 20, 30],
 			    paginationPageSize: 10,
 			    noTabInterference: true,
 			    enableColumnResizing: true,
 			    columnDefs: columndef
 			  };
 	 $scope.annualPerfContents_grid = {
 			 	data: 'annualPerfContents',
 			 	enableSorting: true,
 			 	enableFiltering: true,
 			    enableGridMenu: true,
 			    enableSelectAll: true,enablePaging: true,
 			    paginationPageSizes: [10, 20, 30],
 			    paginationPageSize: 10,
 			    noTabInterference: true,
 			    enableColumnResizing: true,
 			    columnDefs: columndef
 			  };


    $scope.Geographies = ["Africa", "Asia", "Asia Pacific","Asia Pacific Ex Japan","Australia"];
    $scope.Managers = ["7IM Investment Funds", "8AM Global LLP", "Aberdeen Fund Managers Limited"];
    $scope.Fund = ["Commodity/Energy", "Equity", "Fixed Interest"];
    $scope.Sectors = ["Absolute Return", "Commodity & Energy", "Convertible"];


    this.tab = 1;
    this.SelectTab = function(SetTab){
    this.tab = SetTab;
    };
    this.isSelected = function(checkTab){
    return this.tab === checkTab;
    };

});
