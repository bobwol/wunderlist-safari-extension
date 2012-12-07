(function() {

    var overlayPort = PortWrapper(safari.self, "overlay");
    overlayPort.on("wunderlist_click", function(postData) {
        
			var temp = document.createElement('iframe');

	    temp.allowtransparency = 'true';
	    temp.scrolling = 'no';
	    temp.id = 'wunderlist_overlay';
	    temp.name = 'wunderlist_overlay';
	    temp.style.cssText = 'border:none;height:100%;width:100%;position:fixed;z-index:99999999;top:0;left:0;display:block;';

	    temp.src = 'http://0.0.0.0:5000/#/extension/add';

	    document.body.appendChild(temp);

    });
}());