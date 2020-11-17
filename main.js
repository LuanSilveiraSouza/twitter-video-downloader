const converter = require ('node-m3u8-to-mp4');

const url = 'https://video.twimg.com/ext_tw_video/1310039259185909760/pu/pl/WpNlJVOmuNSYdUsc.m3u8?tag=10';

async function main() {
    const response = await converter(url, `${__dirname}/video.mp4`);

    console.log(response);
}


let video = {};

chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    console.log(msg);
    console.log(new Date(msg.timeStamp));
});