// My registerd application name: nytimes-thumbnails

// The NY Times API request is structured like this: http://api.nytimes.com/svc/news/{version}/content/{source}/{section}[/time-period][.response-format]?api-key={your-API-key}

var nytimesBaseURI = "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?";
var appKey = "9d1a3ce50892530fe2b12b67ba93be86:17:72349747";






var $tileContainer = $('#tile-container');
var $appendMe = ('<div class="tile">appended</div>');




// Get data from JSON file and put into javascript object
$.getJSON('http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&api-key=9d1a3ce50892530fe2b12b67ba93be86:17:72349747', function (data){	
	console.log(data);
	console.log(data.response);
	console.log(data.response.docs);
	console.log(data.response.docs[0]);			
	console.log(data.response.docs[0].multimedia[0].url);			
	
	
	$.each(data.response.docs, function(i, item){
		var imageURL = 'http://nytimes.com/' + data.response.docs[i].multimedia[0].url;
		$tileContainer.append('<img src="' + imageURL + '"></img');
	});
		
		
		
		
	
/*
	for (var i=0; i<data.results.length; i++){	
		
		var currentThumbnail = data.results[i].thumbnail_standard;
		var backgroundImageURL = 'url(' + currentThumbnail + ')';
		
		// Only show articles that have images
		if (currentThumbnail != "") {
			$tileContainer.append('<div class="tile" id="tile-' + i + '"></div');
			$('#tile-' + i).css("background-image", backgroundImageURL);		 
		};	
			
	};
*/
	
/*
	$.each(data.results, function(i, item){			
		var backgroundImageURL = 'url(' + item.thumbnail_standard + ')';
		// Only show articles that have images
		if (item.thumbnail_standard != "") {
			$tileContainer.append('<div class="tile" id="tile-' + i + '"></div');
			$('#tile-' + i).css("background-image", backgroundImageURL);		 
		};	
		
	});	
*/

		
	
}); // end getJSON

 		

// Put some text from the JSON into a div. Display on screen.