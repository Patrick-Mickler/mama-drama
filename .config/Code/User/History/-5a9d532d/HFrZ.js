const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.use(express.urlencoded({extended:true}))

app.listen(3000,function(){
console.log('listening on 3000')

})
app.get('/', (req,res)=>{
    res.sendFile(__dirname +'/index.html')
})
app.post('/quotes',(req,res)=>{
    console.log(req.body)
})
MongoClient.connect('mongodb+srv://pmickler09:<haleigh>@cluster0.afr6f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log('connected to database')
    
