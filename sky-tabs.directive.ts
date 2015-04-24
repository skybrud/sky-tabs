/* global angular */
(function () {
	'use strict';

	/*
	 * Directive: skyTabs
	 * skyTabs is a directive for a tabs-interface
	 *
	 * Put skyTabs on the container, and skyTab="tab title" on
	 * the individual parts, like:
	 *
	 * <div sky-tabs>
	 *	<div sky-tab="A">...</div>
	 *	<div sky-tab="C">...</div>
	 *	<div sky-tab="G">...</div>
	 * </div>
	 *
	 */

	angular.module('skyTabs').directive('skyTabs',skyTabs);

	skyTabs.$inject = [];

	function skyTabs() {
		var directive = {
			restrict:'A',
			transclude:true,
			scope:true,
			template:'<div class="tabs"><ul>'+
					'<li ng-repeat="(key,tab) in skyTabs.tabs" ng-class="{act:tab.tabscope.show}"><button ng-click="skyTabs.open(key)" no-skyform>{{tab.title}}</button></li>'+
					'</ul></div>'+
					'<div ng-transclude><div>',
			controllerAs:'skyTabs',
			controller:skyTabsCtrl,
			link:link
		};

		skyTabsCtrl.$inject = ['$scope'];

		function skyTabsCtrl($scope) {
			var _this = this;

			_this.tabs = [];

			/*
			 * The `open` method loops through all the tabs setting there `scope.show`
			 * appropriatly according to the chosen tab.
			 * This method is triggered by the ng-click on the repeater in the directives template
			 */
			_this.open = function(which) {
				angular.forEach(_this.tabs, function(tab,key) {
					if (key === which) {
						tab.tabscope.show = true;
					} else {
						tab.tabscope.show = false;
					}
				});
			};

			/*
			 * The `addTab` method adds the tab scope to the `_this.tabs` object
			 *
			 */
			_this.addTab = function(tab,scope) {
				_this.tabs.push({title:tab,tabscope:scope});
			};

			$scope.open = _this.open;

		}

		function link(scope,element,attributes) {
			/*
			 * Start out by opening the first registered tab (thereby closing the rest).
			 */
			scope.open(0);
		}

		return directive;

	}

})();
