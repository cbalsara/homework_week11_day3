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
  var li1 = document.createElement("li");
  li1.innerText = album.name;
  console.log(li1);
newAlbum.appendChild(li1)
}
};















window.onload = app;