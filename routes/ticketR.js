const express = require('express')

const userAuthentication = require('../middleware/auth')

const ticketController = require('../controller/ticketController')

const router = express.Router()

router.post('/user/create-ticket',userAuthentication.authenticate, ticketController.createTicket)
router.get('/user/getTickets', userAuthentication.authenticate, ticketController.getTickets)
router.get('/user/pagination', ticketController.getPagination)

module.exports = router