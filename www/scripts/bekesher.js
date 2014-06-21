// TODO: move greetings and portfolio into database

var bekesher = angular.module('bekesher', [])
	.factory('greetingsF', function() {
		return { greetings : [
			{id: '1', title: 'Wordpress', text: 'I do Wordpress (keywords: CMS, website)' },
			{id: '2', title: 'Angular', text: 'My Angular is fab (keywords: apps, web app)' },
			{id: '3', title: 'FED', text: 'I\'m a front end developer (keywords: html5, css3, Javascript)' }
		]};
	})
	
	.service('portfolioS', function() {
		// TODO: Replace this with m2m DB (some projects fit into several categories)
		this.items = {
			'1' : ['WP project 1', 'WP project 2'],
			'2' : ['Angular web app'],
			'3' : ['Awesome HTML5 app', 'Another frontend project']
		}
		
		this.getAll = function() {
			res = [];
			for (sublist in this.items){
				res = res.concat(this.items[sublist]);
			}

			return res;
		}
		this.selected = [];
	})
	
	.controller('greetings_form', function($scope, greetingsF) {
		$scope.greetingsF = greetingsF;
	})
		
	.controller('greetings_preview', function($scope, greetingsF) {
		$scope.greetingsF = greetingsF;
	})
	
	.controller('portfolio_form', function($scope, portfolioS) {
		$scope.portfolioS = portfolioS;
		$scope.portfolio_flat = portfolioS.getAll();
	})
	
	.controller('portfolio_preview', function($scope, portfolioS) {
		$scope.portfolioS = portfolioS;
	})
	
	.controller('submit_form', function($scope) {
		$scope.saveToPubNub = function(item, event) {
			res = {};
			res['email'] = this.email;
			res['message'] = this.free_text +  this.greeting; // TODO: add portfolio
			pubNubSub(res);
			return false;
		}
	})
	
	.controller('archive', function($scope) {
		pubNubRead(function(items){
			$scope.emails = items;
			$scope.$apply($scope.emails);
/*
					        scope.$apply(function() {
					        scope.tags.push(item);
					    });

*/

			});
	})
;
