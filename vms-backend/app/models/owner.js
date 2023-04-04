const fs = require('fs')
const con = require('../config/db.config')


// const display = () => {

//     con.query('SELECT * FROM owner_data', function(err, result) {
//         console.log(result)
//         return result;
//     })
// }

const displayOwner = (type, value) => {
    //user can also see the vehicles own by that owner
    // ownerId = null
    if(type === 'vehicle_no'){
        sql = ' SELECT vehicle_owner_id FROM vehicle_data WHERE vehicle_number = ?'
        con.query(sql,[value], (err, result) => {
            if(err) throw err;
            console.log(result)
            value = result[0].vehicle_owner_id
            // console.log(this.value)
            con.query('SELECT * FROM owner_data WHERE owner_id = ?',[value], (err,result) => {
                console.log(result)
            })
        })
    }
    else{
        sql = 'SELECT * FROM owner_data WHERE ' + type + ' = ?',
        con.query(sql, [value], (err,result) => {
            console.log(result);
        })
    }
}

const addOwner = (values) => {
    sql = 'INSERT INTO owner_data(owner_id, block_no, number_of_vehicle, owner_name, contact_no) VALUES ?',
    con.query(sql, [values], (err,result) => {
        console.log(result);
    })
    // vehicle.addVehicle([[15,'bike',7,'c1']])
}

const updateOwner = (values) => {
    //pending
    sql = `UPDATE owner_data SET block_no = ${values[0][1]} 
        , number_of_vehicle = ${values[0][2]} 
        , owner_name = '${values[0][3]}' 
        , contact_no = '${values[0][4]}' 
        WHERE owner_id = ?`
    console.log(sql)
    con.query(sql,[values[0][0]],(err,result) => {
        console.log(result)
    }) 
}


const deleteOwner = (ownerId) => {
    //remove all vehicle's of that owner as well from vehicle
    sql = 'DELETE FROM vehicle_data WHERE vehicle_owner_id = ?',
    con.query(sql,[ownerId], (err,result) => {
        console.log(result);
    })
    sql = 'DELETE FROM owner_data WHERE owner_id = ?',
    con.query(sql,[ownerId], (err,result) => {
        console.log(result);
    })
}


module.exports = {
    // display:display,
    displayOwner:displayOwner,
    addOwner: addOwner,
    updateOwner:updateOwner,
    deleteOwner:deleteOwner
}
