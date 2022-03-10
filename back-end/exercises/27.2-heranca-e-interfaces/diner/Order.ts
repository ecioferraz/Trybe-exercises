import Client from "./Client";
import ItemOrder from "./ItemOrder";

export default class Order {
  constructor(
    private _client: Client,
    private _item: ItemOrder[],
    private _paymentMethod: string,
    private _discount: number = 0,
  ) { }

  public get client(): Client {
    return this._client;
  }

  public set client(value: Client) {
    this._client = value;
  }

  public get item(): ItemOrder[] {
    return this._item;
  }

  public set item(value: ItemOrder[]) {
    this._item = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }

  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount(): number {
    return this._discount;
  }

  public set discount(value: number) {
    this._discount = value;
  }

  public getTotal(): number {
    return this._item.reduce((total, item) => total += item.price, 0);
  }

  public totalWithDiscount(): number {
    return this.getTotal() - (this.discount * this.getTotal());
  }
}