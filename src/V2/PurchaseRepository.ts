import Purchase from "./Purchase";

export default interface PurchaseRepository {
    getPurchases (card_number: string, month: number, year: number): Promise<Purchase[]>;

}