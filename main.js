const express = require('express')
const router = require('./routs/routs')


const PORT = 3000
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(router)



function runServer() {
    try {
        app.listen(PORT, ()=> {
        console.log(`Listening port ${PORT}...........`)
})
    } catch (e) {
        console.log(e)
    }
}

runServer()