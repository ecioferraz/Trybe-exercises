export default class Person {
  constructor(
    private _name: string = String(),
    private _birthDate: Date = new Date(),
    ) { }

    public get name(): string {
      return this._name;
    }

    public set name(value: string) {
      if (value.length < 3) throw new Error('O nome deve conter no mínimo 3 caracteres.');
      this._name = value;
    }

    public get birthDate(): Date {
      return this._birthDate;
    }

    public set birthDate(value: Date) {
      this.validateBirthDate(value);
      this._birthDate = value;
    }

    public static getAge(d: Date): number {
      const diff = Math.abs(new Date().getTime() - d.getTime());
      const yearMs = 31_536_000_000;
      return Math.floor(diff / yearMs);
    }

    private validateBirthDate(d: Date): void {
      if (d.getTime() > new Date().getTime()) throw new Error('A data de nascimento não pode ser uma data no futuro.');
      if (Person.getAge(d) > 120) throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
}