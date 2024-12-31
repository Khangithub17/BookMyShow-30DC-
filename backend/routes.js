const express = require('express');
const router = express.Router();
const Ticket = require('./schema');
const cors = require('cors');

// Define your routes here
router.use(express.json());
router.use(cors());

router.post('/booking', async (req, res) => {
    const { movie, slot, seats } = req.body;

    try {
        const ticket = new Ticket({
            movie,
            slot,
            seats
        });

        await ticket.save();
        res.json(ticket);

        res.status(200).send('Ticket booked successfully');
    } catch (error) {
      res.status(500).json({
        data:null,
        message:"something went wrong !please try again later",
      })
    }
});


router.get('/booking', async (req, res) => {
    try {
        const myData = await Ticket.find().sort({ _id: -1 }).limit(1);
        if(myData.length === 0){
          res.status(200).json({
            data:null,
            message:"No previous booking found",
          })
        }else{
          res.status(200).json({
            data:myData[0],
            message:"Booking found",
          })
        }

    } catch (error) {
        res.status(500).json({
          data:null,
          message:"something went wrong !please try again later",
        })
    }
}
);

module.exports = router;