const naturalNum = (num) => {
  if (typeof num !== 'number') return `${num} não é um número.`
  if (num > 0) return 'Positivo';
  if (num < 0) return 'Negativo';
  return 'Neutro';
}

module.exports = { naturalNum };
