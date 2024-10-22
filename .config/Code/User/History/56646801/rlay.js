const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
const serveStatic = require('serve-static');

app.use(cors())

app.use(serveStatic('public', {
    'setHeaders': (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'text/javascript');
        }
    }
}));

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

app.use(express.static('one-piece-app'));