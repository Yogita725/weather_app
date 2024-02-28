const request = require('request')

const geocode = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=76b978253641955a01e0a022a68af2c5&query='+encodeURIComponent(address)

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services', undefined)
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            callback(undefined, {
                Latitude : body.location.lat,
                Longitude : body.location.lon,
                Place : body.location.name +', '+body.location.region +', ' +body.location.country
            })
        }
    })
}

module.exports = geocode