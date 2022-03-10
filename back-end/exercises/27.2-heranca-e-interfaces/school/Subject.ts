export default class Subject {
  constructor(private _name: string) { }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) throw new Error('O nome da disciplina deve possuir no mínimo 3 caracteres.');
    this._name = value;
  }
}
