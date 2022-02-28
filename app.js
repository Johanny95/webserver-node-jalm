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

app.get('/', (req, res) => {
  res.render('home', {
      nombre: 'Johanny Lopez',
      titulo : 'Curso de node'
  } );
});

app.get('/hola-mundo', (req, res) => {
  res.send('Hello World, en su respectiva ruta')
});

app.get('/generic',  (req, res) => {
  res.render('generic', {
      nombre: 'Johanny Lopez',
      titulo : 'Curso de node'
  } );
})

app.get('/elements',  (req, res) => {
 res.render('elements', {
      nombre: 'Johanny Lopez',
      titulo : 'Curso de node'
  } );
})

app.get('/*',  (req, res) => {
  res.sendFile(__dirname+'/public/404.html')
})

app.listen(port , () => {
    console.log(`Listening at http://localhost:${port}`);
});