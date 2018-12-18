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

    $.ajax({
        url: requestURL,
        method: 'GET',
    }).done(function (response) {
        console.log(response);
        articleRender();
    }).fail(function (err) {
        throw err;
    });
}

function articleRender() {

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