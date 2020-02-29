$(document).ready(function() {
  // Getting references to the name inout and author container, as well as the table body
  var nameInput = $("#author-name");
  var authorList = $("tbody");
  var authorContainer = $(".user-container");
  // Adding event listeners to the form to create a new object, and the button to delete
  // an Author
  $(document).on("submit", "#author-form", handleAuthorFormSubmit);
  $(document).on("click", ".delete-author", handleDeleteButtonPress);

  // Getting the intiial list of Authors
  getAuthors();

  // A function to handle what happens when the form is submitted to create a new Author
  function handleAuthorFormSubmit(event) {
    event.preventDefault();
    // Don't do anything if the name fields hasn't been filled out
    if (
      !nameInput
        .val()
        .trim()
        .trim()
    ) {
      return;
    }
    // Calling the upsertAuthor function and passing in the value of the name input
    upsertAuthor({
      name: nameInput.val().trim()
    });
  }

  // A function for creating an author. Calls getAuthors upon completion
  function upsertAuthor(authorData) {
    $.post("/api/users", authorData).then(getAuthors);
  }

  // Function for creating a new list row for authors
  function createAuthorRow(authorData) {
    console.log(authorData);
    var newTr = $("<tr>");
    newTr.data("author", authorData);
    newTr.append("<td>" + authorData.name + "</td>");
    newTr.append("<td>TOTAL BETS: </td>");
    newTr.append(
      "<td><a href='/newmain?author_id=" +
        authorData.id +
        "'>ALL USERS</a></td>"
    );
    newTr.append(
      "<td><a href='/newbets?author_id=" + authorData.id + "'>NEW BET</a></td>"
    );
    newTr.append(
      "<td><a style='cursor:pointer;color:red' class='delete-author'>DELETE USER</a></td>"
    );
    return newTr;
  }

  // Function for retrieving authors and getting them ready to be rendered to the page
  function getAuthors() {
    $.get("/api/users", function(data) {
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createAuthorRow(data[i]));
      }
      renderAuthorList(rowsToAdd);
      nameInput.val("");
    });
  }

  // A function for rendering the list of authors to the page
  function renderAuthorList(rows) {
    authorList
      .children()
      .not(":last")
      .remove();
    authorContainer.children(".alert").remove();
    if (rows.length) {
      console.log(rows);
      authorList.prepend(rows);
    } else {
      renderEmpty();
    }
  }

  // Function for handling what to render when there are no authors
  function renderEmpty() {
    var alertDiv = $("<div>");
    alertDiv.addClass("alert alert-danger");
    alertDiv.text("You must create an user account before you can make a bet.");
    authorContainer.append(alertDiv);
  }

  // Function for handling what happens when the delete button is pressed
  function handleDeleteButtonPress() {
    var listItemData = $(this)
      .parent("td")
      .parent("tr")
      .data("author");
    var id = listItemData.id;
    $.ajax({
      method: "DELETE",
      url: "/api/users/" + id
    }).then(getAuthors);
  }
});
