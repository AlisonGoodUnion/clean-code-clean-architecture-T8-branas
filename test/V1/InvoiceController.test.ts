import axios from "axios";
import expect from "expect";

test.skip("Deve testar a API de Invoice", async function() {
    //como o CurrencyController nos retorna um valor aleatorio ficamos
    //impossibilitados de testar ou criar um mock para o teste
    const response = await axios.get("http://localhost:3001/cards/1234123412341234/invoices")
    const invoice = response.data;
    expect(invoice.total).toBe(690);
});