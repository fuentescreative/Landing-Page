$(document).ready(function () {
	$(document).on('click', '.ThemeableMenu2-navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});
	$('#boton_megusta1').checkboxradio({ icon: false });
	$('#ThemeableButton1').checkboxradio({ icon: false });
	$('img[data-src]').lazyload();
});
