//place all JSON objects into object array
$(document).ready(function () {
  $.getJSON("bnbStats.json", function (data) {
    append_json(data);
  }).fail(function () {
    console.log("fail");
  });
});

function append_json(data) {
  // var table = document.getElementById("playerStats");
  data.forEach(function (object) {
    const table =
      object.Number == "sub"
        ? document.getElementById("subStats")
        : document.getElementById("playerStats");

    var tr = document.createElement("tr");
    
    //embed link in name
    var aTag = document.createElement("a");
    aTag.setAttribute("href", "#!");
    aTag.setAttribute("class", "player-link");
    aTag.setAttribute("data-target", "modal" + object.Player.replace(/\s+/g, ''));
    aTag.textContent = object.Player;
    console.log(aTag);

    var tdTest = document.createElement("td");
    tdTest.appendChild(aTag);

    tr.appendChild(tdTest);
    tr.innerHTML +=
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
