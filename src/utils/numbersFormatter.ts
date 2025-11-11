import { truncNumber } from "./roundingNumbers";

export const numbersFormatter = (
  value: number,
  noShort = false,
  superShort = false
): string => {
  if (value < (superShort ? 10000 : 100000) || noShort)
    return "$ " + new Intl.NumberFormat("ru-Ru").format(value);
  else {
    const newValue = truncNumber(value, 0);
    if (newValue < 1000000)
      return new Intl.NumberFormat("en-US").format(newValue);
    else {
      const newMValue = Math.trunc(newValue / 100000) / 10;
      return "$ " + newMValue + "M";
    }
  }
};
