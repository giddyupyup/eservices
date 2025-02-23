const express = require( 'express' );
const logger = require( 'morgan' );
const cors = require( 'cors' );

const routes = require( './routes' );

const app = express();

app.use( logger( 'dev' ) );
app.use( express.urlencoded( { extended: false } ) );
app.use( express.json() );
app.use( cors() );


app.use( '/api', routes );

module.exports = app;