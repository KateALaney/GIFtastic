$(document).ready(function () {

// Create a starting array of GIFs.    
var topics = ["Fellowship of the Ring", "The Two Towers", "Return of the King", "Miss Peregrine's Home for Peculiar Children", "Black Panther", "Captain Marvel", "Alice in Wonderland"];

// Start the on-click function to start the change-state of the GIFs.
$(document).on("click", ".gif-img", stillGif);

// Create an on-click function to start the AJAX call.
$(document).on("click", ".gif-btn", function() {
    var rating = ""; // Create an empty variable for all ratings.
    var searchParam = $(this).attr("data-name"); // Create a variable to store the search parameters.
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchParam + "&api_key=4WkQFmyOYQVAFTiG3oCIImwuhOKOHRVa&limit=10" + "&offset=0&rating=" + rating;
    
// AJAX call.
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) { // Create a function to pull the responses to the AJAX call.
    var results = response.data;
    
    for (var i = 0; i < results.length; i++) { // Create a for loop to run through the possible results.
        
// Create a series of divs to hold and display the results in the HTML.
        var gifDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        var gifImage = $("<img>");
        gifImage.attr("src", results[i].images.fixed_height.url);
        gifImage.attr("data-still", results[i].images.fixed_height_still.url);
        gifImage.attr("data-animate", results[i].images.fixed_height.url);
        gifImage.attr("data-state", "still");
        gifDiv.append(p);
        gifDiv.append(gifImage);
        $("#gif-placement").prepend(gifDiv);
        }
    });
  });

  // Create a function to change the state of the GIFs.
  
  function stillGif() {
    var state = $(this).attr("data-state");
    
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    };
  };

// Create a function to take user input and create new buttons.      
$("#create-gif").click(function(event) {
    event.preventDefault();
        var gif = $("#gif-input-form").val().trim();
        topics.push(gif);
        createButtons();
      });
  
  function createButtons() {
    $("#array-buttons").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
          a.addClass("btn btn-light gif-btn");
          a.attr("data-name", topics[i]);
          a.text(topics[i]);
          $("#array-buttons").append(a);
        };
      };

    createButtons();   
});