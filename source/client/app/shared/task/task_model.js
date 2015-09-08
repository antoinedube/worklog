'use strict';

angular.module('TasksManager.task-model', ['ui.bootstrap', 'TasksManager.task-new', 'TasksManager.base-model'])

.factory('Task', ['$q', '$modal', 'BaseModel', function($q,$modal,BaseModel) {
    var task_resource = BaseModel('/task/:task_id');
    var Task = {
        all: function() {
            return task_resource.query().$promise;
        },
        get: function(task_id) {
            return task_resource.get(task_id).$promise;
        },
        create: function() {
            // Task.save(task) apres la fermeture de la modale, et retourner la promesse pour avoir le meme comportement que les autres methodes
            return $q(function(resolve,reject) {
                        $modal.open({
                        templateUrl: 'task_manager/shared/task/task_creation_view.html',
                        controller: 'NewTaskCtrl',
                        backdrop: 'static',
                        backdropClass: 'fade in',
                        windowClass: 'dropdown-menu-right'
                    }).result.then(function(task) {
                        // Must call resource and save(), and return appropriate item
                        resolve(task);
                    })
                })
        }
    };

    return Task;
}])

