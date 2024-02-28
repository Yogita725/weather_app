const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]
if(!address){
    return console.log('Please provide a location')
}
else {
    geocode(address, (error, {Latitude, Longitude, Place} = {}) => {
        if(error){
            return console.log('Error : '+ error) //return statement stops the code here only
        }
        forecast(Latitude, Longitude, (error, forecastData) => {
            if(error){
                return console.log('Error : '+error)
            }
            console.log(Place)
            console.log(forecastData)
        })
    })
    
}







