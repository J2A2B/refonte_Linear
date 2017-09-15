'use strict';

const Schema = require('mongoose').Schema;

const epSchema = new Schema({
  nameEp: {
    type: String
    // unique: true,
    // required: true 
  }
  // nameArtist:{
  // 	type: String,
  // 	unique: true,
  // 	required: true
  // },
  // catVynil:{
  //   type: String,
  //   lowercase: true,
  //   required: true
  // },
  // distrib:{
  //   type: String,
  //   lowercase: true,
  //   required: true
  // },
  // mastering:{
  //   type: String,
  //   lowercase: true,
  //   required: true
  // },
  // press:{
  //   type: String,
  //   lowercase: true,
  //   required:true
  // },
  // conception:{
  //   type: String,
  //   lowercase: true,
  //   required:true
  // },
  // artwork:{
  //   type: String,
  //   lowercase: true,
  //   required:true
  // },
  // date:{
  //   type: String,
  //   lowercase: true,
  //   required:true
  // },
  // description:{
  //   type: String,
  //   lowercase: true,
  //   required:true
  // },
  // photos: [
  //   {
  //     photo1:{
  //       type: String
  //     },
  //     photo2:{
  //       type:String
  //     },
  //     photo3:{
  //       type:String
  //     },
  //     photo4:{
  //       type:String
  //     },
  //     photo5:{
  //       type:String
  //     },
  //     photo6:{
  //       type:String
  //     }
  //   }
  // ]
});

module.exports =  epSchema;