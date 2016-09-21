"use strict";

/*global angular*/

angular.module("jolene.session", [])
    .factory("sessionService",
        function() {
            var sessionService = {};
            sessionService.user = {};
            
            return sessionService;
        });