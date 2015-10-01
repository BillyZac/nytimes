// My registerd application name: nytimes-thumbnails

// The NY Times API request is structured like this: http://api.nytimes.com/svc/news/{version}/content/{source}/{section}[/time-period][.response-format]?api-key={your-API-key}

// Global layout variables
var $tileContainer = $('#tile-container');
var tileNum = 0; // For appending to the tile ID

// Global API settings
var nytimesBaseURI = "http://api.nytimes.com/svc/search/v2/articlesearch.response-format?";
var appKey = "9d1a3ce50892530fe2b12b67ba93be86:17:72349747";


for (var pageNum=0; pageNum < 100; pageNum++){
		var dataURI = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?callback=svc_search_v2_articlesearch&page=' + pageNum + '&api-key=9d1a3ce50892530fe2b12b67ba93be86:17:72349747';
	
	$.getJSON(dataURI, function (data){			
		
		$.each(data.response.docs, function(i, item){
			
			console.log(pageNum + '   ' + tileNum);

			if (item.multimedia[0] != undefined){
/* 				console.log(pageNum + '   ' + tileNum + '   ' + item.multimedia[0]); */
				var imageURL = 'http://nytimes.com/' + item.multimedia[0].url;
				var backgroundImageURL = 'url(' + imageURL + ')';
				$tileContainer.append('<div class="tile" id="tile-' + i + '"></div');
				$('#tile-' + tileNum).css("background-image", backgroundImageURL);
				tileNum++;
			} // end if

		}); // end each
	}); // end getJSON
	
}; // end pageNum for loop
