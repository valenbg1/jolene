"use strict";

/*global AppJS*/

var LoginJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.loginCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        AppJS.btnLoginActive();
    };
    
    AppJS.angularJS.votingAppFCC.controller("loginCtrl", angularJS.loginCtrl);
})();