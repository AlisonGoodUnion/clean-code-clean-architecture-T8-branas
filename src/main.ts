import express, {response} from 'express';
import axios from 'axios';
import pgp from "pg-promise";
const app = express();

app.get("/cards/:cardNumber/invoices", async function (req, res) {
    const connection = pgp()("postgres://postgres:admin123@localhost:5432/branas");
    const purchases = await connection.query("select * from branas.purchase", []);
    console.log(purchases);

    let total = 0;

    const response = await axios.get("http://localhost:3000/currencies");
    const currency = response.data;

    for(const purchase of purchases) {
        if (purchase.currency === 'USD') {
            total += parseFloat(purchase.amount) * currency.amount;
        } else {
            total += parseFloat(purchase.amount);
        }
    }
    res.json({
        total
    });
    res.end();
})

app.listen(3001);