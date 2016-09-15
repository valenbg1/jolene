"use strict";

/*global angular*/
/*global $*/

var AppJS = {};

(function() {
    var jQueryDOM = {};

    angular.module("votingAppFCC", [
        "ngRoute",
        "ngAnimate",
        "votingAppFCC.home",
        "votingAppFCC.login",
        "votingAppFCC.about"])
        .config(
            function($routeProvider, $locationProvider) {
                $routeProvider
                    .when("/", {
                        redirectTo: "/home"
                    })
                    .otherwise({
                        redirectTo: "/"
                    });
                    
                $locationProvider.html5Mode(true);
            })
        .controller("MainCtrl",
            function($scope) {
                jQueryDOM.btnsNavbar = $("#navbar li");
                jQueryDOM.btnHome = $("#btn_home");
                jQueryDOM.btnLogin = $("#btn_login");
                jQueryDOM.btnAbout = $("#btn_about");
                
                $scope.isRouteLoading = true;
                
                $scope.$on("$routeChangeStart",
                    function() {
                        $scope.isRouteLoading = true;
                    });
        
                $scope.$on("$routeChangeSuccess",
                    function() {
                        $scope.isRouteLoading = false;
                    });
            });
    
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
})();