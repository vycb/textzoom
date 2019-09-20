browser.contextMenus.create({title: "+Plus", id: "tbzplus", contexts: ['all']});

browser.contextMenus.create({title: "-Minus", id: "tbzminus", contexts: ['all']});


browser.contextMenus.onClicked.addListener((info, tab)=>{
	if(["tbzminus", "tbzplus"].indexOf(info.menuItemId) === -1) return;

	try{
		browser.tabs.query({active: true, currentWindow: true}, (tabs)=>{
			browser.tabs.sendMessage(tabs[0].id, info.menuItemId)
		})
	}catch(e){
	}
})
