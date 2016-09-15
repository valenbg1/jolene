"use strict";

/*global angular*/
/*global AppJS*/

var HomeJS = {};

(function() {
    var jQueryDOM = {};
    
    angular.module("votingAppFCC.home", ["ngRoute"])
        .config(
            function($routeProvider) {
                $routeProvider.when("/home", {
                    templateUrl: "home/home.html",
                    controller: "HomeCtrl"
                });
            })
        .controller("HomeCtrl",
            function($scope) {
                AppJS.btnHomeActive();
            });
})();