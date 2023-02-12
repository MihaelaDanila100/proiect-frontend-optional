const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(bodyparser.json());

// database connection
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database: 'salon',
    port: 3306
});

module.exports = db.promise();


//check database connection
db.connect(err => {
    
    if(err){
        console.log(err, 'err');
    }

    console.log('database connected...');
});

// get clienti

app.get('/clients', (req,res) => {
    
    let qr = `select * from clients`;

    db.query(qr,(err, result) => {
        if(err){
            console.log(err, 'errs');
        }

        if(result.length > 0){
            res.send({
                message: 'all clients',
                data: result
            });
        }
    });
});

app.get('/clients/:id',(req,res) => {
    let gID = req.params.id;

    let qr = `select * from clients where id_client = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"err");
        }

        if(result.length > 0){
            res.send({
                message: 'get single client',
                data:result
            });
        }else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

app.get('/clients/:id/appointments',(req,res) => {
    let gID = req.params.id;

    let qr = `select * from appointments where id_client = ${gID}`;

    db.query(qr, (err,result) => {
        if(err){
            console.log(err,"err");
        }

        if(result.length > 0){
            res.send({
                message: 'appointments',
                data: result
            });
        }else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

app.get('/clients/:id/appointment_today', (req,res) => {
    let gID = req.params.id;

    let today = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate()];

    let qr = `select id_appointment from appointments where id_client = ${gID} and DAY(date) = '${today[2]}' and MONTH(date) = '${today[1]}' and YEAR(date) = '${today[0]}'`;

    db.query(qr, (err,result) => {
        if(err){
            console.log(err,"err");
        }

        if(result.length > 0){
            res.send({
                message: 'appointments',
                data: result
            });
        }else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

app.put(`/clients/:id/appointment`, (req,res) => {
    let id_appointment = req.params.id;
    let title = req.body.title;
    let date = req.body.date;
    let description = req.body.description;

    let qr = `UPDATE appointments SET title = '${title}', date = '${date}', description = '${description}' WHERE id_appointment = ${id_appointment}`;
    
    db.query(qr,(err,result) => {

        if(err){
            console.log(err,'err');
        }else{
            console.log('data sent');
        }
    });
});

app.post(`/clients/:id/appointment`, (req,res) => {
    let idPacient = req.params.id;
    let title = req.body.title;
    let date = req.body.date;
    let description = req.body.description;
    let qr = `INSERT INTO appointments(title, date, description, id_client) values( '${title}', '${date}', '${description}', ${idPacient})`;
    
    db.query(qr,(err,result) => {

        if(err){
            console.log(err,'err');
        }else{
            console.log('data sent');
        }
    });
});


app.get('/:id/clients_cosmetician',(req,res) => {
    let gID = req.params.id;
    let qr = `select * from clients where id_cosmetician = ${gID}`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"err");
        }

        if(result.length > 0){
            res.send({
                message: 'get clients from a cosmetician',
                data:result
            });
        }else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

app.get('/cosmetician/:name', (req,res) => {
    let numeMedic = req.params.name;

    let qr = `select id_cosmetician from cosmeticians where firstName = '${numeMedic}'`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"err");
        }

        if(result.length > 0){
            res.send({
                message: 'get clients from a cosmetician',
                data:result
            });
        }else{
            res.send({
                message: 'data not found'
            });
        }
    });
});


app.get('/cosmetician_username/:username', (req,res) => {
    let numeMedic = req.params.username;

    let qr = `select id_cosmetician from cosmeticians where username = '${numeMedic}'`;

    db.query(qr,(err,result)=>{
        if(err){
            console.log(err,"err");
        }

        if(result.length > 0){
            res.send({
                message: 'get cosmetician',
                data:result
            });
        }else{
            res.send({
                message: 'data not found'
            });
        }
    });
});

app.post(`/login/:table`, (req,res) => {
    let table = req.params.table;
    let qr = `SELECT * FROM ${table} WHERE username = '${req.body.username}'`;
    connection.query(qr, (err, result) => {
        if(err) {
            response.status(500).json({message: err});
            throw Error(err);
        }
        if(result.length > 0) {
            let myRes = result[0]
            bcrypt.compare(req.body.password, myRes.password, function (err, isMatch) {
                if(err) {
                    res.status(500).json({message: "Something went wrong"});
                    throw Error(err);
                }
                if (isMatch){
                    if(table === 'clients') res.send({id: res.id_client, type: 'client'});
                    else res.send({id: res.id_cosmetician, type: 'cosmetician'});
                    return;
                } 
            });
        }
    });
    return res.status(404).json({message:"The user doesn't exist!"});
});

app.post(`/signup/clients`, (req, res) => {

    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err) {
            res.status(500).json({message: "Something went wrong"});
            throw Error(err);
        }
        let qr = `INSERT INTO clients (firstName, lastName, email, phone, username, password, id_cosmetician) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}', '${req.body.phone}', '${req.body.username}', '${hash}', '${req.body.cosmetician}')`;
        connection.query(qr, (err, result) => {
            if(err) {
                res.status(500).json({message: err});
                throw Error(err);
            }
            res.status(200).json({userId: result.insertId});
            return;
        });
    });

});

app.get('/cosmeticians', (req,res) => {
    
    let qr = `select * from cosmeticians`;

    db.query(qr,(err, result) => {
        if(err){
            console.log(err, 'errs');
        }

        if(result.length > 0){
            res.send({
                message: 'all cosmeticians',
                data: result
            });
        }
    });
});


app.listen(8086, () => {
    console.log("server running...");
});