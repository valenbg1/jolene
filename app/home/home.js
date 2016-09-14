"use strict";

/*global AppJS*/

var HomeJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.homeCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        AppJS.btnHomeActive();
    };
    
    AppJS.angularJS.votingAppFCC.controller("homeCtrl", angularJS.homeCtrl);
})();