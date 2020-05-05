const path = require('path')
const express = require('express')
const hbs = require('hbs')
const get_weather = require('./utils/get_weather')
const get_coordinates = require('./utils/get_coordinates')

// call express function to create new express application
const app = express()
const port = process.env.PORT || 3000
// query strings
const mapboxUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chicago.json?access_token=pk.eyJ1IjoiYnJpZ3V5c2tpaGkiLCJhIjoiY2s5ZDl4aGxpMDFraTNsczZ4YzQ5eG8zdiJ9.45h4xTmJ0SX-ehqiMZjD2g'

// set up paths
const publicDirPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Brian Salkas'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        his_name: 'Adem friedland',
        title: 'About',
        name: "Brian Salkas"
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Brian Salkas'
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.location) {
        return res.send({
            error: 'address required'
        })
    }
    get_coordinates(req.query.location, (error, data) => {
        if (error) {
            return res.send({
                error: error
            })
        }
        get_weather(data.latitude, data.longitude, (error2, data2) => {
            if (error2) {
                return res.send({
                    error: error2
                })
            }
            res.send({
                location: data.location,
                description: data2.description,
                temperature: data2.temperature,
                observation_time: data2.observation_time
            })
        })
    })

})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: 'you must provide a search term'
        })
    }
    res.send({
        prooducts: []
    })
})
// catch invlid paths

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Brian Salkas',
        error: 'HELP PAGE NOT FOUND'
    })
})



app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Brian Salkas',
        error: 'PAGE NOT FOUND'
        
    })
})



//app.use(express.static(path.join(publicDirPath, '/about.html')))

app.use(express.static(path.join(publicDirPath, '/weather.json')))



// second arg is optional, it is executed when you enter the 
// server at the given port.
app.listen(port, () => {
    console.log('server is running at port ' + port)
})
