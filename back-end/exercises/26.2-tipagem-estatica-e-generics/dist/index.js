"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const readline_sync_1 = __importDefault(require("readline-sync"));
const months_1 = require("./months");
const seasons_1 = require("./seasons");
const monthNames = Object.keys(months_1.months).map((month) => month);
const chosenMonth = readline_sync_1.default.keyInSelect(monthNames, 'Chose a month', { cancel: 'EXIT' });
if (chosenMonth === -1) {
    console.log('Exiting!');
    (0, process_1.exit)();
}
;
const southSeasons = {
    [seasons_1.seasons.Summer]: [months_1.months.December, months_1.months.January, months_1.months.February, months_1.months.March],
    [seasons_1.seasons.Autumn]: [months_1.months.March, months_1.months.April, months_1.months.May, months_1.months.June],
    [seasons_1.seasons.Winter]: [months_1.months.June, months_1.months.July, months_1.months.August, months_1.months.September],
    [seasons_1.seasons.Spring]: [months_1.months.September, months_1.months.October, months_1.months.November, months_1.months.December],
};
const northSeasons = {
    [seasons_1.seasons.Winter]: southSeasons[seasons_1.seasons.Summer],
    [seasons_1.seasons.Spring]: southSeasons[seasons_1.seasons.Autumn],
    [seasons_1.seasons.Summer]: southSeasons[seasons_1.seasons.Winter],
    [seasons_1.seasons.Autumn]: southSeasons[seasons_1.seasons.Spring],
};
const hemispheres = {
    'North': northSeasons,
    'South': southSeasons,
};
const chosenHemisphere = readline_sync_1.default.keyInSelect(Object.keys(hemispheres), 'Chose a hemsphere', { cancel: 'EXIT' });
if (chosenHemisphere === -1) {
    console.log('Exiting');
    (0, process_1.exit)();
}
;
const month = Object.values(months_1.months)[chosenMonth];
const hemisphere = Object.keys(hemispheres)[chosenHemisphere];
console.log(`Month: ${month}`);
console.log(`Hemsphere: ${hemisphere}`);
console.log(`Seasons:`);
const chosenHemisphereSeasons = Object.values(hemispheres)[chosenHemisphere];
Object.entries(chosenHemisphereSeasons).map((entry) => {
    const chosenSeasons = entry[0];
    const chosenMonths = entry[1];
    if (chosenMonths.includes(month))
        console.log(chosenSeasons);
});
