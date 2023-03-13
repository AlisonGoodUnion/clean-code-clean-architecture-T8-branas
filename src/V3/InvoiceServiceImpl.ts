import InvoiceService from "./InvoiceService";
import PurchaseRepository from "./PurchaseRepository";
import CurrencyGateway from "./CurrencyGateway";
import PurchaseRepositoryDatabase from "./PurchaseRepositoryDatabase";
import CurrencyGatewayHttp from "./CurrencyGatewayHttp";

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