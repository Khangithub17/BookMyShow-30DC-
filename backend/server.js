const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./dbConnect');
const routes = require('./routes');

app.use(cors());
app.use(express.json());

connectDB();



app.use("/api", routes);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});