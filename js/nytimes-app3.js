$( document ).ready(function() {

var globalData;


// Style
$(".tile").hover(function() {
      $( this ).toggleClass( "active" )
    });
   
$( "div:even" ).css( "background-color", "#bbf" );    

// Global layout variables
var $tileContainer = $('#tile-container');
var tileNum = 0; // For appending to the tile ID

// Global API settings
// My registerd application name: nytimes-thumbnails
// The NY Times API request is structured like this: http://api.nytimes.com/svc/news/{version}/content/{source}/{section}[/time-period][.response-format]?api-key={your-API-key}
var nytimesBaseURI = "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?";
var appKey = "9d1a3ce50892530fe2b12b67ba93be86:17:72349747";


for (var pageNum = 0; pageNum<5; pageNum++) {
var dataURI = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&page=' + pageNum + '&api-key=9d1a3ce50892530fe2b12b67ba93be86:17:72349747';
	
$.getJSON(dataURI, function (data){
	globalData = data.response.docs;				
	$.each(data.response.docs, function(i, item){
		var article = item.lead_paragraph.substring(0, 30);

		// Create link tile to original article
		var linkHTML = '<a href="';
			linkHTML += item.web_url;
			linkHTML += '">';
		
		var innerHTML = '<div class="tile" id="tile-'; // Open the tile div
			innerHTML += i; // Give tile a numbered id
			innerHTML += '">'
			innerHTML += article;
			innerHTML += '</div>'; // Close the tile div
		$tileContainer.append( linkHTML + innerHTML + '</a>'); // Put the tile div on the page

		tileNum++;
	}); // end each
}); // end getJSON
}; //end pageNum for loop

}) // end document ready


	

