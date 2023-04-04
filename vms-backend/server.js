const express = require('express')
const con  = require('./app/config/db.config')
const owner = require('./app/models/owner')
const vehicle = require('./app/models/vehicle')

const app = express()
const PORT =  process.env.PORT || 8001

app.get('', (req,res) => {
    // owner.displayOwner(1);
    // // vehicle.displayVehicle(1);

    // vehicle.addVehicle([[15,'bike',7,'c1']])
    // owner.addOwner([[7,203,1,'g','12345']])
    // owner.deleteOwner(7)
    // vehicle.deleteVehicle(15)
    res.send('done');
})

app.get('/search-by-vehicle-no', (req,res) => {

    owner.displayOwner('vehicle_no','a1')
})

app.get('/search-by-owner-id', (req,res) => {

    owner.displayOwner('owner_id',1);
})
app.get('/search-by-owner-name', (req,res) => {

    owner.displayOwner('owner_name','a');
})

app.get('/add-owner', (req,res) => {

    owner.addOwner([[7,203,1,'g','12345']])
})
app.get('/update-owner', (req,res) => {

    owner.updateOwner([[1, 101, 3, 'hk', '12345']])
})
app.get('/add-vehicle', (req,res) => {

    vehicle.addVehicle([[15,'bike',7,'c1']])
})
app.get('/update-vehicle', (req,res) => {

    vehicle.updateVehicle([[1,'bike',1,'a1']])
})

app.listen(PORT, () => {
    console.log('App is running on '+ PORT);
})