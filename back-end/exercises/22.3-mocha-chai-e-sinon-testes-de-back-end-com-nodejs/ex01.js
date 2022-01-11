const naturalNum = (num) => {
  if (num > 0) return 'Positivo';
  if (num < 0) return 'Negativo';
  return 'Neutro';
}

module.exports = { naturalNum };
