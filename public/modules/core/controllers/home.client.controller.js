'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
        $scope.alerts = [
            {
            icon: 'glyphicon-heart-empty',
            color: 'btn-success',
            total: '1',
            description: 'Stuff we liked'
        },
            {
                icon: 'glyphicon-music',
                color: 'btn-success',
                total: '2',
                description: 'Playlist'
            },
            {
                icon: 'glyphicon-cloud',
                color: 'btn-success',
                total: '3',
                description: 'Weather'
            },
            {
                icon: 'glyphicon-cutlery',
                color: 'btn-success',
                total: '4',
                description: 'Eats and Drinks'
            },
            {
                icon: 'glyphicon-camera',
                color: 'btn-success',
                total: '5',
                description: 'Photos'
            },
            {
                icon: 'glyphicon-facetime-video',
                color: 'btn-success',
                total: '6',
                description: 'Video'
            }

        ]
	}
]);
