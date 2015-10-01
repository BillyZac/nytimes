var $tileContainer = $('#tile-container');
var $appendMe = ('<div class="tile">appended</div>');


/*
for (var i=1; (i < 9); i++){
	$tileContainer.append($appendMe);
};
*/

// Get data from JSON file and put into javascript object
$.getJSON('../test-data/nytimes.json', function (data){
	// code
}); // end getJSON


// Put some text from the JSON into a div. Display on screen.