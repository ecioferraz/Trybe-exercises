import Evaluation from "./Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number = Number();

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(e: Evaluation) {
    this._evaluation = e;
  }

  get score(): number {
    return this._score;
  }

  set score(s: number) {
    if (s < 0) console.log('A pontuação não pode ser negativa.');
    if (s > this.evaluation.score) console.log(`A pontuação máxima é ${this.testing.score} pontos.`)

    this._score = s;
  }
}
