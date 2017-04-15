const request = require('request');

var checkWeather = (longitude, latitude, callback) => {
	
	request({
		url: `https://api.darksky.net/forecast/68c9a79aea8b745bcea4bc46d1e3e020/${latitude},${longitude}`,
		json: true
	}, (error, response, body) => {
		if (!error && response.statusCode === 200){
			callback(undefined, {
				temperature: body.currently.temperature,
				apparentTemperature: body.currently.apparentTemperature
			})
		} else {
			callback('Unable to connect to forecast server')
		}
	})
}

module.exports = {
	checkWeather
}