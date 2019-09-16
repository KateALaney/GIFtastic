$(document).ready(function () {

var topics = ["Fellowship of the Ring", "The Two Towers", "Return of the King", "Miss Peregrine's Home for Peculiar Children", "Black Panther", "Captain Marvel", "Alice in Wonderland"];

$(document).on("click", ".gif-btn", function() {
    var searchParam = $(this).attr("data-movie");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchParam + "api_key=4WkQFmyOYQVAFTiG3oCIImwuhOKOHRVa&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");
        var p = $("<p>").text("Rating: " + results[i].rating);
        gifDiv.append(p);
        }
    });
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

    $("#create-gif").click(function(event) {
    event.preventDefault();
        var gif = $("#gif-input-form").val().trim();
        topics.push(gif);
        createButtons();
      });

      createButtons();   
});