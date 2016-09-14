"use strict";

/*global angular*/
/*global $*/

var AppJS = {};
AppJS.angularJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
    
    AppJS.angularJS.votingAppFCC = angular.module("votingAppFCC", ["ngRoute", "ngAnimate"]);
    
    function btnsNavbarInactive() {
        jQueryDOM.btnsNavbar.removeClass("active");
    }
    
    AppJS.btnHomeActive = function() {
        btnsNavbarInactive();
        jQueryDOM.btnHome.addClass("active");
    };
    
    AppJS.btnLoginActive = function() {
        btnsNavbarInactive();
        jQueryDOM.btnLogin.addClass("active");
    };
    
    AppJS.btnAboutActive = function() {
        btnsNavbarInactive();
        jQueryDOM.btnAbout.addClass("active");
    };
    
    AppJS.angularJS.votingAppFCC.config(
        function($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    redirectTo: "/home"
                })
                .when("/home", {
                    templateUrl: "home/home.html",
                    controller: "homeCtrl"
                })
                .when("/login", {
                    templateUrl: "login/login.html",
                    controller: "loginCtrl"
                })
                .when("/about", {
                    templateUrl: "about/about.html",
                    controller: "aboutCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
                
            $locationProvider.html5Mode(true);
        });
        
    angularJS.mainCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        jQueryDOM.btnsNavbar = $("#navbar li");
        jQueryDOM.btnHome = $("#btn_home");
        jQueryDOM.btnLogin = $("#btn_login");
        jQueryDOM.btnAbout = $("#btn_about");
        
        angularJS.$scope.isRouteLoading = true;
        
        angularJS.$scope.$on("$routeChangeStart", function() {
            angularJS.$scope.isRouteLoading = true;
        });

        angularJS.$scope.$on("$routeChangeSuccess", function() {
            angularJS.$scope.isRouteLoading = false;
        });
    };
    
    AppJS.angularJS.votingAppFCC.controller("mainCtrl", angularJS.mainCtrl);
})();