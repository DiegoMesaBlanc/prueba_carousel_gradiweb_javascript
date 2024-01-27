export const averageRate = (tags) => {
  const tagStrings = tags + '';
  const numbers = tagStrings.match(/\d+/g).map(el => + el)

  const average = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;

  return average
}