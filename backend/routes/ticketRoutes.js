const express = require('express');
const router = express.Router();
const {
  getTickets,
  createTicket,
  getTicket,
  deleteTicket,
  updateTicket,
} = require('../controlers/ticketControlers');

const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getTickets);
router.post('/', protect, createTicket);
router.get('/:id', protect, getTicket);
router.delete('/:id', protect, deleteTicket);
router.put('/:id', protect, updateTicket);

module.exports = router;
