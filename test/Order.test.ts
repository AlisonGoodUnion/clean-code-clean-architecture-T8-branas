import expect from "expect";
import Order from "../src/Order";
import Item from "../src/Item";
import Coupon from "../src/Coupon";

test('nao deve criar um pedido com CPF invalido', function () {
   expect(()=> new Order("111.111.111-11"))
       .toThrow('CPF invalido');
});

test('Deve criar um pedido sem itens', function () {
   const order = new Order('893.458.200-60');
   expect(order.getTotal()).toBe(0);
});

test('Deve criar um pedido com 3 itens', function () {
   const order = new Order('893.458.200-60');
   order.addItem(new Item(1, "Guitarra", 1000), 1);
   order.addItem(new Item(2, "Ampli", 5000), 1);
   order.addItem(new Item(3, "Cabo", 30), 3);

   expect(order.getTotal()).toBe(6090);
});

test('Deve criar um pedido com cupom de desconto', function () {
   const order = new Order('893.458.200-60');
   order.addItem(new Item(1, "Guitarra", 1000), 1);
   order.addItem(new Item(2, "Ampli", 5000), 1);
   order.addItem(new Item(3, "Cabo", 30), 3);
   order.addCoupon(new Coupon("VALE20", 20));

   expect(order.getTotal()).toBe(4872);
});