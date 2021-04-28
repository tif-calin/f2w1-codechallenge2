import { alphabetical, byAge, greatestToLeast, leastToGreatest, lengthSort } from './array-sort.js';

const NUMS = [1, 3, 5, 2, 90, 20];
const WORDS = ['dog', 'wolf', 'by', 'family', 'eaten'];
const OBJS = [
  { name: 'Quiet Samurai', age: 22 },
  { name: 'Arrogant Ambassador', age: 100 },
  { name: 'Misunderstood Observer', age: 2 },
  { name: 'Unlucky Swami', age: 77 }
];

test('leastToGreatest', () => {
  const input = NUMS; // arrange
  const output = leastToGreatest(input); // act
  expect(output).toEqual([1, 2, 3, 5, 20, 90]); // assert
});

test('greatestToLeast', () => {
  const input = NUMS; // arrange
  const output = greatestToLeast(input); // act
  expect(output).toEqual([90, 20, 5, 3, 2, 1]); // assert
});

test('lengthSort', () => {
  const input = WORDS; // arrange
  const output = lengthSort(input); // act
  expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']); // assert
});

test('alphabetical', () => {
  const input = WORDS; // arrange
  const output = alphabetical(input); // act
  expect(output).toEqual(['by', 'dog', 'eaten', 'family', 'wolf']); // assert
});

test('byAge', () => {
  const input = OBJS; // arrange
  const output = byAge(input); // act
  expect(output).toEqual([ 
    { name: 'Misunderstood Observer', age: 2 },
    { name: 'Quiet Samurai', age: 22 },
    { name: 'Unlucky Swami', age: 77 },
    { name: 'Arrogant Ambassador', age: 100 } 
  ]); // assert
});