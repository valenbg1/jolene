"use strict";

/*global IndexJS*/

var LoginJS = {};

(function() {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.loginCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        IndexJS.btnLoginActive();
    };
    
    IndexJS.angularJS.votingAppFCC.controller("loginCtrl", angularJS.loginCtrl);
})();