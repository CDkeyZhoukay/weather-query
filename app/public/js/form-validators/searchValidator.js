
function SearchValidator()
{
// bind a simple alert window to this controller to display any errors //
	this.loginErrors = $('.modal-alert');
	
	this.showLoginError = function(t, m)
	{
		$('.modal-alert .modal-header h4').text(t);
		$('.modal-alert .modal-body p').html(m);
		this.loginErrors.modal('show');
	}
}

SearchValidator.prototype.validateForm = function()
{	
	var cityName = $('#city-tf').val();
	var searchButton = $('#btn-search').data('clicked');

	if (cityName.trim() == '' && searchButton == true){
		this.showLoginError('ERROR', 'Please enter a valid city name');
		return false;
	}	else{
		return true;
	}		

}
