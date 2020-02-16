$(document).ready(function() {
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

      gifDiv.prepend(p);
      gifDiv.prepend(personImage);

      $("#gifs").prepend(gifDiv);
      console.log(response.data);
    }
  });
});
