import InvoiceServiceImpl from "../../src/V2/InvoiceServiceImpl";
import expect from "expect";
import PurchaseRepositoryDatabase from "../../src/V2/PurchaseRepositoryDatabase";
import CurrencyGatewayHttp from "../../src/V2/CurrencyGatewayHttp";

test("Deve testar o calculo da fatura", async function() {

    const purchaseRepository = new PurchaseRepositoryDatabase();
    const currencyGateway = new CurrencyGatewayHttp();
    const invoiceService = new InvoiceServiceImpl(purchaseRepository, currencyGateway);
    const total = await invoiceService.calculateInvoice("1234123412341234", 9, 2022);

    expect(total).toBe(690);

});