import { compose, pipe } from 'lodash/fp';

const input = "   Javascript   "

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>` // (type, str) => `<${type}>${str}</${type}>`
const toLowerCase = str => str.toLowerCase();

// Before lodash
const result = wrap('div')(toLowerCase(trim(input)))
console.log(result);

// After lodash
const transform = pipe(trim, toLowerCase, wrap('div'));
console.log(transform(input));

// Updating objects
const person = { name: 'John' }
const updated = Object.assign({}, person)
console.log(updated)

const updated2 = Object.assign({}, person, {name: 'Bob', age: 30})
console.log(updated2)

// Better solution (Spread operator)
const updated3 = {...person, name: 'Bob'}
console.log(updated3)


// If we have nested object we need to do a deep copy instead of a shallow copy as above
const person2 = {
    name: 'John',
    address: {
        country: 'USA',
        city: 'San Francisco'
    }}
const updatedPerson = Object.assign({}, person2)

// Here we use the spread operator for te updatedPerson but also for the address since thats an object as well
// If we did not do this we would have changed person2's city to 'New York' instead of 'San Francisco'
const updated4 = {
    ...updatedPerson,
    name: 'Bob',
    address: {
        ...person2.address,
        city: 'New York'
    }}
console.log(updated4)

// Updating arrays
const numbers = [1, 2, 3];

// Adding a number on the second index
const index = numbers.indexOf(2);
const added = [
    ...numbers.slice(0, index),
    4,
    ...numbers.slice(index)];
console.log(added)

// Removing the second number
const removed = numbers.filter(n => n !== 2);
console.log(removed);

// Updating 2 with 20
const updatedArray = numbers.map(n => n === 2 ? 20 : n);
console.log(updatedArray);