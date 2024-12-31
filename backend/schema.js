const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
movie:{type:String, required:true},
slot:{type:String, required:true},
seats:{
    A1:{type:Number, required:true},
    A2:{type:Number, required:true},
    A3:{type:Number, required:true},
    A4:{type:Number, required:true},
    D1:{type:Number, required:true},
    D2:{type:Number, required:true}

}
})

const Ticket = mongoose.model('bookmovie', TicketSchema);
module.exports = Ticket;