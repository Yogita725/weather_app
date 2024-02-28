const request = require('request')
const geocode = require('./geocode')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=76b978253641955a01e0a022a68af2c5&query='+lat+','+long+'&units=m'

    request({url, json:true},(error, {body}) => {
        if(error){
            callback('Unable to connect to weather service', undefined)
        }else if(body.error){
            callback(body.error.info, undefined)
        }else{
            const temp = body.current.temperature
            const feels = body.current.feelslike
            const desc = body.current.weather_descriptions[0]
            const data = desc + '. It is currently '+temp+ ' degrees out. It feels like '+feels+ ' degrees out'
            callback(undefined, data)
        }
            
    })
}

module.exports = forecast