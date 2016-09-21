"use strict";

/*global angular*/

angular.module("jolene.auth", ["jolene.session"])
    .factory("authService",
        function($http, sessionService) {
            var authService = {};
            
            authService.login = function(username, password) {
                return $http.post("/login", {
                    username: username,
                    password: password
                }).then(
                    function(response) {
                        sessionService.user.username = username;
                        return response;
                    });
            };
            
            return authService;
        });