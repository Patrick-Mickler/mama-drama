const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let anime = {
    'onepiece': {
        'title': 'Onepiece',
        'rating':'10/10',
        'length':'Not long enough',
      
    }

}
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')

})
app.get('/api',(req,res)=>{
    res.json(anime)

})

app.listen(PORT,()=>{
    console.log(`Im running on port ${PORT}`)
})