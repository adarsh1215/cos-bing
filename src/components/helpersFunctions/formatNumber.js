function formatNumber(number) {
  const prefixes = ['', 'K', 'M', 'B', 'T'];
  const base = 1000;
  const sign = number < 0 ? '-' : '';
  const absNumber = Math.abs(number);
  const logarithm = Math.floor(Math.log10(absNumber) / Math.log10(base));
  const prefixIndex = Math.min(logarithm, prefixes.length - 1);
  const scaledNumber = absNumber / Math.pow(base, prefixIndex);
  const formattedNumber = scaledNumber.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 20 });

  return sign + parseFloat(formattedNumber).toFixed(2) + prefixes[prefixIndex];
}

  export default formatNumber;