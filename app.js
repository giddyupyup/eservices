const express = require( 'express' );
const cookieParser = require( 'cookie-parser' );
const logger = require( 'morgan' );

const db = require( './models' );

const app = express();

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );

app.get('/', ( req, res ) => {
  res.json({ message: 'success' });
});

const go = async () => {
  try {
    const result = await db.sequelize.authenticate();
    console.log('Connection has been established successfully.', result );
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

go();

db.sequelize.sync().then( () => {
  app.listen( 3000 );
} );