const express =  require('express');
const mainRoutes = require('./src/routes/main.routes.js');
const shopRoutes = require('./src/routes/shop.routes.js');
const admRoutes = require('./src/routes/admin.routes.js');
const authRoutes = require('./src/routes/auth.routes.js');
const app = express();

//middleware
app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/shop',shopRoutes);
app.use('/auth/admin', authRoutes);
app.use('/adm', admRoutes);


app.listen(4000, ()=> console.log('servidor corriendo en Http://localhost:4000'));