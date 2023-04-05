import InvoiceServiceImpl from "../../src/V3/InvoiceServiceImpl";
import expect from "expect";
import sinon from "sinon";
import Purchase from "../../src/V3/Purchase";
import PurchaseRepository from "../../src/V3/PurchaseRepository";
import CurrencyGateway from "../../src/V3/CurrencyGateway";

test("Deve testar o calculo da fatura usando fake", async function () {

    //Quando existe a inversao de dependencia(Ports and Adapters)
    //Conseguimos utilizar Fakes, assim nao precisamos utilizar Stubs.

    //fake impl que simula a impl original
    const purchaseRepository: PurchaseRepository = {
        async getPurchases(cardNumber: string, month: number, year: number): Promise<Purchase[]> {
            return [
                new Purchase("1234123412341234", 100, "USD")
            ];
        }
    };
    // FAKE: implementação que simula implementação original
    //
    const currencyGateway: CurrencyGateway = {
        async getCurrency(): Promise<number> {
            return 3;
        }
    };

    const invoiceService = new InvoiceServiceImpl(purchaseRepository, currencyGateway);
    //agora essa data é dummy pq não serve mais para nada
    //passamos por cima.
    const total = await invoiceService.calculateInvoice("1234123412341234", 9, 2022);
    expect(total).toBe(300);
    sinon.restore();
});