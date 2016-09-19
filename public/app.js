"use strict";

/*global angular*/

angular.module("votingAppFCC", [
    "ngRoute",
    "ngAnimate",
    "ui.bootstrap",
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
        function($scope, $location) {
            var vm = this;
            
            vm.isRouteLoading = true;
            vm.navBarCollapsed = true;
            
            vm.changeNavBarCollapsed = function() {
                vm.navBarCollapsed = !vm.navBarCollapsed;
            };
            
            $scope.$on("$routeChangeStart",
                function() {
                    vm.isRouteLoading = true;
                });
    
            $scope.$on("$routeChangeSuccess",
                function() {
                    vm.isRouteLoading = false;
                    vm.currentNavBarBtn = $location.path();
                });
        });