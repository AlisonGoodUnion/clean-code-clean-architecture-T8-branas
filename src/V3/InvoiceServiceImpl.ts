import InvoiceService from "./InvoiceService";
import PurchaseRepository from "./PurchaseRepository";
import CurrencyGateway from "./CurrencyGateway";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";
import Invoice from "./Invoice";

export default class InvoiceServiceImpl implements InvoiceService {

    //declaracao sem inversao dependencia.
    //assim temos a dependencia indireta
    constructor(readonly purchaseRepository: PurchaseRepositoryDatabase,
                readonly currencyGateway: CurrencyGatewayHttp
    ) {
    }

    async calculateInvoice(cardNumber: string, month: number, year: number): Promise<number> {
        //driven (outbound)

        const purchases = await this.purchaseRepository.getPurchases(cardNumber, month, year);
        const currencyAmount = await this.currencyGateway.getCurrency();

        //application regras da aplicacao


        const invoice = new Invoice(currencyAmount);
        invoice.setPurchases(purchases);
        const total= invoice.getTotal();

        return total;
    }
}