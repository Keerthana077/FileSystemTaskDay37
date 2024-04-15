const fs = require('fs')
const path =  require('path')

const express = require ('express')
const app = express()


// port - 8000
const port = 8000
app.use(express.json())


// creates a file 
app.get('/createFile',(req,res)=>{
    const curr_dateTime = new Date().toISOString().replace(/:/g,'-')
    console.log(curr_dateTime)

    const filePath = path.join('TextFiles',`${curr_dateTime}.txt`)
    const data  = new Date().getTime()
    // console.log(data)
    fs.writeFileSync(filePath,` ${data}`)
    const file = fs.readFileSync(filePath)
    res.send(file)
})

// to get the list of files 
app.get('/services',(req,res)=>{
    const folder = 'TextFiles'
    console.log(folder)
    const files = []
    fs.readdirSync(folder).forEach(file => {
        // res.json(file);
        files.push(file)
      });

      res.json(files)
})


app.listen(port,()=>{
    console.log("server started at ",port)
})