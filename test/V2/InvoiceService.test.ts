import InvoiceServiceImpl from "../../src/V2/InvoiceServiceImpl";
import expect from "expect";
import CurrencyGatewayHttp from "../../src/V2/CurrencyGatewayHttp";
import sinon from "sinon";
import PurchaseRepositoryDatabase from "../../src/V2/PurchaseRepositoryDatabase";
import axios from "axios";

//agora se copararmos a V1 com a V2 voce percebe que fica mais facil testar a V2
//por isso é bacana ter distinção das camadas de negócio e acesso.
test("Deve testar o calculo da fatura usando stub", async function() {

    //como fizemos o newDate na classe, temos essa dependencia no teste
    //assim acabamos de passar por cima de algumas dependencias
    const getMonthStub = sinon.stub(Date.prototype, 'getMonth').returns(6);
    const getFullYearStub = sinon.stub(Date.prototype, 'getFullYear').returns(2022);

    //stub com resposta programada de um component indireto, se chamar o getcurrency volta 3.
    //sinon usa os nomes corretos para os testes, diferente do mockito usa mock pra tudo.
    const currencyGatewayHttpStub = sinon.stub(CurrencyGatewayHttp.prototype, 'getCurrency')
        .resolves(3);

    // const purchaseRepositoryDatabseStub = sinon.stub(PurchaseRepositoryDatabase.prototype, 'getPurchases')
    //     .resolves(
    //         [new Purchase("123412341234", 100, "USD")]
    //     );
    //assim temos a dependencia indireta nesse caso podemos
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculateInvoice("1234123412341234");

    expect(total).toBe(690);

    sinon.restore();
});

test.skip("Deve testar o calculo da fatura usando spy", async function() {
    const sinonSpy = sinon.spy(PurchaseRepositoryDatabase.prototype, "getPurchases");

    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculateInvoice("1234123412341234");

    expect(total).toBe(690);
    //assim conseguimos validar se realmente o getPurchases foi chamado com os valores corretos.
    //entao caso alguem faça alteração nos dados das datas ou card_number o teste não vai passar.
    expect(sinonSpy.calledWith("1234123412341234", 9, 2022)).toBeTruthy();
    sinon.restore();
});

test("Deve testar o calculo da fatura usando mock", async function() {
    const axiosMock = sinon.mock(axios);
    axiosMock.expects("get")
        .withArgs("http://localhost:3000/currencies") //spy
        .resolves({data: {amount: 3}}); //stub
    //aqui estamos indo além, poderiamos simplificar esse teste.
    //mock substitui o stub e o spy.
    const invoiceService = new InvoiceServiceImpl();
    const total = await invoiceService.calculateInvoice("1234123412341234");

    expect(total).toBe(690);
    axiosMock.verify();

    sinon.restore();
});

