/**
 * Округляет число до ближайшего c указанным количеством знаков после запятой (0 съедается)
 * @param value - число, которое нужно округлить
 * @param decimal_places - количество знаков после запятой
 * @default decimal_places = 2
 *
 * @example
 *
 * roundToNumber(14.50711564, 5)
 * //output: 14.50712
 * roundToNumber(14.50711564, 0)
 * //output: 15
 * roundToNumber(14.50711564)
 * //output: 14.5
 * roundToNumber(14.50711564, 4)
 * //output: 14.5071
 */

export const roundNumber = (value: number, decimal_places: number = 2) => {
	decimal_places = Math.trunc(decimal_places);
	const multiplier = 10 ** decimal_places;
	//! Не использовать Math.floor, операция деления/умножения может захавать пару тройку сотых у числа
	return Math.round(value * multiplier) / multiplier;
};

export const truncNumber = (value: number, decimal_places: number = 2) => {
	decimal_places = Math.trunc(decimal_places);
	const multiplier = 10 ** decimal_places;
	return Math.trunc(value * multiplier) / multiplier;
};
