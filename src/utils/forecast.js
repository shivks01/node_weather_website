const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a915608d584b5ef16dbe8c0ecab26cff&query=' + lat + ',' + long + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        }
        else if (body.error) {
            callback('Unable to find location.Please enter valid coordinates', undefined)
        }
        else {
            callback(undefined, 'The weather condition is : ' + body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + " degrees out. It feels like " + body.current.feelslike + ' degrees though. The humidity is ' + body.current.humidity + '%.')
        }
    })
}
module.exports = forecast
