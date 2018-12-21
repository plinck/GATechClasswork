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

    if (startYear.length > 3) {
        startYear = startYear.slice(0, 4); // make sure only 4 digits
    } else {
        if (startYear.length < 3)
            startYear = "";
    }
    if (endYear.length > 3) {
        endYear = endYear.slice(0, 4); // make sure only 4 digits
    } else {
        if (endYear.length < 3)
            endYear = "";
    }

    // retrict return content to stuff we want to keep it as small as possible
    // query patramer 'fl' - command delimited list

    requestURL += '?' + $.param({
        'api-key': APIKEY,
        'q': searchTerm,
        'begin_date': `${startYear}0101`,
        'end_date': `${endYear}1231`,
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
            articleRender(result.response.docs, nbrRecords);
        },
        error: function (err) {
            console.log('error:' + err);
            errorRender(err);
        }
    });
}

// Display articles retrieved
function articleRender(articles, nbrRecords) {
    let articleNbr = 0;
    $(".articles").empty();
    $("#errorMessage").empty();

    console.log(articles);

    for (let articleNbr = 0; articleNbr < articles.length && articleNbr < nbrRecords; articleNbr += 1) {
        let newCard = cardRender(articles[articleNbr]);

        $(".articles").append(newCard);
    }
}

// ewjrhqwjor
function cardRender(article) {
    let cardDiv = "";
    let imageURL = "assets/images/defaultArticleImg.png";
    let caption = "Article Image";

    if (article.multimedia.length > 0) {
        // change to article image if there is one (in multimedia array)
        imageURL = `https://www.nytimes.com/${article.multimedia[0].url}`;
        if (article.multimedia[0].url != null) {
            caption = article.multimedia[0].url;
        }
    }

    cardDiv += `<a class="articleURL" href="${article.web_url}">`;
    cardDiv += `<div class="articleCard card">`;
    cardDiv += `<div class="cardHeader articleHeadline">${article.headline.main}</div>`;
    cardDiv += `<div class="cardBody">`;
    cardDiv += `<div class="articleSnippet">${article.snippet}</div>`;
    cardDiv += `<img class="articleImage" src="${imageURL}" alt="${caption}"></img>`;
    // cardDiv += `<div><a class="urlName articleURL" href="${article.web_url}">${article.headline.main}</a></div>`;
    cardDiv += `</div>`;
    cardDiv += `</div>`;
    cardDiv += ` </a>`;


    return cardDiv;
}

function errorRender(err) {
    console.log(`Error: ${err.statusText}`);
    alert(`Error: ${err.statusText}`);

    $("#errorMessage").html(`${err.statusText}`);
}

$(document).ready(function () {

    $("#submit").on("click", function () {
        // make it so it wont refresh the page when form submits
        // eliminating form wrapper tag also does this
        event.preventDefault();

        // This line grabs the input from the textbox
        let searchTerm = $("#searchTerm").val().trim();
        let nbrRecords = $("#nbrRecords").val().trim();
        let startYear = $("#startYear").val().trim();
        let endYear = $("#endYear").val().trim();

        searchArticles(searchTerm, nbrRecords, startYear, endYear);

    });

});