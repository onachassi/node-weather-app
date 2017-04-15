const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather.js')

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage){
		console.log(errorMessage)
	} else {
	console.log(`Fetching weather for: ${results.address}`)	
	weather.checkWeather(results.longitude, results.latitude, (errorMessage, weatherResults) => {
	  if (errorMessage){
	  	console.log(errorMessage)
	  } else {
	  	console.log(`It's currently ${weatherResults.temperature}, and feels like ${weatherResults.apparentTemperature}`)
	  }
	})
		
		}
})


// 68c9a79aea8b745bcea4bc46d1e3e020
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]