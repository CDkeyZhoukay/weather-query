const apiKey = 'e23f46c2f62ccec2fe3c8746af073d88';	
const request = require('request');

exports.searchOpenWeatherAPI = function(cityname, callback)
{
	let city = cityname;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`	
	request(url, function (err, response, body) {
	if(err){
		callback("openweather-API-not-works");
	} else {
		let weather = JSON.parse(body)
		if(weather.main == undefined){
			callback("weather-not-found");
			} else {
			callback(null, weather);
			}
		}
	});	
}