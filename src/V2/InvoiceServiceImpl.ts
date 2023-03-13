import InvoiceService from "./InvoiceService";
import PurchaseRepository from "./PurchaseRepository";
import CurrencyGateway from "./CurrencyGateway";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";

export default class InvoiceServiceImpl implements InvoiceService {

    purchaseRepository: PurchaseRepositoryDatabase;
    currencyGateway: CurrencyGatewayHttp;

    //declaracao sem inversao dependencia.
    //assim temos a dependencia indireta
    constructor() {
        this.purchaseRepository = new PurchaseRepositoryDatabase();
        this.currencyGateway = new CurrencyGatewayHttp();
    }

    async calculateInvoice(cardNumber: string): Promise<number> {
        //driven (outbound)
        const date = new Date();
        const month = 9;
        const year = 2022;

        const purchases = await this.purchaseRepository.getPurchases(cardNumber, month, year);
        const currencyAmount = await this.currencyGateway.getCurrency();

        //application regras da aplicacao
        let total = 0;
        for(const purchase of purchases) {
            if (purchase.currency === 'USD') {
                total += purchase.amount * currencyAmount;
            } else {
                total += purchase.amount;
            }
        }
        return total;
    }
}