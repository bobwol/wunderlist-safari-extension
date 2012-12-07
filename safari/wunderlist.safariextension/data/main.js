// Overlay
var attachOverlay = function (data, cb) {
    var tab = data.tab;
    var port = PortWrapper(tab, "main-overlay");

    port.emit("wunderlist_click", data);
};

// Fire the overlay when the button is clicked
safari.application.addEventListener("command", function(ev) {
    if( ev.command === "wunderlist_click" ) {
        attachOverlay({
            tab: safari.application.activeBrowserWindow.activeTab,
            placement: 'toolbar'
        });
    }
}, false);