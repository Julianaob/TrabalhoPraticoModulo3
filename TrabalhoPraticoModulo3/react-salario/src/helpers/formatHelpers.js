const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
const percentter = new Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function formatNumber(value) {
  return formatter.format(value);
}

function formatPercent(value) {
  return percentter.format(value);
}
export { formatNumber, formatPercent };
