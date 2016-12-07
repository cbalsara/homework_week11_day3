var app = function(){

var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';

makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
var request = new XMLHttpRequest();
request.open("GET", url);
request.onload = callback;
request.send();
}

var requestComplete = function(){
if(this.status !== 200) return;
console.log("should appear if url correct");

var jsonString = this.responseText;
var albums = JSON.parse(jsonString);
populateList(albums);
}

var populateList = function(albums){
  var newAlbum = document.getElementById('albums');
  console.log(albums);
  for(album of albums.albums.items){
    var item = document.createElement("li");
    item.innerText = album.name;
    console.log(item);
    var href = album.external_urls.spotify;
    var link = document.createElement('a');
      link.href = href; 
      link.innerText = album.name;
    newAlbum.appendChild(item);
    newAlbum.appendChild(link);
    }
  };

// make each title link to the album in Spotify



















window.onload = app;