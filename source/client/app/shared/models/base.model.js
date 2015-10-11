(function () {
    'use strict';

    angular.module('TasksManager.base-model', ['ActiveRecord'])

    .factory('Base', Base);

    Base.$inject = ['ActiveRecord'];

    function Base(ActiveRecord) {
        return ActiveRecord.extend({});
    }
})();

