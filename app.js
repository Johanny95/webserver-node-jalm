const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//handebarls
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


// Servir contendido estatico
app.use(express.static('public'));

// app.get('/', (req, res) => {
//   res.render('home', {
//       nombre: 'TeamPro',
//       titulo : 'NextLine'
//   } );
// });

// app.get('/generic',  (req, res) => {
//   res.render('generic', {
//       nombre: 'TeamPro',
//       titulo : 'NextLine'
//   } );
// })

// app.get('/elements',  (req, res) => {
//  res.render('elements', {
//       nombre: 'TeamPro',
//       titulo : 'NextLine'
//   } );
// })

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hello World, en su respectiva ruta')
// });

app.get('*',  (req, res) => {
  res.sendFile(__dirname+'/public/index.html')
})

app.listen(port , () => {
    console.log(`Listening at http://localhost:${port}`);
});