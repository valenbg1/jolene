"use strict";

/*global AppJS*/

var AboutJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.aboutCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        AppJS.btnAboutActive();
    };
    
    AppJS.angularJS.votingAppFCC.controller("aboutCtrl", angularJS.aboutCtrl);
})();