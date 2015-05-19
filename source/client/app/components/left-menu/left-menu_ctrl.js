'use strict';

angular.module('TasksManager.left-menu', [])
.controller('LeftMenuCtrl', ['$scope', '$location', function($scope,$location) {
    var items = [
        {'name': 'Accueil', 'route': '#/home', 'icon': 'fa-home'},
        {'name': 'Aujourd\'hui', 'route': '#/today', 'icon': 'fa-angle-double-down'},
        {'name': 'Cette semaine', 'route': '#/this-week', 'icon': 'fa-calendar'},
        {'name': 'Tâches', 'route': '#/tasks-list', 'icon': 'fa-tasks'}
    ];

    $scope.items = items;

    $scope.isActive = function(viewLocation) {
        return (viewLocation === '#'+$location.path());
    };
}])
.directive('tmLeftmenu', function() {
    return {
        restrict: 'C',
        templateUrl: 'task_manager/components/left-menu/left-menu_view.html'
    }
});

