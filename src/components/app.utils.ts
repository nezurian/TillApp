// Converts the  <number[]> to <number>, with decimals when necessary.
const converter = (number: number[]): number => {
  // Conversion to Int.
  const num = parseInt(number.join(""));
  let result: number = 0;

  // Handles the number: length 1 || 2 , no decimals => 1, 12
  // Length 3 => 1,23; Length 4 => 12,34; length 5 => 123,45
  number.length < 3
    ? (result = num)
    : num === 100
    ? (result = 100)
    : (result = parseFloat((num / 100).toFixed(2)));

  return result;
};

export interface Alert {
  message: string;
  alert: string;
}

export { converter };
