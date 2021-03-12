const router = require('express').Router()

const bcrypt = require('bcryptjs')

const { v4: uuidv4 } = require('uuid')

const pool = require('../models/db')

router.post('/', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body
        const client = await pool.connect()
        let sql = "SELECT * FROM users_cred WHERE email=$1"
        const { rows } = await client.query(sql, [email])
        if(rows.length > 0){
            return res.status(401).json({ message: 'User Already Exists' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const id = uuidv4()
        sql = "INSERT INTO users_cred (id,first_name,last_name,email,password) VALUES ($1,$2,$3,$4,$5)"
        const { rowCount } = await client.query(sql, [id, firstName, lastName, email, hashedPassword])
        client.release()
        res.status(201).json({ message: `${rowCount} User Created` })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router