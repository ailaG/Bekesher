

var bekesher = angular.module('bekesher', [])
	.factory('greetingsF', function() {
		return { greetings : [
			{id: '1', title: 'Wordpress', text: 'I do Wordpress' },
			{id: '2', title: 'Angular', text: 'My Angular is fab' },
			{id: '3', title: 'FED', text: 'I\'m a front end developer' }
		]};
	})
	.controller('greetings_form', function($scope, greetingsF) {
		$scope.greetingsF = greetingsF;
	})
		
	.controller('greetings_preview', function($scope, greetingsF) {
		$scope.greetingsF = greetingsF;
	})
		
;
