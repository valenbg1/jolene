"use strict";

/*global angular*/

angular.module("jolene", [
    "ngRoute",
    "ngAnimate",
    "ui.bootstrap",
    "jolene.home",
    "jolene.login",
    "jolene.about",
    "jolene.session"])
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
        function($scope, $location, sessionService) {
            var vm = this;
            
            vm.isRouteLoading = true;
            vm.navBarCollapsed = true;
            vm.user = sessionService.user;
            
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