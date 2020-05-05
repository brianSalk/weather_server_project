const request = require('request')

const get = (lat, lon, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=a2301bb87055034655ce9df687d9823e&query=${lat},${lon}&units=f`
    request({url, json: true}, (error, response) => {
        if (error) {
            callback('make sure you are connected to your location services')
        } else if (response.body.error) {
            callback('invalid coordinates')
        } else {
            callback(undefined, {
                temperature: response.body.current.temperature,
                description: response.body.current.weather_descriptions[0],
                observation_time: response.body.current.observation_time

            })
        }
    })
}

module.exports = get