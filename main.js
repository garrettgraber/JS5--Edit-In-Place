

var visibilityToggle = function(elem) {
	var divId = $(elem).attr("id");
	var idTotal = "#" + divId;
	
	var textBox = $(idTotal + ' text');
	textBox.removeClass('editable-text');
	textBox.addClass('box-zero');
	textBox.hide();
	var inputBox = $(idTotal + ' textarea');
	inputBox.removeClass('box-zero');
	inputBox.addClass('editable-text');
}

window.visibilityToggle = visibilityToggle;

//$('.box-zero').on('click', )