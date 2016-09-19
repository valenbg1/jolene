"use strict";

/*global angular*/

angular.module("votingAppFCC.login", [
    "ngRoute",
    "votingAppFCC.auth"])
    .config(
        function($routeProvider) {
            $routeProvider.when("/login", {
                templateUrl: "login/login.html",
                controller: "LoginCtrl",
                controllerAs: "vm"
            });
        })
    .controller("LoginCtrl",
        function(authService) {
            var vm = this;
            
            vm.login = function() {
                authService.login(vm.username, vm.password,
                    function(response) {
                        console.log(response);
                    });
            };
        });