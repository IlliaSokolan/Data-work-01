import express from 'express'
import fs from 'fs'


const PORT = 3000
const app = express()

app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    
    res.sendFile(process.cwd() + '/index.html')
    
})

let writer = fs.createWriteStream('data.txt', {flags: 'a'})
app.post('/', (req, res) => {
    console.log(req.body)
    let data = req.body
    let jsonData = JSON.stringify(data)
    writer.write(`${jsonData} \n`)
    //fs.writeFile('data.txt', `${jsonData}`, function(error, data){})
    res.end('Data successfully saved to data.txt')
})


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