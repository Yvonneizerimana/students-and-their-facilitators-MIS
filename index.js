import express from "express";
import mongoose from "mongoose";
const app = express();
import router from "./routes/student.route.js";
import router2 from "./routes/facilitator.route.js";
app.use(express.json());

app.use(router);
app.use(router2);

const url = "mongodb://localhost:27017/Management_information_system"
mongoose.connect(url)
    .then(() => {
        console.log("database ok");
    })
    .catch((error) => {
        console.error(error.message);
    })



const PORT = 5000;
app.listen(PORT, () => {
    console.log("server is running on port 5000 ....");
})