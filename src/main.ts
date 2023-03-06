import express from 'express';
import pgp from "pg-promise";
const app = express();

app.get("/cards/:cardNumber/invoices",  function (req, res) {
    const connection = pgp()("postgress://postgres:123456@localhost:5432/app");

    console.log(connection);
    res.end();
})

app.listen(3001);