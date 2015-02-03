var
/*
 buttons = require('sdk/ui/button/action'),
 tabs = require("sdk/tabs"),
 menuitems = require("menuitems"),

 script = 'self.on("click", function(node, data){' +

 '  console.log("data: " + data);' +
 '});',*/
	contextMenu = require("sdk/context-menu"),
	self = require("sdk/self"),
	pref = require("sdk/simple-prefs"),

	scale = parseFloat(pref.prefs.scale),	scale = isNaN(scale) ? 1.5 : scale,
	defFontSize = parseInt(pref.prefs.defFontSize),	defFontSize = isNaN(defFontSize) ? 22 : defFontSize,

	contentScriptOptions = {
		scale: scale,
		changeStep: pref.prefs.changeStep,
		defFontSize: defFontSize
	},

	script = self.data.url("content-script.js")
;
/*
console.log('scale prefs:' + pref.prefs.scale);
console.log('changeStep prefs:' + pref.prefs.changeStep);
console.log('defFontSize prefs:' + pref.prefs.defFontSize);*/

	contMenuItemP = contextMenu.Item({
		label: "TextZoom +",
		context: contextMenu.PredicateContext(function(){return true}),
		contentScriptFile: [script],
		data: 'plus,'+scale+','+pref.prefs.changeStep+","+defFontSize,
		accesskey: '+'
	}),
	contMenuItemM = contextMenu.Item({
		label: "TextZoom -",
		context: contextMenu.PredicateContext(function(){return true}),
		contentScriptFile: [script],
		data: 'minus,'+scale+','+pref.prefs.changeStep+","+defFontSize,
		accesskey: '-'
	});



	/*button = buttons.ActionButton({
	id: "mozilla-link",
	label: "Visit Mozilla",
	icon: {
		"16": "./icon-16.png",
		"32": "./icon-32.png",
		"64": "./icon-64.png"
	},
	onClick: function(state) {
		tabs.open("https://developer.mozilla.org/");
	}
}),

	menuitem = menuitems.Menuitem({
	id: "textzoomp",
	menuid: "menu_ToolsPopup",
	label: "textzoom+",
	onCommand: function() {
		console.log("clicked +");
	},
	insertbefore: "menu_pageInfo"
}),

	menuitem2 = menuitems.Menuitem({
	id: "textzoomm",
	menuid: "menu_ToolsPopup",
	label: "textzoom-",
	onCommand: function() {
		console.log("clicked -");
	},
	insertbefore: "menu_pageInfo"
})*/
