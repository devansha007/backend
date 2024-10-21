const fs = require("fs")
const http = require("http")
const PORT = 3000;

const home = fs.readFileSync('./index.html')


const app = http.createServer((req,res)=>{
    res.end(home)
})
app.listen(PORT,()=>{
    console.log(`the app is being listened on port ${PORT}`)
})