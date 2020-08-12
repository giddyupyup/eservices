'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const { dbconfig: config } = require('../config');
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config.options);
}

const getAllFiles = ( dirPath, arrFiles ) => {
  const files = fs.readdirSync( dirPath );
  let arrayFiles = arrFiles || [];

  files.forEach( file => {
    if ( fs.statSync( dirPath + '/' + file ).isDirectory() ) {
      arrayFiles = getAllFiles( dirPath + '/' + file, arrayFiles );
    } else {
      const filePath = path.join( dirPath, file );
      arrayFiles.push( { file, path: filePath } );
    }
  } );

  return arrayFiles;
}

getAllFiles( __dirname )
  .filter( ({ file }) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach( ({ path }) => {
    const model = require(path)(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
