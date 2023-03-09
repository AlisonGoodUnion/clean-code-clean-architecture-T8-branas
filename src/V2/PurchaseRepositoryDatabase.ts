import PurchaseRepository from "./PurchaseRepository";
import pgp from "pg-promise";
import Purchase from "./Purchase";

export default class PurchaseRepositoryDatabase implements PurchaseRepository {

    async getPurchases(cardNumber: string, month: number, year: number): Promise<Purchase[]> {
        const cn = "postgres://postgres:admin123@localhost:5432/branas";
        const connection = pgp()(cn);
        const purchasesData = await connection.query(
            "select * from branas.purchase where card_number = $1 " +
            "and extract(month from date)::integer = $2 " +
            "and extract(year from date)::integer = $3", [
                cardNumber, month, year
            ]);

        const purchases = [];
        for (const purchaseData of purchasesData) {
            console.log(purchaseData);
            purchases.push(
                new Purchase(
                    purchaseData.card_number,
                    parseFloat(purchaseData.amount),
                    purchaseData.currency)
            )
        }
        return purchases;
    }
}
