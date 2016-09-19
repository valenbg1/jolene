"use strict";

/*global angular*/

angular.module("votingAppFCC.auth", [])
    .factory("authService",
        function($http) {
            var authService = {};
            
            authService.login = function(username, password, callback) {
                $http.post("/login", {
                    username: username,
                    password: password
                })
                .then(callback, callback);
            };
            
            return authService;
        });