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
console.log("should appear");


}

window.onload = app;