const fs = require('fs')
const con = require('../config/db.config');
const owner = require('./owner');

const displayVehicle = (ownerId) => {
    sql = 'SELECT * FROM vehicle_data WHERE vehicle_owner_id = ?',
    con.query(sql,[ownerId], (err,result) => {
        console.log(result);
    })
}

const addVehicle = (values) => {
    //don't forget to update no of vehicle in owner's data
    sql = 'INSERT INTO vehicle_data(vehicle_id, vehicle_type, vehicle_owner_id, vehicle_number) VALUES ?',
    con.query(sql,[values], (err,result) => {
        console.log('value inserted');

    })
        // console.log(this.value)
    // console.log(values)
    s1 = 'SELECT number_of_vehicle FROM owner_data WHERE owner_id = ?'
    con.query(s1, [values[0][2]], (err,result) => {
        value = result[0].number_of_vehicle
        console.log('got value'+value)
        updateNumberOfVehicle(values[0][2], value, true)
    })  
}

const updateVehicle = (values) => {
    sql = ` UPDATE vehicle_data SET vehicle_type =  '${values[0][1]}'
            , vehicle_owner_id = ${values[0][2]}
            , vehicle_number = '${values[0][3]}'
            WHERE vehicle_id = ${values[0][0]}`

    con.query(sql, (err, result) => {
        if(err) throw err
        console.log('updated')
        console.log(result)
    })
}

const deleteVehicle = (vehicleId) => {
    //don't forget to update no of vehicle in owner's data
    
    s1 = 'SELECT vehicle_owner_id FROM vehicle_data WHERE vehicle_id = ?'
     con.query(s1,[vehicleId], (err, result) => {
        if(err) throw err;
        console.log('got owner')
        ownerId = result[0].vehicle_owner_id
        // console.log(this.value)
            
        s2 = 'SELECT number_of_vehicle FROM owner_data WHERE owner_id = ?'
        con.query(s2, [ownerId], (err,result) => {
            if(err) throw err;
            value = result[0].number_of_vehicle
            console.log('got value from delete'+ value)
            updateNumberOfVehicle(ownerId, value,false)
        })  
    })

    sql = 'DELETE FROM vehicle_data WHERE vehicle_id = ?',
     con.query(sql,[vehicleId], (err,result) => {
        console.log('success');
    })

}

updateNumberOfVehicle = (ownerId, value, inc) => {
    value  = inc ? value + 1: value - 1
    sql = 'UPDATE owner_data SET number_of_vehicle = ? WHERE owner_id = ?'
    con.query(sql,[value,ownerId], (err, result) => {
        console.log('nov updated:' + value)
    })
}

module.exports = {
    displayVehicle:displayVehicle,
    addVehicle:addVehicle,
    updateVehicle:updateVehicle,
    deleteVehicle:deleteVehicle
}