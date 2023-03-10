import InvoiceServiceImpl from "../../src/V2/InvoiceServiceImpl";
import expect from "expect";
import CurrencyGatewayHttp from "../../src/V2/CurrencyGatewayHttp";
import sinon from "sinon";
import PurchaseRepositoryDatabase from "../../src/V2/PurchaseRepositoryDatabase";
import Purchase from "../../src/V2/Purchase";

//agora se copararmos a V1 com a V2 voce percebe que fica mais facil testar a V2
//por isso é bacana ter distinção das camadas de negócio e acesso.
test("Deve testar o calculo da fatura", async function() {

    //stub com resposta programada de um component indireto, se chamar o getcurrency volta 3.
    //sinon usa os nomes corretos para os testes, diferente do mockito usa mock pra tudo.
    const currencyGatewayHttpStub = sinon.stub(CurrencyGatewayHttp.prototype, 'getCurrency')
        .resolves(3);

    const purchaseRepositoryDatabseStub = sinon.stub(PurchaseRepositoryDatabase.prototype, 'getPurchases')
        .resolves(
            [new Purchase("123412341234", 100, "USD")]
        );
    //assim temos a dependencia indireta nesse caso podemos
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculateInvoice("1234123412341234", 9, 2022);

    expect(total).toBe(300);
    currencyGatewayHttpStub.restore(); //varios testes devemos voltar pra instancia original.
    purchaseRepositoryDatabseStub.restore();

});