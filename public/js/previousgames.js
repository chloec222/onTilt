$(document).ready(function() {
  console.log("test2");
  var queryURL =
    "https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=4387";
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
      var homeScore = results[i].intHomeScore;
      var awayScore = results[i].intAwayScore;

      console.log(homeTeam);
      console.log(awayTeam);

      gameDiv.append(homeTeam + ": " + homeScore + " " + " " + " | " + "<span>vs</span>" + " | " + " " + " ");
      gameDiv.append(awayTeam + ": " + awayScore);

      $("#pregames").append(gameDiv);
      console.log(response.data);
    }
  });
});
