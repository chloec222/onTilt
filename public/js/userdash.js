$(document).ready(function() {
  console.log("test2");
  var queryURL =
    "https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=4387";
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var results = response.events;

    for (var i = 0; i < results.length; i++) {
      var gameDiv = $("<div>");
      console.log(results);
      var homeTeam = results[i].strHomeTeam;
      var awayTeam = results[i].strAwayTeam;
      console.log(homeTeam);
      console.log(awayTeam);
      gameDiv.append(homeTeam + " " + "vs" + " ");
      gameDiv.append(awayTeam);

      $("#games").append(gameDiv);
      console.log(response.data);
    }
  });
});
