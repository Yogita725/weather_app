const request = require('request')

//const url = 'http://api.weatherstack.com/current?access_key=65340384fd3768d5ae6cab610e94cd4c&query=22.7597,75.8713'

const url = 'http://api.weatherstack.com/current?access_key=65340384fd3768d5ae6cab610e94cd4c&query=22.7594,75.8099'
request({url:url}, (error, resp) => {
    console.log(resp)
})


