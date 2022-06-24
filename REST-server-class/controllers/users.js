const { response } = require('express');

const userGet = (req, res = response) => {
	const { name, page = 1, apikey, limit = 10 } = req.query;
	res.status(200).json({
		msg: 'GET API - Controller',
		query,
	});
};

const userPut = (req, res = response) => {
	res.status(201).json({
		msg: 'PUT API - Controller',
	});
};

const userPost = (req, res = response) => {
	const { name, age } = req.body;
	console.log(name, age);

	res.status(201).json({
		msg: 'POST API - Controller',
	});
};

const userDelete = (req, res = response) => {
	res.status(200).json({
		msg: 'DELETE API - Controller',
	});
};

module.exports = {
	userGet,
	userPut,
	userPost,
	userDelete,
};
