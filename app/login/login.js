"use strict";

/*global angular*/
/*global AppJS*/

var LoginJS = {};

(function() {
    var jQueryDOM = {};
    
    angular.module("votingAppFCC.login", ["ngRoute"])
        .config(
            function($routeProvider) {
                $routeProvider.when("/login", {
                    templateUrl: "login/login.html",
                    controller: "LoginCtrl"
                });
            })
        .controller("LoginCtrl",
            function($scope) {
                AppJS.btnLoginActive();
            });
})();