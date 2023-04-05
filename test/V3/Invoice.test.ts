import Purchase from "../../src/V3/Purchase";
import Invoice from "../../src/V3/Invoice";
import expect from "expect";

test("Deve testar a fatura", function () {

    const purchases = [
      new Purchase("1234", 100, "USD"),
      new Purchase("1234", 30, "BRL"),
      new Purchase("1234", 10, "BRL"),
    ];

    const invoice = new Invoice(3);
    invoice.setPurchases(purchases);
    const total = invoice.getTotal();

    expect(total).toBe(340);
});
