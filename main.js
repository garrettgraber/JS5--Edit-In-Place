


$('.editable-text').on('click', function() {
	var editableElement = $(this);
	var parentElement = editableElement.parent();
	var hiddenElement = parentElement.find('.box-zero');

	console.log('Visible name: ' + editableElement.attr('class'));
	console.log('Hidden Element: ' + hiddenElement.attr('class'));
	console.log('Parent Element: ' + parentElement.attr('id'));


	editableElement.removeClass('editable-text');
	editableElement.addClass('box-zero');
	editableElement.hide();
	hiddenElement.removeClass('box-zero');
	hiddenElement.addClass('editable-text');

	var editableValue = editableElement.text();
	hiddenElement.html(editableValue); 
	});



