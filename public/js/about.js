"use strict";

var AboutJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.aboutCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        IndexJS.btnAboutActive();
    };
    
    IndexJS.angularJS.votingAppFCC.controller("aboutCtrl", angularJS.aboutCtrl);
})();