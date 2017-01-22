var app = angular.module('routingDemoApp');
app.controller('employeesCtrl', function($scope, $stateParams, $state) {
	console.log($stateParams, $state);
	if($state.current.name == "employees.qa"){
		$scope.search = "QA Analyst";
	}
	if($state.current.name == "employees.developer"){
		$scope.search = "Developer";
	}
	if($stateParams && $stateParams.tech){
		$scope.search = $stateParams.tech;
	}
	$scope.employeesList = [
		{ name : 'Srikanth Amand', Designation : 'Developer', Technology : 'AngularJs' },
		{ name : 'Samya Reddy ', Designation : 'Developer', Technology : 'Rails' },
		{ name : 'Gopi Raju', Designation : 'Developer', Technology : 'Rails' },
		{ name : 'Usha', Designation : 'Developer', Technology : 'Rails' },
		{ name : 'Subam', Designation : 'Developer', Technology : 'Rails' },
		{ name : 'Siddharth ', Designation : 'Developer', Technology : 'AngularJs' },
		{ name : 'Vikrampaul ', Designation : 'QA Analyst', Technology : 'Selenium' },
		{ name : 'Sager', Designation : 'QA Analyst', Technology : 'Selenium'},
		{ name : 'Shylesh', Designation : 'QA Analyst', Technology : 'Selenium'}
	]
});