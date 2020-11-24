let video;
let locationUrl = '';

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
	if (document.URL.slice(20, 24) !== 'home' && locationUrl !== document.URL) {
		locationUrl = document.URL;
		video = msg;

		/* if(!video || (msg.timeStamp - video.timeStamp) > 1000 && msg.requestId == video.requestId) {
            video = msg;
        } */

		const box = document.querySelector(
			'.css-1dbjc4n.r-1oszu61.r-2sztyj.r-1efd50x.r-5kkj8d.r-18u37iz.r-ahm1il.r-a2tzq0'
		);

		const button = document.createElement('a');
		button.innerHTML =
			'<svg viewBox="0 0 24 24" class="r-4qtqp9 r-yyyyoo r-50lct3 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1srniue"><g><path d="M17.53 7.47l-5-5c-.293-.293-.768-.293-1.06 0l-5 5c-.294.293-.294.768 0 1.06s.767.294 1.06 0l3.72-3.72V15c0 .414.336.75.75.75s.75-.336.75-.75V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22c.293-.293.293-.767 0-1.06z"></path><path d="M19.708 21.944H4.292C3.028 21.944 2 20.916 2 19.652V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 .437.355.792.792.792h15.416c.437 0 .792-.355.792-.792V14c0-.414.336-.75.75-.75s.75.336.75.75v5.652c0 1.264-1.028 2.292-2.292 2.292z"></path></g></svg>';
		button.style.color = '#6E767D';
		button.style.backgroundColor = 'transparent';
		button.style.border = 'none';
		button.style.cursor = 'pointer';
		button.style.transform = 'rotate(180deg)';
		button.style.display = 'flex';
		button.style.alignItems = 'center';
		button.href = video.url;

		box.appendChild(button);
	}
});
