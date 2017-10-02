
$(document).ready(function(){

	var sc = new SearchController();
	var sv = new SearchValidator();

// main search form //
	$('#search').ajaxForm({
		beforeSubmit : function(formData, jqForm, options){
			if (sv.validateForm() == false){				
				return false;
			} 	else{	
				var searchButton = $('#btn-search').data('clicked');
				if (searchButton == false){
					formData[0].value = (sc.SelectRandomCity());
				}
				return true;
			}
		},
		success	: function(responseText, status, xhr, $form){
			if (status == 'success'){ 
				sc.onSearchResult(responseText);
			}
		},
		error : function(e){
			sv.showLoginError('Search Failure', 'Please check the city name');
		}
	}); 
	$('#city-tf').focus();

});
