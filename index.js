const fs = require("fs")
const http = require("http")
const PORT = 3000;
const HOST_NAME = "localhost";
const home = fs.readFileSync('./index.html')


const app = http.createServer((req,res)=>{
    res.end(home)
})
app.listen(PORT,HOST_NAME,()=>{
    console.log(`the app is being listened on port ${PORT}`)
})