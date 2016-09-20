"use strict";

/*global angular*/

angular.module("jolene.about", ["ngRoute"])
    .config(
        function($routeProvider) {
            $routeProvider.when("/about", {
                templateUrl: "about/about.html",
                controller: "AboutCtrl",
                controllerAs: "vm"
            });
        })
    .controller("AboutCtrl",
        function() {
            
        });