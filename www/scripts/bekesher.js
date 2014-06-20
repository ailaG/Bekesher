

var bekesher = angular.module('bekesher', [])

	.controller('greetings', ['$scope', function($scope) {
			$scope.greetings = [
				{id: '1', title: 'Wordpress', text: 'I do Wordpress' },
				{id: '2', title: 'Angular', text: 'My Angular is fab' }
			];
		}]);
