console.log(`spotify-json-2025.06.20`);
let url = $request.url;
// console.log
if (url.includes('com:443')) {
    url = url.replace(/com:443/, 'com');
}
if (url.includes('platform=iphone')) {
    url = url.replace(/platform=iphone/, 'platform=ipad');
    // console.log
} else {
    console.log('无需处理');
}
$done({
    url
});