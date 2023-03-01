import expect from "expect";
import Order from "../src/Order";

test('nao deve criar um pedido com CPF invalido', function () {
   expect(()=> new Order("111.111.111-11"))
       .toThrow('CPF invalido');
});