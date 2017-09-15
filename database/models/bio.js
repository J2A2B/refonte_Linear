'use strict';

const Schema = require('mongoose').Schema;

const bioSchema = new Schema({
  titre: {
    type: String,
    unique: true,
    required: true 
  },
  descriptionFr:{
  	type: String,
  	unique: true,
  	required: true
  },
  descriptionAng:{
    type: String,
    lowercase: true,
    required: true
  }
});

module.exports =  bioSchema;