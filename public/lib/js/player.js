let VideoPlace = document.getElementById('VideoPlace');
let TitlePlace = document.getElementById('TitlePlace');
let DescPlace = document.getElementById('DescPlace');

var videoData = localStorage.getItem("VideData");
var videoData = JSON.parse(videoData);
// console.log(videoData);

var videoLink = videoData.videoLink;
var videoTitle = videoData.videoTitle;
var videoDesc = videoData.videoDesc;
videoLink = videoLink.slice(32, 44);

VideoPlace.src = `https://www.youtube.com/embed/${videoLink}`;
// VideoPlace.src = `123.com`;
TitlePlace.innerHTML = videoTitle;
DescPlace.innerHTML = videoDesc;