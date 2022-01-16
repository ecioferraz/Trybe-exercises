const { writeFile } = require("../fs-utils");

const validateTeams = (req, res, next) => {
  const { name, initials, country } = req.body;
  console.log(req.body);
  
  if (
    name < 6
    || !initials.match(/^[A-Z]*$/)
    || initials.length !== 3
    || country.length < 4
  ) {
    return res.status(400).json({ message: 'invalid data' })
  };

  next();
};

const writeContent = async (req, res) => {
  const team = await writeFile('teams.json', req.body);
  res.status(200).json(team);
};

module.exports = [validateTeams, writeContent];
