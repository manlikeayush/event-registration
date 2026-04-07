const express = require("express");
const app = express();
const cors = require("cors");

const db = require("./firebase");

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {
    let { name, event } = req.body;
    let time = new Date();

    try {
        await db.collection("registrations").add({
            name: name,
            event: event,
            time: time
        });

        console.log("Saved:", name, event);

        res.json({ message: "Registered successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error saving data" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});