const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.end('Hello world!')
})
app.listen(3000, () => {
    console.log('Sever started on port 3000')
})