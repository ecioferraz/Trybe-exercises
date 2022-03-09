class Client {
  private _name: string = String();
  
  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    (n.length < 3) ? console.log('O nome deve conter no mínimo 3 caracteres.') : this._name = n;
  }
}

class Item {
  private _item: string = String();
  private _price: number = Number();

  constructor(item: string, price: number) {
    this._item = item;
    this._price = price;
  }

  get item(): string {
    return this._item;
  }

  set item(i: string) {
    (i.length < 3) ? console.log('O item deve conter no mínimo 3 caracteres.') : this._item = i;
  }

  get price(): number {
    return this._price;
  }

  set price(p: number) {
    (p < 0) ? console.log('O preço deve ser positivo.') : this._price = p;
  }
}

class Order {
  private _client: Client;
  private _items: Item[] = [];
  private _paymentMethod: string;
  private _discount: number = 0;

  constructor(client: Client, items: Item[], paymentMethod: string, discount: number) {
    this._client = client;
    this._items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  get client(): Client {
    return this._client;
  }

  set client(c: Client) {
    this._client = c;
  }

  get items(): Item[] {
    return this._items;
  }

  set items(i: Item[]) {
    (i.length === 0) ? console.log('O pedido deve ter ao menos um item.') : this._items = i;
  }

  get paymentMethod(): string {
    return this._paymentMethod;
  }

  set paymentMethod(pM: string) {
    this._paymentMethod = pM;
  }

  get discount(): number {
    return this._discount;
  }

  set discount(d: number) {
    (d < 0) ? console.log('O desconto não pode ser um valor negativo.') : this._discount = d;
  }

  total(): number {
    return this.items.reduce((acc, curr) => acc += curr.price, 0);
  }

  totalWithDiscount(): number {
    return this.total() - (this.discount * this.total());
  }
}

const client = new Client('Écio');

const coxinha = new Item('Coxinha', 4);
const coca = new Item('Coca-cola', 6);

const order = new Order(client, [coxinha, coca], 'débito', 0.1);

console.log(order);
console.log(`Valor normal: ${order.total()}`);
console.log(`Valor com desconto: ${order.totalWithDiscount()}`);
