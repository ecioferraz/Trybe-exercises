import Teacher from "./Teacher";

const types = ['prova', 'trabalho'];

export default class Evaluation {
  private _score: number = Number();
  private _teacher: Teacher;
  private _type: string = String();

  constructor(score: number, teacher: Teacher, type: string) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  get score(): number {
    return this._score;
  }

  set score(s: number) {
    if (s < 0) console.log('A pontuação não pode ser negativa.');
    if (this.type === 'prova' && s > 25) console.log('A pontuação não pode passar de 25 pontos.');
    if (this.type === 'trabalho' && s > 50) console.log('A pontuação deve passar de 50 pontos.');

    this._score = s;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(t: Teacher) {
    this._teacher = t;
  }

  get type(): string {
    return this._type;
  }

  set type(t: string) {
    if (!types.includes(t)) console.log('O tipo de avaliação não é válido.');
    this._type = t;
  }
}