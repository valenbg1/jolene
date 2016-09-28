"use strict";

/*global angular*/

angular.module("jolene.session", [])
    .factory("sessionService",
        function($http) {
            var sessionService = {};
            sessionService.user = {};
            
            function checkLoggedIn() {
                $http.get("/loggedin")
                    .then(
                        function(response) {
                            sessionService.user.username = response.data.username;
                        });
            }
            
            checkLoggedIn();
            
            return sessionService;
        });