let body = document.querySelector('ul');
// console.log(body.childNodes);


// Getting Details TO Player Page
function player(package) {
  var videoLink = package.childNodes[0].childNodes[0].href;
  var videoTitle = package.childNodes[0].childNodes[1].innerHTML;
  var videoDesc = package.childNodes[0].childNodes[2].innerHTML;

  console.log(videoLink);
  // console.log(videoTitle);
  // console.log(videoDesc);

  var videoObj = {
    videoLink: videoLink,
    videoTitle: videoTitle,
    videoDesc: videoDesc
  }

  localStorage.setItem("VideData", JSON.stringify(videoObj))
  location.href = 'player.html';
}





// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
  gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
  gapi.client.setApiKey('AIzaSyCDwX1k2KjO7F-9QN72bQriXcvQfM7zvqY');

  search()
}

function search() {
  var input = document.getElementById('search').value;
  // Use the JavaScript client library to create a search.list() API call.
  var request = gapi.client.youtube.search.list({
    q: input,
    part: 'snippet',
    maxResults: 25,
    type: 'video',
  });

  // Send the request to the API server,
  // and invoke onSearchRepsonse() with the response.
  request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
  showResponse(response);
}


// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
  
  var responseString = JSON.stringify(response, '', 2);
  // document.getElementById('response').innerHTML += responseString;
  var responseObj = JSON.parse(responseString);
  var dataObj = responseObj.items
  while (body.firstChild) {
    body.removeChild(body.firstChild);
  }
  for (var i = 0; i < dataObj.length; i++) {

    let data = dataObj[i];

    let objLink = data.id.videoId;
    let objImg = data.snippet.thumbnails.medium.url;
    let objHeading = data.snippet.title;
    let objDesc = data.snippet.description;


    let li = document.createElement('li');
    li.setAttribute('onclick', 'player(this)')

    let div = document.createElement('div')
    div.setAttribute('class', 'content');

    let alink = document.createElement('a');
    alink.setAttribute('href', `https://www.youtube.com/watch?v=${objLink}`);
    alink.setAttribute('target', '_blank')

    let img = document.createElement('img');
    img.setAttribute('src', `${objImg}`);
    img.setAttribute('alt', `${objHeading}`);

    alink.appendChild(img);

    let heading = document.createElement('h4');
    let h = document.createTextNode(`${objHeading}`);
    heading.appendChild(h);

    let Desc = document.createElement('p');
    let d = document.createTextNode(`${objDesc}`);
    Desc.appendChild(d);

    div.appendChild(alink);
    div.appendChild(heading);
    div.appendChild(Desc);
    li.appendChild(div);

    body.appendChild(li);
  }

}