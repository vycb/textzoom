var textBlockZoom = {};

addEventListener("contextmenu", (event)=>{
		textBlockZoom.clickedEl = event.target;
}, true);

browser.runtime.onMessage.addListener((request, sender, sendResponse)=>{
		zoom(textBlockZoom.clickedEl, request);
	});

browser.storage.local.get({
	changeStep: 4,
	defFontSize: 22,
	scale: 1.5
}, (items)=>{
	textBlockZoom.changeStep = items.changeStep;
	textBlockZoom.scale = items.scale;
	textBlockZoom.defFontSize = items.defFontSize;
});

browser.storage.onChanged.addListener((changes, namespace)=>{
	for(let key in changes){
		textBlockZoom[key] = changes[key].newValue;
	}
});

function zoom(node, opval){
	var op = opval === 'tbzplus' ? 1: -1,
		scale = textBlockZoom.scale,
		changeStep = textBlockZoom.changeStep,
		defFontSize = textBlockZoom.defFontSize;

	scale = opval === 'tbzplus' ? scale: scale / 2;

	if(node instanceof HTMLImageElement){
		if(!node.hasAttribute("width"))
			node.setAttribute("width", node.naturalWidth);
		if(!node.hasAttribute("height"))
			node.setAttribute("height", node.naturalHeight);
		if(!node.hasAttribute("originalWidth")){
			node.setAttribute("originalWidth", node.width);
			node.setAttribute("originalHeight", node.height);
		}
		node.width *= scale;
		node.height *= scale;
	}
	else{
		if(!node)return;
		var fontSize = parseInt(node.style.fontSize);

		if(isNaN(fontSize) || !fontSize){
			fontSize = defFontSize;
		}else{
			fontSize = fontSize + changeStep * op;
		}
		node.style.fontSize = (fontSize + "px");
		node.style.lineHeight = 'initial';
	}
}