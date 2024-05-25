const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const {
    MONGO_USER,
    MONGO_PASSWORD,
    MONGO_IP,
    MONGO_PORT
} = require('./config/config');
const tokenRouter = require('./routes/tokenRoute.js')
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
const infoRoute = require("./routes/infoRoute.js")
const app = express();
const connectWithRetry = () => {
    mongoose.connect(MONGO_URL)
        .then(() => {
            console.log("Successfully connected to DB");
        }).catch((e) => {
            console.log(e);
            setTimeout(connectWithRetry, 5000);
        });
};
connectWithRetry();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', tokenRouter)
app.use('/api', infoRoute)
const server = app.listen(process.env.PORT || 3000, () => {
    console.log(`Server started successfully on ${process.env.PORT}`);
});
