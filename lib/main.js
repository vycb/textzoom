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
	script = self.data.url("content-script.js"),
	scale = parseFloat(pref.prefs.textblockzoomScale),
	defFontSize = parseInt(pref.prefs.textblockzoomDefFontSize)
	;

scale = isNaN(scale) ? 1.5 : scale;
defFontSize = isNaN(defFontSize) ? 22 : defFontSize;
/*
console.log('scale prefs:' + pref.prefs.textblockzoomScale);
console.log('textblockzoomChangeStep prefs:' + pref.prefs.textblockzoomChangeStep);
console.log('defFontSize prefs:' + pref.prefs.textblockzoomDefFontSize);*/

	contMenuItemP = contextMenu.Item({
		label: "TextBlockZoom +",
		context: contextMenu.PredicateContext(function(){return true}),
		contentScriptFile: [script],
		data: 'plus,'+scale+','+pref.prefs.textblockzoomChangeStep+","+defFontSize,
		accesskey: '+'
	});

	contMenuItemM = contextMenu.Item({
		label: "TextBlockZoom -",
		context: contextMenu.PredicateContext(function(){return true}),
		contentScriptFile: [script],
		data: 'minus,'+scale+','+pref.prefs.textblockzoomChangeStep+","+defFontSize,
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
