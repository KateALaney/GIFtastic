var topics = ["Fellowship of the Ring", "The Two Towers", "Return of the King", "Miss Peregrine's Home for Peculiar Children", "Black Panther", "Captain Marvel", "Alice in Wonderland"];

$("button").on("click", function () {

    var movie = $(this).attr("data-movie");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "4WkQFmyOYQVAFTiG3oCIImwuhOKOHRVa";

        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function (response) {
            console.log(queryURL);

            console.log(response);
            var results = response.data;

            for (var i = 0; i < results.length; i++) }