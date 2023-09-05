// This Script parses JSON stats and dynamically adds them into HTML

// place all JSON objects into object array
$(document).ready(function () {
  $.getJSON("bnbStats.json", function (data) {
    append_json(data);
  }).fail(function () {
    console.log("fail");
  });
});

function append_json(data) {
  data.forEach(function (object) {
    var tr = document.createElement("tr");

    // embed link in name if not sub
    if (object.Number != "sub") {
      var aTag = document.createElement("a");
      aTag.setAttribute("href", "#!");
      aTag.setAttribute("class", "player-link");
      aTag.setAttribute(
        "data-target",
        "modal" + object.Player.replace(/\s+/g, "")
      );
      aTag.textContent = object.Player;

      var td = document.createElement("td");
      td.appendChild(aTag);
      tr.appendChild(td);
    } else {
      tr.innerHTML += "<td>" + object.Player + "</td>";
    }

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

    // Places sub or regular in correct table
    const table =
      object.Number == "sub"
        ? document.getElementById("subStats")
        : document.getElementById("playerStats");
    table.appendChild(tr);
  });
}

// Add a click event listener to the document
document.addEventListener("click", function (event) {
  // Check if the clicked element has the class "player-link"
  if (event.target.classList.contains("player-link")) {
    var modalElement = document.getElementById(
      event.target.getAttribute("data-target")
    );

    // Check if the modal element exists
    if (modalElement) {
      modalElement.style.display = "block";
    }
  }
});

// Add event listener for close buttons on popup stats
const closeBtns = document.getElementsByClassName("close-button");

for (let i = 0; i < closeBtns.length; i++) {
  closeBtns[i].addEventListener("click", () => {
    closeBtns[i].parentNode.parentNode.style.display = "none";
  });
}
