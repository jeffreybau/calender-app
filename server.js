require('./server/config/config.js')
const express = require('express')
const app = express()
const port = 3000
let bodyParser = require('body-aparser').json();
let userRoutes = require('./server/routes/user.routes.js')

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser);

app.use('/users', userRoutes)

app.get('*',(req,res) =>{
res.sendFile('dist/index.html', {root: __dirname + "/"});
});

app.listen(port, () => console.log('Calendar app is listening on port ${port}!'))