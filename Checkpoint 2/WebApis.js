//Leadership board

//Get
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://idasg2-f43a.restdb.io/rest/leadership-board",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "<your CORS apikey here>",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  
//Post
var jsondata = {"field1": "xyz","field2": "abc"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://idasg2-f43a.restdb.io/rest/leadership-board",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

//Put
$.ajax(settings).done(function (response) {
  console.log(response);
});

var jsondata = {"field1": "new value","field2": "xxx"};
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://idasg2-f43a.restdb.io/rest/leadership-board/(ObjectID)",
  "method": "PUT",
  "headers": {
    "content-type": "application/json",
    "x-apikey": "<your CORS apikey here>",
    "cache-control": "no-cache"
  },
  "processData": false,
  "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
