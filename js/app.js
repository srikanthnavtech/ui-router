'use strict';

var App = angular.module('routingDemoApp',['ui.router']);

App.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
				// For any unmatched url, send to /business
				$urlRouterProvider.otherwise("/home")
				
				$stateProvider
				        .state('home', {
							url: "/home",
							templateUrl: "views/home.html"
						})
						.state('employees', {
							url: "/employees",
							templateUrl: "views/employees.html"
						})
						.state('employees.developer', {
							url: "/developer",
							templateUrl: "views/employees-list.html",
							controller: "employeesCtrl"
						})
						.state('employees.qa', {
							url: "/qa",
							templateUrl: "views/employees-list.html",
							controller: "employeesCtrl"
						})
						.state('employees-list', {
							url: "/employees-list?tech",
							templateUrl: "views/employees-list.html",
							controller: "employeesCtrl"
						})

						.state('technology', {
							url: "/technology",
							views: {
								"" 	:    { templateUrl: "views/technology.html" },
								"view1@technology": { template: "Write whatever you want, it's your virtual company." },
								"view2@technology": { templateUrl: "views/technology-list.html" ,
									controller: function($scope, $state){
											$scope.technologies = ["Rails", "AngularJs", "Selenium"];
											$scope.goto_employees_page = function(technology){
										      $state.go('employees-list', {tech: technology});
										    	};
											}
								}
							}
						})
						.state('technology.list', {
							url: "/:tech",
							views: {
							  templateUrl: "views/employees-list.html",
							  controller: "employeesCtrl"
							}
						})
			}]);
