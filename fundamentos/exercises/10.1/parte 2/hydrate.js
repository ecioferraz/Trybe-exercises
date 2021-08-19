const hydrate = (string) => {
  const alcoholCups = string.replace(/\D/g, '')
    .split('').map(Number)
    .reduce((acc, cups) => acc += cups);
    return alcoholCups === 1 ? `${alcoholCups} copo de água` : `${alcoholCups} copos de água` ;
}

module.exports = hydrate;