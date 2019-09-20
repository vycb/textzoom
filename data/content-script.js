self.on("click", function(node, data){

	//self.postMessage(getId(node));

	zoom(node, data);
});

function zoom(node, data){
	var args = data.split(','),
		opval = args[0],
		scale = args[1],
		changeStep = args[2],
		defFontSize = args[3],
		op = opval === 'plus' ? 1: -1,
		scale = opval === 'plus' ? scale: scale / 2
		;

	if(node instanceof HTMLImageElement)
	{
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
	else
	{
		if(node){
			var
				fontSize = parseInt(node.style.fontSize) + 0,	fontSize = !fontSize ? defFontSize : fontSize + changeStep * op
				;

			//node.parentNode.style.fontSize =
			node.style.fontSize = (fontSize + "px");
			//node.parentNode.style.lineHeight =
			node.style.lineHeight = 'initial';
		}
	}

	//logdata(node, data);
}
function getId(node){
	return ((node.id) ? node.id : (node.id = 'genId' + new Date().getTime()));
}
function logdata(node, data){
	console.log("clicked: " + node.nodeName);
	console.log("data: " + data);
}
