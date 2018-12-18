/* **********************************************************************************
 * Main Program - 
 ********************************************************************************** */
// Use strict to keep things sane and not crapp code
"use strict";
/*global $:false, jQuery:false */
/*global document:false */
/*global console:false */
/*global alert:false */

// API Key for NYT article search
const APIKEY = "7ea61b540c7c42c0beeec1cea9ccb3d5";

function searchArticles(searchTerm, nbrRecords, startYear, endYear) {
    var requestURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    // Sample
    // var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    // url += '?' + $.param({
    //   'api-key': "7ea61b540c7c42c0beeec1cea9ccb3d5",
    //   'q': "Stocks",
    //   'begin_date': "20181218",
    //   'end_date': "20181218",
    //   'page': 0
    // });


    // check begin date and format
    // check end date and format
    // convert nbr records to pages - value of a page is a set of 10 results
    // to return records 0-9 set page=0, to return records 10-19 set page=1
    let page = Math.floor(nbrRecords / 10);

    // retrict return content to stuff we want to keep it as small as possible
    // query patramer 'fl' - command delimited list

    requestURL += '?' + $.param({
        'api-key': APIKEY,
        'q': searchTerm,
        'begin_date': startYear,
        'end_date': endYear,
        'page': page
    });
    console.log(`Request: ${requestURL}`);

    // I had to use the JSONP method since the one used in class caused CORS issues
    $.ajax({
        url: requestURL,
        method: 'GET',
        dataType: 'JSON',
        success: function (result) {
            console.log(result);
            articleRender(result.response.docs);
        },
        error: function (err) {
            console.log('error:' + err);
            errorRender(err);
        }
    });
}

// Display articles retrieved
function articleRender(articles) {
    let articleNbr = 0;

    console.log(articles);

    $(".articleCard").attr("data-value", articleNbr);
    $(".articleCard").attr("data-key", articles[articleNbr]._id);
    $(".articleCard .articleHeadline").html(articles[articleNbr].headline.main);
    $(".articleCard .urlName").html(articles[articleNbr].headline.main);
    $(".articleCard .articleURL").attr("href", articles[articleNbr].web_url);
    $(".articleCard .articleSnippet").html(articles[articleNbr].snippet);

    // change to article image if there is one (in multimedia array)
    $(".articleCard .articleImage").attr("src", "assets/images/defaultArticleImg.png");

}

function errorRender(err) {
    console.log(`Error: ${err.statusText}`);
    alert(`Error: ${err.statusText}`);

    $("#errorMessage").html(`${err.statusText}`);
}

$(document).ready(function () {

    $("#submit").on("click", function () {
        // This line grabs the input from the textbox
        let searchTerm = $("#searchTerm").val().trim();
        let nbrRecords = $("#nbrRecords").val().trim();
        let startYear = $("#startYear").val().trim();
        let endYear = $("#endYear").val().trim();

        searchArticles(searchTerm, nbrRecords, startYear, endYear);

    });

});