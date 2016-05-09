angular.module('CV').config(['$routeProvider', '$locationProvider', config]);

function config(route, locationProvider){
	route
		.when('/contact', {
			controller: 'contactController',
			templateUrl: 'public/views/contact/contactView.html'
		}).when('/',{
			controller: 'homeController',
			templateUrl: 'public/views/home/homeView.html'
		}).otherwise('/');

		locationProvider.html5Mode(true);
}