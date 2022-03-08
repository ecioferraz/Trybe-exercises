export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(n: string) {
    (n.length < 3) ? console.log('O nome tem que possuir no mínimo 3 caracteres.') : this._name = n;
  }
}
