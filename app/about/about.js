"use strict";

/*global angular*/
/*global AppJS*/

var AboutJS = {};

(function() {
    var jQueryDOM = {};
    
    angular.module("votingAppFCC.about", ["ngRoute"])
        .config(
            function($routeProvider) {
                $routeProvider.when("/about", {
                    templateUrl: "about/about.html",
                    controller: "AboutCtrl"
                });
            })
        .controller("AboutCtrl",
            function($scope) {
                AppJS.btnAboutActive();
            });
})();