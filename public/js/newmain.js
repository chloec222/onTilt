$(document).ready(function() {
  /* global moment */

  // blogContainer holds all of our posts
  var blogContainer = $(".blog-container");
  var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handlePostDelete);
  $(document).on("click", "button.edit", handlePostEdit);

  // This function does an API call to delete posts
  function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/users/" + id
    }).then(function() {
      alert("Bet deleted!");
      $(`[data-bet=${id}]`).remove();
    });
  }

  // This function figures out which post we want to delete and then calls deletePost
  function handlePostDelete() {
    var id = $(this)
      .closest("[data-bet]")
      .attr("data-bet");
    deletePost(id);
  }

  // This function figures out which post we want to edit and takes it to the appropriate url
  function handlePostEdit() {
    var id = $(this)
      .closest("[data-bet]")
      .attr("data-bet");
    window.location.href = "/newmain?bet=" + id;
  }

  // This function displays a messgae when there are no posts
  function displayEmpty(id) {
    var query = window.location.search;
    var partial = "";
    if (id) {
      partial = " for Author #" + id;
    }
    blogContainer.empty();
    var messageh2 = $("<h2>");
    messageh2.css({ "text-align": "center", "margin-top": "50px" });
    messageh2.html(
      "No bets yet" +
        partial +
        ", navigate <a href='/newbet" +
        query +
        "'>here</a> in order to get started."
    );
    blogContainer.append(messageh2);
  }
});
