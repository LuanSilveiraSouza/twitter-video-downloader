chrome.webRequest.onBeforeRequest.addListener(
	function (details) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, details, function(response) {});  
        });
	},
	{ urls: ['*://video.twimg.com/ext_tw_video/*'] },
	['blocking']
);