function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
	
	if (!results) return null;
	if (!results[2]) return '';
	
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}		

function AddOnClickOnTableRow(div, evt, pageLocation, className)
{
	div.on(evt, 'tr', function () {
		window.location.replace(pageLocation + "?id=" + $(this).children(className).html());
	});	
}

function AddFilter(filter, className)
{
	filter.bind("keyup", function() {
		var text = $(this).val().toLowerCase();
		var items = $(className);

		//first, hide all:
		items.parent().hide();

		//show only those matching user input:
		items.filter(function () {
			return $(this).text().toLowerCase().indexOf(text) == 0;
		}).parent().show();		
	});
}