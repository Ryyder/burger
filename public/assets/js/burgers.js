$(document).ready(function() {
  /* event handler to change the state from not devoured to devoured */
  $(".change-devour").on("click", function(event) {
    /* grab the state of the burger */
    var id = $(this).data("id");
    /* change the state of the burger from uneaten to eaten */
    var newDevourState = {
      devoured: 1
    };
    /* our put request, send our newDevourState object to our route */
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevourState);
        location.reload();
      });

  });

  /* event handler for creating a new burger */
  $("#submit").on("click", function(event) {
    event.preventDefault();
  
    /* newBurger object to be sent */
    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: 0
    };
  
    console.log(newBurger);
    /* our post request, send our newBurger object to our route */
    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(function(data) {
      console.log("burger submitted");
      location.reload();
    });
  
    });

});

