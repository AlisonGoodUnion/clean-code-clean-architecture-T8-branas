import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";
import Coupon from "./Coupon";

export default class Order {
    private cpf: Cpf;
    private orderItems: OrderItem[];
    private coupon?: Coupon;

    constructor(cpf: string) {
        this.cpf = new Cpf(cpf);
        this.orderItems = [];
    }

    addItem(item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    getTotal() {
        let total = this.orderItems.reduce((total, orderItem) => {
            total += orderItem.getTotal();
            return total;
        }, 0);

        if (this.coupon) {
            total -= this.coupon.getDiscount(total);
        }

        return total;
    }

    addCoupon(coupon: Coupon) {
        this.coupon = coupon;
    }
}