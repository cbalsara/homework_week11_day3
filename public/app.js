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
console.log("should appear if url correct")


}

window.onload = app;