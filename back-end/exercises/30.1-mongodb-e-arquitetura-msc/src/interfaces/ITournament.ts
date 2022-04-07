export default interface ITournament {
  year: number,
  hostCountry: string,
  champions: string,
  runnerUp: string,
  editionGoals: number,
  editionStrikers: string[],
  bestPlayer: string,
  bestGoalkeeper?: string,
  bestYoungPlayer: string,
}
