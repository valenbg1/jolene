"use strict";

/*global angular*/

angular.module("votingAppFCC.home", ["ngRoute"])
    .config(
        function($routeProvider) {
            $routeProvider.when("/home", {
                templateUrl: "home/home.html",
                controller: "HomeCtrl",
                controllerAs: "vm"
            });
        })
    .controller("HomeCtrl",
        function() {
            
        });