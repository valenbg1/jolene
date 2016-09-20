"use strict";

/*global angular*/

angular.module("jolene.auth", [])
    .factory("authService",
        function($http) {
            var authService = {};
            
            authService.login = function(username, password) {
                return $http.post("/login", {
                    username: username,
                    password: password
                });
            };
            
            return authService;
        });