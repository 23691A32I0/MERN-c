const express=require('express');
const { getController } = require('../controllers/egController');
const { postController } = require('../controllers/egController');
const { putController } = require('../controllers/egController');
const { deleteController } = require('../controllers/egController');

const egRouters=express.Router();

egRouters.get('/',getController)
egRouters.post('/',postController)
egRouters.put('/',putController)
egRouters.delete('/',deleteController)

module.exports=egRouters;