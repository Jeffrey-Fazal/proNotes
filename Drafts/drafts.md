## Notes that are taken within class or whilst working out a problem

## Array Method reduce function JS (adds / or whatever everything in the array)

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
```

[Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

[JavaScript Array reduce() Method](https://www.w3schools.com/jsref/jsref_reduce.asp)

## Warm up add the sum of a bunch of arrays given as arguments

SQ Add the sum of an array, convert multiple arrays into one

Can use a Variadic Approach

```javascript
const sumArrays - function () {
    const arrays = Object.values(arguments);
    console.log(arrays.flat()):
    return sumArray(arrays.flat()
}

const sumArrays = function () {
    const arrays = Array.from(arguments);
    console.log(arrays.flat())
    return sumArray(arrays.flat())
}
```

Basically puts everything into an array (Object.values) allowing it to be added together (with flat)

[Left-Variadic Functions in JavaScript](https://raganwald.com/2015/04/03/left-variadic.html)
