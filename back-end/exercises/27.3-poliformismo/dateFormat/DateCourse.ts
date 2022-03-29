class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {

    const date = `${year}/${month}/${day}`;

    if (new Date(date).getDate() !== day) {
      day = 1;
      month = 1;
      year = 1900;
    }

    this._day = day;
    this._month = month;
    this._year = year;
  }

  get day(): number {
    return this._day;
  }

  set day(d: number) {
    this._day = d;
  }

  get month(): number {
    return this._month;
  }

  set month(m: number) {
    this._month = m;
  }

  get year(): number {
    return this._year;
  }

  set year(y: number) {
    this._year = y;
  }

  public getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this.month - 1];
  }

  public isLeapYear(): boolean {
    return new Date(this._year, 1, 29).getDate() === 29;
    // https://stackoverflow.com/questions/16353211/check-if-year-is-leap-year-in-javascript
  }

  public compare (date: Data): number {
    const currDate = `${this.year}/${this.month}/${this.day}`;

    const dateCompared = `${date.year}/${date.month}/${date.day}`;

    if (new Date(currDate) > new Date(dateCompared)) return 1;
    if (new Date(currDate) < new Date(dateCompared)) return -1;

    return 0;
  }

  public format(formatting: string): string {
    const conditions: boolean[] = [
      (!formatting.match(/a{2,4}/g)),
      (!formatting.match(/m{2}/g)) && !formatting.match(/M{1}/g),
      (!formatting.match(/d{2,4}/g)),
    ];

    if (conditions.every((condition) => condition)) {
      console.log(`O formato passado é inválido: ${formatting}`);
    }

    const day = this.day > 9 ? this.day.toString() : `0${this.day.toString()}`;
    const month = this.month > 9 ? this.month.toString() : `0${this.month.toString()}`;
    const year = this.year.toString();

    const dateFormatting = formatting
    .replace('dd', day)
    .replace('mm', month)
    .replace('M', this.getMonthName())
    .replace('aaaa', year)
    .replace('aa', year.substring(-2));

    return dateFormatting;
  }
}

const bday = new Data(24, 7, 1991);
const today = new Data(4, 3, 2022);
const compared = bday.compare(today);
const compareStates = ['anterior', 'igual', 'posterior'];
const invalidDate = new Data(31, 2, 2022);

console.log(bday);
console.log(`Dia: ${bday.day}`);
console.log(`Mês: ${bday.month}`);
console.log(`Mês por extenso: ${bday.getMonthName()}`);
console.log(`Ano: ${bday.year}`);
console.log(`É ano bissexto: ${bday.isLeapYear() ? 'Sim' : 'Não'}`);
console.log(`A primeira data é ${compareStates[compared + 1]} a segunda.`);
console.log(bday.format('dd/mm/aaaa'));
console.log(bday.format('dd-mm-aaaa'));
console.log(bday.format('aaaa/mm/dd'));
console.log(bday.format('aaaa-mm-dd'));
console.log(bday.format('dd de M de aa'));
console.log(bday.format('dd, M de aaaa'));
console.log(invalidDate.format('a m d'));
