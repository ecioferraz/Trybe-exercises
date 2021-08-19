const techList = (tech, name) => {
  const techArray = tech.sort()
    .map((techy) => ({
      tech: techy,
      name,
    }));
  return tech.length === 0 ? 'Vazio!' : techArray;
}

module.exports = techList;