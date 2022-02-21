import { exit } from "process";
import rl from 'readline-sync'
import { months } from "./months";
import { seasons } from "./seasons";

const monthNames = Object.keys(months).map((month) => month);

const chosenMonth = rl.keyInSelect(monthNames, 'Chose a month', { cancel: 'EXIT' });

if (chosenMonth === -1) {
  console.log('Exiting!');
  exit();
};

const southSeasons = {
  [seasons.Summer]: [months.December, months.January, months.February, months.March],
  [seasons.Autumn]: [months.March, months.April, months.May, months.June],
  [seasons.Winter]: [months.June, months.July, months.August, months.September],
  [seasons.Spring]: [months.September, months.October, months.November, months.December],
};

const northSeasons = {
  [seasons.Winter]: southSeasons[seasons.Summer],
  [seasons.Spring]: southSeasons[seasons.Autumn],
  [seasons.Summer]: southSeasons[seasons.Winter],
  [seasons.Autumn]: southSeasons[seasons.Spring],
};

const hemispheres = {
  'North': northSeasons,
  'South': southSeasons,
};

const chosenHemisphere = rl.keyInSelect(Object.keys(hemispheres), 'Chose a hemsphere', { cancel: 'EXIT' });

if (chosenHemisphere === -1) {
  console.log('Exiting');
  exit();
};

const month = Object.values(months)[chosenMonth];

const hemisphere = Object.keys(hemispheres)[chosenHemisphere];

console.log(`Month: ${month}`);
console.log(`Hemsphere: ${hemisphere}`);
console.log(`Seasons:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[chosenHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
  const chosenSeasons = entry[0];
  const chosenMonths = entry[1];

  if (chosenMonths.includes(month)) console.log(chosenSeasons);
});
