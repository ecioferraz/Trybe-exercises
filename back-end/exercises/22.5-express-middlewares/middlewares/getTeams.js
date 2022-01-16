const { readFile } = require("../fs-utils");

const getTeams = async (_req, res) => {
  const teams = await readFile('teams.json') || [];
  res.status(200).json({ teams });
};

module.exports = getTeams;
