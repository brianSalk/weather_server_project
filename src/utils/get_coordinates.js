const request = require('request')

 const get = (place, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=pk.eyJ1IjoiYnJpZ3V5c2tpaGkiLCJhIjoiY2s5ZDl4aGxpMDFraTNsczZ4YzQ5eG8zdiJ9.45h4xTmJ0SX-ehqiMZjD2g`
    request({url, json: true}, (error, response) => {
        if (error) {
            callback('make sure you are connected to the internet')
        } else if (response.body.features.length === 0) {
            callback('invalid address')
        } else {
            callback(undefined, {
                longitude: response.body.features[0].center[0],
                latitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
 }

 module.exports = get