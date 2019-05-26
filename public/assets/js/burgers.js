$(document).ready(function() {

  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");

    var newDevourState = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevourState);
        location.reload();
      });

  });

  $("#submit").on("click", function(event) {
    event.preventDefault();
  
  
    var newBurger = {
      burger_name: $("#burger-name").val().trim(),
      devoured: 0
    };
  
    console.log(newBurger);
  
    $.ajax("/api/burgers", {
      method: "POST",
      data: newBurger
    }).then(function(data) {
      console.log("burger submitted");
      location.reload();
    });
  
    });

});

