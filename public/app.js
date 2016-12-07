var app = function(){

var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';

// ---------------------------------------------
makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
// ---------------------------------------------
var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = callback;
request.send();
console.log("request being made, shoved back 1st on the list");
}

// is this the callback below?
var requestComplete = function(){
if(this.status !== 200) return;
console.log("should appear if url correct, shoved behind the 'request being made' on the list");

var jsonString = this.responseText;
var albums = JSON.parse(jsonString);
populateList(albums);
}

console.log("this should appear before the two console logs as it is not in the callback!")

var populateList = function(albums){
  var newAlbum = document.getElementById('albums');
  console.log(albums);
  for(album of albums.albums.items){
    var item = document.createElement("li");
    item.innerText = album.name;
    console.log(item);
    var ref = album.external_urls.spotify;
    var link = document.createElement('a');
      link.href = ref; 
      link.innerText = "Click for: " + album.name + " at Spotify!"
    var image = album.images[0].url;
    var picture = document.createElement('img');
    picture.src = image;
    picture.img = album.images[0].url;
    console.log(image);
    newAlbum.appendChild(picture);
    newAlbum.appendChild(item);
    newAlbum.appendChild(link);


    }
};

// make each title link to the album in Spotify



















window.onload = app;