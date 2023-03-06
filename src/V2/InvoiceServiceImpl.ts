import InvoiceService from "./InvoiceService";

export default class InvoiceServiceImpl implements InvoiceService {

    async calculateInvoice(card_number: string, month: number, year: number): Promise<number> {
        return Promise.resolve(0);
    }
}