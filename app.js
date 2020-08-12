const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );
const logger = require( 'morgan' );

const db = require( './db' );

const app = express();

const port = process.env.PORT || 3000;

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );

app.get('/', ( req, res ) => {
  res.json({ message: 'success' });
});

db().then( () => {
  app.listen( port, () => console.log(`Express started on http://127.0.0.1:${port}\npress Ctrl+C to terminate.`) );
} );