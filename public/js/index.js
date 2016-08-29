"use strict";

var IndexJS = {};
IndexJS.angularJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
    
    angularJS.votingAppFCC = angular.module("votingAppFCC", ["ngRoute", "ngAnimate"]);
    IndexJS.angularJS.votingAppFCC = angularJS.votingAppFCC;
    
    angularJS.votingAppFCC.config(
        function($routeProvider) {
            $routeProvider
                .when("/", {
                    redirectTo: "/home"
                })
                .when("/home", {
                    templateUrl: "pages/home.html",
                    controller: "homeCtrl"
                })
                .when("/login", {
                    templateUrl: "pages/login.html",
                    controller: "loginCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
        
    angularJS.mainCtrl = function($scope) {
        
    };
    
    angularJS.votingAppFCC.controller("mainCtrl", angularJS.mainCtrl);
})();