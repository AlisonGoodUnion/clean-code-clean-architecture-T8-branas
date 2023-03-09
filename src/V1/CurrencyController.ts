import express from 'express';
const app = express();

app.get("/currencies", async function (req, res) {
    const amount = Math.floor(Math.random() * 10);
    res.json({
        amount: amount
    });
})

app.listen(3000);