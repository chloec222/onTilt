$(document).ready(function() {
    // Getting references to the name inout and author container, as well as the table body
    var nameInput = $("#user-name");
    var userList = $("tbody");
    var userContainer = $(".user-container");
    // Adding event listeners to the form to create a new object, and the button to delete
    // an User
    $(document).on("submit", "#user-form", handleUserFormSubmit);
    // $(document).on("click", ".delete-user", handleDeleteButtonPress);
  
    // Getting the intiial list of Users
    getUsers();
  
    // A function to handle what happens when the form is submitted to create a new user
    function handleUserFormSubmit(event) {
      event.preventDefault();
      // Don't do anything if the name fields hasn't been filled out
      if (!nameInput.val().trim().trim()) {
        return;
      }
      // Calling the upsertUser function and passing in the value of the name input
      upsertUser({
        name: nameInput
          .val()
          .trim()
      });
    }
  
    // A function for creating an user. Calls getUsers upon completion
    function upsertUser(userData) {
      $.post("/api/users", userData)
        .then(getUsers);
    }
  
    // Function for creating a new list row for authors
    function createUserRow(userData) {
      console.log(userData);
      var newTr = $("<tr>");
      newTr.data("user", userData);
      newTr.append("<td>" + userData.name + "</td>");
      // newTr.append("<td>Total # of bids</td>");
      newTr.append("<td><a href='/user?user_id=" + userData.id + "'>Go User's Bids</a></td>");
      // newTr.append("<td><a href='/bid?user_id=" + userData.id + "'>Place a Bid</a></td>");
      // newTr.append("<td><a style='cursor:pointer;color:red' class='delete-user'>Delete User</a></td>");
      return newTr;
    }
  
    // Function for retrieving authors and getting them ready to be rendered to the page
    function getUsers() {
      $.get("/api/users", function(data) {
        var rowsToAdd = [];
        for (var i = 0; i < data.length; i++) {
          rowsToAdd.push(createUserRow(data[i]));
        }
        renderUserList(rowsToAdd);
        nameInput.val("");
      });
    }
  
    // A function for rendering the list of authors to the page
    function renderUserList(rows) {
      userList.children().not(":last").remove();
      userContainer.children(".alert").remove();
      if (rows.length) {
        console.log(rows);
        userList.prepend(rows);
      }
      else {
        renderEmpty();
      }
    }
  
    // Function for handling what to render when there are no authors
    function renderEmpty() {
      var alertDiv = $("<div>");
      alertDiv.addClass("alert alert-danger");
      alertDiv.text("You must create an User before you can place a bid.");
      userContainer.append(alertDiv);
    }
  
    // Function for handling what happens when the delete button is pressed
    function handleDeleteButtonPress() {
      var listItemData = $(this).parent("td").parent("tr").data("user");
      var id = listItemData.id;
      $.ajax({
        method: "DELETE",
        url: "/api/users/" + id
      })
      .then(getUsers);
    }
  });
  