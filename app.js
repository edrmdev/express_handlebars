require('dotenv').config();
const express = require( 'express' );
const hbs = require( 'hbs' );
const app = express();
const port = process.env.PORT;

//TODO require hbs
app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials/', ( err ) => {});
//servir contenido estatico
//middleware se ejecuta con anterioridad
app.use( express.static( 'public' ) );

app.get( '/', (req, res) => {
    res.render('home', {
        nombre: 'Edgar Ramirez',
        titulo: 'Curso de Node'
    }); //para renderizar la vista de handlebars
});

app.get( '/generic', (req, res) => {

    //res.sendFile( __dirname + '/views/generic.html' ); //para render normal de html
    res.render( 'generic', {
        nombre: 'Edgar Ramirez',
        titulo: 'Curso de Node'
    })
})

app.get( '/elements', (req, res) => {
    //res.sendFile( __dirname + '/public/elements.html');
    res.render( 'elements', {
        nombre: 'Edgar Ramirez',
        titulo: 'Curso de Node'
    })
});

app.get( '*', (req, res) => {
    
    res.statusCode = 404;
    res.sendFile( __dirname + '/public/404.html');
})

app.listen( port, () => {
    
    console.log( `listening on http://localhost:${port}` );
} );
