const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/save", (req, res) => {
    let data = [];

    if (fs.existsSync("data.json")) {
        data = JSON.parse(fs.readFileSync("data.json"));
    }

    data.push(req.body);

    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));

    res.send("Successfully Saved!");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});