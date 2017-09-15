'use strict';

const Schema = require('mongoose').Schema;

const eventsSchema = new Schema({
  titre: {
    type: String,
    unique: true,
    required: true 
  },
  events: [
    {
      date:{
        type: String
      },
      titre:{
        type:String
      },
      link:{
        type:String
      }
    }
  ]
});

module.exports =  eventsSchema;