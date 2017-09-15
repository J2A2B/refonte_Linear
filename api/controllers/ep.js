'use strict';
const mongoose = require('mongoose');
const epModel =  require('../../database').ep;

const epController = {
	find : (req, res) =>{
		epModel.find()
		.then(data =>{
			res.send(data);
		})
		.catch(err =>{
			res.send('Failed :::' + err);
		})
	},
	add :(req,res) =>{
		const newEp = new epModel(req.body);
		newEp.save()
		.then( data => {
			res.send(data);
		})
		.catch( err => {
			res.send(err);
		});
	}
}
module.exports = epController;