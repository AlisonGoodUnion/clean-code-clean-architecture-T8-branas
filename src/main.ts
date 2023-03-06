import express from 'express';
import pgp from "pg-promise";
const app = express();

app.get("/cards/:cardNumber/invoices", async function (req, res) {
    const connection = pgp()("postgres://postgres:admin123@localhost:5432/branas");
    const purchases = await connection.query("select * from branas.purchase", []);
    console.log(purchases);

    let total = 0;

    for(const purchase of purchases) {
        total += parseFloat(purchase.amount);
    }
    res.json({
        total
    });
    res.end();
})

app.listen(3001);