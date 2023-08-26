//place all JSON objects into object array
var playerStats;

$(document).ready(function () {
  $.getJSON("bnbStats.json", function (data) {
    // console.log(data);
    // console.log("we in");
    //iterate over each object
    append_json(data);
  }).fail(function () {
    console.log("fail");
  });
});

function append_json(data) {
  var table = document.getElementById("playerStats");
  data.forEach(function (object) {
    var tr = document.createElement("tr");
    tr.innerHTML =
      "<td>" +
      object.Player +
      "</td>" +
      "<td>" +
      object.Games +
      "</td>" +
      "<td>" +
      object.PA +
      "</td>" +
      "<td>" +
      object.AB +
      "</td>" +
      "<td>" +
      object.Runs +
      "</td>" +
      "<td>" +
      object.H +
      "</td>" +
      "<td>" +
      object["1B"] +
      "</td>" +
      "<td>" +
      object["2B"] +
      "</td>" +
      "<td>" +
      object["3B"] +
      "</td>" +
      "<td>" +
      object.HR +
      "</td>" +
      "<td>" +
      object.BB +
      "</td>" +
      "<td>" +
      object.SF +
      "</td>" +
      "<td>" +
      object.BA +
      "</td>" +
      "<td>" +
      object.OBP +
      "</td>" +
      "<td>" +
      object.SLG +
      "</td>" +
      "<td>" +
      object.OPS +
      "</td>";
    table.appendChild(tr);
  });
}
