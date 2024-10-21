const fs = require("fs")
const http = require("http")
const PORT = 3000;

const home = fs.readFileSync('./index.html')


const app = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico'){ return res.end()}
    if(req.url === '/'){ return res.end(home)}
    if(req.url === '/contact'){ return res.end('<h1>hii this is contact page</h1>')}
    if(req.url === '/about'){ return res.end('<h1>hii this is about page</h1>')}
    
    console.log(req.url)
})
app.listen(PORT,()=>{
    console.log(`the app is being listened on port ${PORT}`)
})