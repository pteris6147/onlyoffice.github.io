/**
 *
 * (c) Copyright Ascensio System SIA 2020
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *	 http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(function(window, undefined) {
	   let messageWindow = null;
	   let varia
	// let bTranslation = false;
	// let bInit = false

	window.oncontextmenu = function(e) {
		if (e.preventDefault)
			e.preventDefault();
		if (e.stopPropagation)
			e.stopPropagation();
		return false;
	};

	window.Asc.plugin.init = function() {
		// bInit = true;
		// if (bTranslation)
		// 	createWindow();
		createWindow();
	};

	// window.Asc.plugin.onThemeChanged = function(theme)
	// {
	// 	window.Asc.plugin.onThemeChangedBase(theme);
	// };

	window.Asc.plugin.button = function(id, windowId) {
		if (windowId) {
			window.Asc.plugin.executeMethod('CloseWindow', [windowId], function() {
				window.Asc.plugin.executeCommand("close", "");
			})
		}
	};

	// window.Asc.plugin.onTranslate = function() {
	// 	bTranslation = true;
	// 	if (bInit) createWindow();
	// };

	function createWindow() {
		let location  = window.location;
		let start = location.pathname.lastIndexOf('/') + 1;
		let file = location.pathname.substring(start);

		 variation = {
			url : location.href.replace(file, 'ie_warning.html'),
			description : (window.Asc.plugin.tr('Warning') || 'Warning'),
			isVisual : true,
			buttons : [],
			isModal : true,
			EditorsSupport : ["word", "slide"],
			size : [ 592, 170 ]
		};

		if (!messageWindow) {
			messageWindow = new window.Asc.PluginWindow();
		}
		messageWindow.show(variation);
	}
	
})(window, undefined);