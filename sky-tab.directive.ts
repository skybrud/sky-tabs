/* global angular */
(function () {
	'use strict';

	/*
	 * The skyTab directive wraps the content in a container with
	 * ng-show, and registers itself with the required skyTabs.
	 * The scope is passed along so the show property can be controlled
	 * from skyTabs.
	 */

	angular.module('skyTabs').directive('skyTab',skyTab);

	skyTab.$inject = [];

	function skyTab() {
		var directive = {
			restrict:'A',
			require:'^skyTabs',
			scope:true,
			transclude:true,
			template:'<div ng-transclude ng-show="show"></div>',
			link:link
		};

		function link(scope,element,attributes,skyTabsCtrl) {
			skyTabsCtrl.addTab(attributes.skyTab,scope);
		}

		return directive;

	}

})();
