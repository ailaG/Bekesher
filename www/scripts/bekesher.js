// TODO: move greetings and portfolio into database (when I do the setup & signup pages)

var bekesher = angular.module('bekesher', [])
	.factory('greetingsF', function() {
		return { greetings : [
			{id: '1', title: 'Wordpress', text: 'I develop in Wordpress, among other things. Wordpress is a platform ("CMS") that makes managing your website easy.' },
			{id: '2', title: 'Angular', text: 'I have done a project in AngularJS.' },
			{id: '3', title: 'FED', text: 'I\'m a front end developer (HTML5, CSS3, Javascript)' }
		]};
	})
	
	.service('portfolioS', function() {
		// TODO: Replace this with many2many DB (some projects fit into several categories)
		this.items = {
			'1' : [	'<a href="http://2014.olamot-con.org.il">Olamot 2014</a> built with Wordpress Multisite', 
					'WP project 2'],
			'2' : ['Bekesher - the app that sent you this e-mail'],
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
	
	.controller('submit_form', function($scope, $http) {
		$scope.saveToPubNub = function(item, event) {
			res = {};
			res['email'] = this.email;
			res['message'] = this.free_text;
			pubNubSub(res);
						
			// TODO: change. EW.
			alert('sent ' + res['message'] + ' to ' + res['email']);
			
			return false;
		}
	})
	
	.controller('archive', function($scope) {
		pubNubRead(function(items){
			$scope.emails = items;
			$scope.$apply($scope.emails);
		});
	})
;
