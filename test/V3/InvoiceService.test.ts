import InvoiceServiceImpl from "../../src/V3/InvoiceServiceImpl";
import expect from "expect";
import CurrencyGatewayHttp from "../../src/V3/CurrencyGatewayHttp";
import sinon from "sinon";
import PurchaseRepositoryDatabase from "../../src/V3/PurchaseRepositoryDatabase";
import Purchase from "../../src/V3/Purchase";
import axios from "axios";

test("Deve testar o calculo da fatura usando stub", async function() {

    const purchaseRepository = new PurchaseRepositoryDatabase();
    const currencyGateway = new CurrencyGatewayHttp();

    const invoiceService = new InvoiceServiceImpl(purchaseRepository, currencyGateway);
    const total = await invoiceService.calculateInvoice("1234123412341234", 9, 2022);
    expect(total).toBe(690);
    sinon.restore();
});