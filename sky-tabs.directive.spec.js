(function () {
	'use strict';

	describe('Directive: skyTabs', function() {
		var element,
			$rootScope,
			$compile,
			scope,
			html;

		beforeEach(module('skyTabs'));

		beforeEach(inject(function(_$rootScope_, _$compile_) {
			$rootScope = _$rootScope_;
			$compile = _$compile_;
		}));

		beforeEach(function() {
			element = angular.element('<div sky-tabs><div sky-tab="A">Indhold tab 1</div><div sky-tab="C">Indhold tab 2</div><div sky-tab="G">Indhold tab 3</div></div>');

			$compile(element)($rootScope);
			scope = element.scope();

			$rootScope.$digest();
			html = element.html();
		});

		it('should add tabs for each tab-content', function() {
			var tabs = element[0].querySelectorAll('.tabs li');
			expect(tabs.length).toBe(3);
		});

		it('should start out with tab1 selected and the others hidden', function() {
			var tabs = element[0].querySelectorAll('.tabs li');
			var contents = element[0].querySelectorAll('[sky-tab] [ng-transclude]');

			expect(tabs[0].classList.contains('act')).toBe(true);
			expect(tabs[1].classList.contains('act')).toBe(false);
			expect(tabs[2].classList.contains('act')).toBe(false);

			expect(contents[0].classList.contains('ng-hide')).toBe(false);
			expect(contents[1].classList.contains('ng-hide')).toBe(true);
			expect(contents[2].classList.contains('ng-hide')).toBe(true);
		});

		it('should change selected item when tab is clicked', function() {
			//click the second
			angular.element(element[0].querySelectorAll('.tabs li button')[1]).triggerHandler('click');

			$rootScope.$digest();

			var tabs = element[0].querySelectorAll('.tabs li');
			var contents = element[0].querySelectorAll('[sky-tab] [ng-transclude]');

			expect(tabs[0].classList.contains('act')).toBe(false);
			expect(tabs[1].classList.contains('act')).toBe(true);
			expect(tabs[2].classList.contains('act')).toBe(false);

			expect(contents[0].classList.contains('ng-hide')).toBe(true);
			expect(contents[1].classList.contains('ng-hide')).toBe(false);
			expect(contents[2].classList.contains('ng-hide')).toBe(true);
		});

	});

})();
