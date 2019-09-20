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
defFontSize = parseInt(pref.prefs.textblockzoomDefFontSize),
changeStep = parseInt(pref.prefs.textblockzoomChangeStep);

scale = isNaN(scale) ? 1.5 : scale;
defFontSize = isNaN(defFontSize) ? 22 : defFontSize;
changeStep = isNaN(changeStep) ? 4 : changeStep;

	contMenuItemP = contextMenu.Item({
		label: "TextBlockZoom +",
		context: contextMenu.PredicateContext(function(){return true}),
		contentScriptFile: [script],
		onMessage: function(id){
			//zoom(id, "plus")
		},
		data: 'plus,'+scale+','+changeStep+","+defFontSize,
		accesskey: 'p'
	});

	contMenuItemM = contextMenu.Item({
		label: "TextBlockZoom -",
		context: contextMenu.PredicateContext(function(){return true}),
		contentScriptFile: [script],
		onMessage: function(id){
			//zoom(id, "minus")
		},
		data: 'minus,'+scale+','+changeStep+","+defFontSize,
		accesskey: 'm'
	});

