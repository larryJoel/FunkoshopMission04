const express =  require('express');
const app = express();

//middleware
app.use(express.static('public'));


app.get('/home',(req, res)=> res.sendFile(__dirname + '/public/index.html'));
app.get('/ping', (req, res)=> res.send('pong'));

app.listen(4000, ()=> console.log('servidor corriendo en Http://localhost:4000'));