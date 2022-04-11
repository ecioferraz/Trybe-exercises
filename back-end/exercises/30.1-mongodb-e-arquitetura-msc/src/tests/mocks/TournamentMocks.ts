export const tournamentMock = [{
  _id: '1',
  year: 2022,
  hostCountry: 'Qatar',
  champions: 'Brazil',
  runnerUp: 'Germany',
  editionGoals: 141,
  editionStrikers: [
    'Formiga',
  ],
  bestPlayer: 'Martha',
  bestGoalkeeper: 'Tafarel',
  bestYoungPlayer: 'Fuleco',
}];

export const updatedTournament = { ...tournamentMock[0], editionGoals: 153 };

