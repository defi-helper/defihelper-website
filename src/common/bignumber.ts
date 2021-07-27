import BN from 'bignumber.js';

BN.set({
  FORMAT: {
    decimalSeparator: '.',
    groupSeparator: ',',
    groupSize: 3,
    secondaryGroupSize: 0,
    fractionGroupSeparator: ' ',
    fractionGroupSize: 0
  }
});

const formatDecimals = (result: string) => {
  const [integerValue, floatValue] = result.split('.');

  return new BN(floatValue).isZero() ? integerValue : result;
};

function humanizeNumeral(
  value: string | number | undefined | null | BN,
  decimal = 2
) {
  if (value === undefined || value === null) return '0';

  const result = BN.isBigNumber(value) ? value : new BN(value);

  if (result.isNaN() || !result.isFinite() || result.eq(0)) return '0';

  if (result.isInteger()) return result.toFormat(0);

  if (result.lt(10)) return formatDecimals(result.toFormat(decimal));

  if (result.lt(10000)) return formatDecimals(result.toFormat(decimal));

  if (result.lt(100000)) return formatDecimals(result.toFormat(decimal));

  if (result.lt(1000000)) return formatDecimals(result.toFormat(decimal));

  if (result.isGreaterThanOrEqualTo(1000000000))
    return `${formatDecimals(result.div(1000000000).toFormat(decimal))}B`;

  return `${formatDecimals(result.div(1000000).toFormat(decimal))}M`;
}

export { BN, humanizeNumeral };
