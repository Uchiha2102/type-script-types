const numbers: number[] = [1, 2, 3, 4, 5]
const doubledNumbers: number[] = numbers.map(number => number * 2);
console.log(doubledNumbers);

const words: String[] = ["Mars", "snickers", "Maltesers", "Twix", "Bounty"]
const filteredWords: String[] = words.filter(word => word.length > 5)
console.log(filteredWords);

const sum: number = numbers.reduce((total, num) => total + num, 0)
console.log(sum);

const numbers2: number[] = [5, 10, 20, 30, 50]
const numberGreaterThanTen: boolean = numbers2.some(num => num > 10);
console.log(numberGreaterThanTen);


