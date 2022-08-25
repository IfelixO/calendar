const express = require('express');
const app = express();
const cors = require('cors')
const bp = require('body-parser')
const mysql = require("mysql2")
const bcrypt = require('bcrypt')

const saltRounds = 10

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "password",
    database: "calendar",
})

app.use(cors())
app.use(express.json())
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

// Create

app.post('/addition', (req, res) => {
    const {title} = req.body;
    const {description} = req.body;
    const {beginDate} = req.body;
    const {beginHour} = req.body;
    const {endDate} = req.body;
    const {endHour} = req.body;
    const {status} = req.body;
    const {user} = req.body;


    let SQL = "INSERT INTO tasks (title, description, beginDate, beginHour, endDate, endHour, status, user) VALUES (?,?,?,?,?,?,?,?)"

    db.query(SQL, [ title, description, beginDate, beginHour, endDate, endHour, status, user], (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({msg: 'sucess'})
        }
    })
})

// Read

app.get('/getTasks', (req, res) => {

    let SQL = "SELECT * from tasks"

    db.query(SQL, (err, result) => {
        if(err){
            console.log(err)
        } else {
            res.send(result)
        }
    })

})

// Update

app.post('/edit', (req, res) => {
    const {id} = req.body;
    const {description} = req.body;
    const {beginDate} = req.body;
    const {beginHour} = req.body;
    const {endDate} = req.body;
    const {endHour} = req.body;
    const {status} = req.body;

    let SQL = "UPDATE tasks SET description = ?, beginDate = ?, beginHour = ?, endDate = ?, endHour = ?, status = ? WHERE id = ? "

    db.query(SQL, [description, beginDate, beginHour, endDate, endHour, status, id],  (err, result) => {
        if (err) {
            console.log(err)
            res.send(err)
        } else {
            res.send({msg: 'sucess'})
        }
    })
})

// Delete

app.post('/deleteTask', (req, res) => {
    const {id} = req.body;

    let SQL = "DELETE FROM tasks WHERE id = ? "

    db.query(SQL, [id], (err, result) => {
        if (err) {
            res.send(err)
        } else {
            res.send({msg: 'sucess'})
        }
    })
})

app.post('/register', (req, res) => {
    const {login} = req.body;
    const {password} = req.body;

    let SQL1 = "SELECT * FROM users WHERE login = ?"

    db.query(SQL1, [login], (err, result) => {
        if(err) {
            res.send(err) 
        } else {
            if (result.length == 0) {
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    let SQL2 = "INSERT INTO users (login, password) VALUES ( ?, ? )"
                    db.query(SQL2, [login, hash], (err, result) => {
                    if (err) {
                        res.send(err) 
                    } else {
                        res.send({msg: 'sucess'})
                    }
                })
                })                
            } else {
                res.send({msg: 'User already registered'})
            }
        }
    } )

})

app.post('/login', (req, res) => {
    const {login} = req.body;
    const {password} = req.body;

    let SQL = "SELECT * FROM users WHERE login = ?"

    db.query(SQL, [login], (err, result) => {
        if(err) {
            res.send(err) 
        } else {
            if (result.length == 1) {
                bcrypt.compare(password, result[0].password, (err, result) => {
                    if (result) {
                    res.send({msg: 'sucess'})
                } else {
                    res.send({msg: 'wrong password'})
                }
                })
            } else {
                res.send({msg: 'User not found'})
            }
    }})
})

app.listen(5000, () => {
    console.log('Server rodando');
})