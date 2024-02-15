const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.listen(1000, () => {
    console.log("CONNECTED TO SERVER AT 1000")
});