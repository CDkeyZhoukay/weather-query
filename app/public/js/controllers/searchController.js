
function SearchController()
{

// bind event listeners to button clicks //
	var that = this;		
	
// switch to user setting //
	$('#btn-account-setting').click(function(){
		window.location.href = '/home';});	
	
// handle user logout //
	$('#btn-logout-search').click(function(){ that.attemptLogout(); });
	
	this.attemptLogout = function()
	{
		var that = this;
		$.ajax({
			url: "/logout",
			type: "POST",
			data: {logout : true},
			success: function(data){
	 			that.showLockedAlert('You are now logged out.<br>Redirecting you back to the homepage.');
			},
			error: function(jqXHR){
				console.log(jqXHR.responseText+' :: '+jqXHR.statusText);
			}
		});
	}

	this.showLockedAlert = function(msg){
		$('.modal-alert').modal({ show : false, keyboard : false, backdrop : 'static' });
		$('.modal-alert .modal-header h4').text('Success!');
		$('.modal-alert .modal-body p').html(msg);
		$('.modal-alert').modal('show');
		$('.modal-alert button').click(function(){window.location.href = '/';})
		setTimeout(function(){window.location.href = '/';}, 3000);
	}		
}

SearchController.prototype.onSearchResult = function(i)
{
	$('.modal-alert').modal({ show : false, keyboard : true, backdrop : true });
	$('.modal-alert .modal-header h4').text('Success!');
	$('.modal-alert .modal-body p').html('It is ' + i.main.temp + ' degrees in ' + i.name);
	$('.modal-alert').modal('show');
	$('.modal-alert button').off('click');
}
