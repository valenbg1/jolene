"use strict";

var IndexJS = {};
IndexJS.angularJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
    
    angularJS.votingAppFCC = angular.module("votingAppFCC", ["ngRoute", "ngAnimate"]);
    IndexJS.angularJS.votingAppFCC = angularJS.votingAppFCC;
    
    function btnsNavbarInactive() {
        jQueryDOM.btnsNavbar.removeClass("active");
    }
    
    IndexJS.btnHomeActive = function() {
        btnsNavbarInactive();
        jQueryDOM.btnHome.addClass("active");
    };
    
    IndexJS.btnLoginActive = function() {
        btnsNavbarInactive();
        jQueryDOM.btnLogin.addClass("active");
    };
    
    IndexJS.btnAboutActive = function() {
        btnsNavbarInactive();
        jQueryDOM.btnAbout.addClass("active");
    };
    
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
                .when("/about", {
                    templateUrl: "pages/about.html",
                    controller: "aboutCtrl"
                })
                .otherwise({
                    redirectTo: "/"
                });
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
    
    angularJS.votingAppFCC.controller("mainCtrl", angularJS.mainCtrl);
})();