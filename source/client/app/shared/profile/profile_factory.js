'use strict';

angular.module('TasksManager.profile-factory', ['TasksManager.profile-resource'])

.factory('ProfileFactory',['Profile', function(Profile) {
    var profile = Profile.get();
    return {
        UTC_offset: function() {
            return profile.utc-offset;
        }
    }
}]);
