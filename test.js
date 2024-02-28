//const request = require('request')

//const weatherUrl = 'http://api.weatherstack.com/current?access_key=76b978253641955a01e0a022a68af2c5&query=Indore&units=f'
//const geoUrl = 'http://api.ipstack.com/134.201.250.155?access_key=2f96f90c2c188f960d86804bba770b30'

// request({ url:weatherUrl, json:true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         console.log(response.body.error.info)
//     }else{
        // const temp = response.body.current.temperature
        // const feels = response.body.current.feelslike
        // const desc = response.body.current.weather_descriptions[0]
        // console.log(desc + '. It is currently '+temp+ ' degrees out. It feels like '+feels+ ' degrees out')
//     }
// })

// request({url:geoUrl, json:true}, (error, response) => {
//     if(error){
//         console.log('Unable to connect to location services')
//     }else if(response.body.error){
//         console.log(response.body.error.info)
//     }else{
//         const lat = response.body.latitude
//         const long = response.body.longitude
//         const place = response.body.city + ', '+response.body.country_name
//         console.log(place + '\nLatitude: '+lat + '\nLongitude: '+long)
//     }
// })
