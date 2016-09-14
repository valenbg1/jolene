"use strict";

/*global IndexJS*/

var HomeJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.homeCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        IndexJS.btnHomeActive();
    };
    
    IndexJS.angularJS.votingAppFCC.controller("homeCtrl", angularJS.homeCtrl);
})();