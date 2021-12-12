const express = require('express')
const fs = require('fs')

const router = express.Router()

router.get('/', (req, res) => {
    
    res.sendFile(process.cwd() + '/index.html')
    
})

let writer = fs.createWriteStream('data.txt', {flags: 'a'})
router.post('/', (req, res) => {
    console.log(req.body)
    let data = req.body
    let jsonData = JSON.stringify(data)
    writer.write(`${jsonData} \n`)
    //fs.writeFile('data.txt', `${jsonData}`, function(error, data){})
    res.end(`Data successfully saved to "data.txt"
    ${req.body.name} ${req.body.surname}, ${req.body.age} year, with email ${req.body.email}
    Thank you!`)
})





module.exports = router;