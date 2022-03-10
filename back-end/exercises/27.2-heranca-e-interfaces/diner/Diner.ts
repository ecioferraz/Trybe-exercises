import Client from "./Client";
import ItemOrder from "./ItemOrder";
import Order from "./Order";

const client = new Client('Écio');

const newOrder = [new ItemOrder('Coxinha', 4), new ItemOrder('Coca-cola', 6)];

const order = new Order(client, newOrder, 'débito', 0.1);

console.log(order);
console.log(`Valor normal: ${order.getTotal()}`);
console.log(`Valor com desconto: ${order.totalWithDiscount()}`);
