const express = require('express')
const app = express()
const PORT = 8001

app.get('/', (req, res) => {
    res.send({
        status: 200,
        message: 'Ok'
    })
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})