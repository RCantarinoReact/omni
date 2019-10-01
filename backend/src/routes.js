const express = require('express');

//upload
const multer= require('multer')
const uploadConfig = require('./config/upload')


const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashController = require('./controllers/DashBoardController')
const bookingController = require('./controllers/BookingController')


const routes = express.Router();
const upload = multer(uploadConfig)


routes.post('/sessions', SessionController.store);

//spot
routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumb'), SpotController.store);
routes.get('/my-spots', DashController.show);

//reservas
routes.post('/spots/:spot_id/bookings', bookingController.store);

module.exports = routes;