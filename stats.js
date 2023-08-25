//place all JSON objects into object array
var playerStats;

$(document).ready(function () {
  $.getJSON("players.json", function (data) {
    // console.log(data);
    // console.log("we in");
    //iterate over each object
  }).fail(function () {
    console.log("fail");
  });
});
