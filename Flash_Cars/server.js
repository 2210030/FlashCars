const express = require('express')
const app = express()
const router = express.Router();
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json())

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'client/build/index.html'));

    })

}

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/cars/locations', async (req, res) => {
    try {
      const cars = await Car.find({ available: true });
  
      // Extract the location field from each car object and remove duplicates
      const locations = [...new Set(cars.map(car => car.location))];
  
      // Create a new Google Maps client
      const googleMapsClient = require('@google/maps').createClient({
        key: process.env.GOOGLE_MAPS_API_KEY,
      });
  
      // Geocode each location and add it to a list of markers
      const markers = await Promise.all(locations.map(async location => {
        const response = await googleMapsClient.geocode({ address: location }).asPromise();
        const { lat, lng } = response.json.results[0].geometry.location;
        return { location, lat, lng };
      }));
  
      res.json(markers);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))