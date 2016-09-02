"use strict";

/*global IndexJS*/

var AboutJS = {};

(function(IndexJS) {
    var jQueryDOM = {};
    var angularJS = {};
        
    angularJS.aboutCtrl = function($scope) {
        angularJS.$scope = $scope;
        
        IndexJS.btnAboutActive();
    };
    
    IndexJS.angularJS.votingAppFCC.controller("aboutCtrl", angularJS.aboutCtrl);
})(IndexJS);