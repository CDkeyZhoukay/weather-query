
function SearchController(){
	// bind event listeners to button clicks //
	var that = this;		
	var cityList = [];

// switch to user setting //
	$('#btn-account-setting').click(function(){
		window.location.href = '/home';
	});	
	
// handle user logout //
	$('#btn-logout-search').click(function(){ 
		that.attemptLogout(); 
	});

// button 'I'm feeling lucky' clicked //
	$('#btn-lucky').click(function(){
		$('#btn-search').data('clicked', false);

		if (localStorage.getItem("cityList") == null){
		   $.ajax({
			   async: false,
			   url: './data/city-list.json',
			   dataType: 'json',
			   success: function(data) {
			      $.each(data, function(key, val) {
			        cityList.push(val);    
			      });   	
			   }
			});  	

			localStorage.setItem("cityList", JSON.stringify(cityList));				
		}else{
			cityList = JSON.parse(localStorage.getItem("cityList"));
		}
		
	});

// button 'Search' clicked //
	$('#btn-search').click(function(){
		$(this).data('clicked', true);
	});	

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

	this.getRandomCity = function(){
		var that = this;
		var random = Math.floor(Math.random() * 3166);
		return cityList[random].name;
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

SearchController.prototype.SelectRandomCity = function()
{
	//Random select a city for 'I'm feeling lucky'

	var that = this;
	var randomCity = that.getRandomCity();

	//Check this city name have been searched before or not
	var cityName = JSON.parse(sessionStorage.getItem("cityName"));
	if (cityName != null){
		if (typeof(cityName) == 'string'){
			cityName = [JSON.parse(sessionStorage.getItem("cityName"))];	
		}

		while(cityName.indexOf(randomCity) > -1){
			randomCity = that.getRandomCity();				
		}

		//Add to the array and save to session storage
		cityName.push(randomCity);
		sessionStorage.setItem("cityName", JSON.stringify(cityName));		
	}else{
		//Save to session storage
		sessionStorage.setItem("cityName", JSON.stringify(randomCity));
	}
		
	return randomCity;
}
