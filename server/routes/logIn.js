const router = require('express').Router()

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const pool = require('../models/db')

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const client = await pool.connect()
        let sql = "SELECT * FROM users_cred WHERE email=$1"
        const { rows } = await client.query(sql, [email])
        client.release()
        if(rows.length < 0){
            return res.status(404).json({  message: 'User Not Found' })
        }
        const user = rows[0]
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return res.status(401).json({ message: 'Password Is Not Correct' })
        }
        const token = jwt.sign(user, 'CODER')
        res.status(200).json({ token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

module.exports = router