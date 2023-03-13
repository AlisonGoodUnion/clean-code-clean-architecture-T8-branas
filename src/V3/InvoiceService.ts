export default interface InvoiceService {
    calculateInvoice(card_number: string, month: number, year: number): Promise<number>;
}