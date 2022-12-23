# Primitives & Conditionals

## Workshop week 1 day 2

### Section 1

Create a variable called `age` and assign it to your age (or any arbitrary number). Write a conditional that matches the following conditions:

- if `age` is less than or equal 19, output `"You're still a teenager!"`

---

### Section 2

Create a variable called `a` and assign it a number. Write a conditional that matches the following conditions:

- if a % 2 is equal to 0, output `"After running our calculations, the result is even"`
- otherwise, output `"After running our calculations, the result is odd"`

---

### Section 3

Create a variable called `b` and assign it a random number between 0 and 100. Write a conditional that matches the following conditions:

- if `b` is less than or equal to 25, output `"bottom quartile"`
- if `b` is between 25 and/or equal to 50, output `"lower quartile"`
- if `b` is between 50 and/or equal to 75, output `"upper quartile"`
- if `b` is between 75 and/or equal to 100, output `"top quartile"`

---

### Section 4

_On the menu tonight: Steak, fruit salad, tofurkey, and pork chops._

Ask the user (use the [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function) for their menu choice and assign it to a variable.  Write a conditional that matches the following conditions:

- If a vegan can eat it, output `"This cuisine is vegan friendly."`
- Otherwise, output `"Vegans beware!"`

For the sake of this exercise, Tofurkey is definitely vegan friendly.

**Hint**: Two identical strings are considered to be equal to each other.

--- 

### Section 5

- Implement the flowchart below in code.

![Flowchart](https://i.imgur.com/m9UJDTy.png)

---

# Comparison Operators, Logical Operators, & Conditionals

### Getting Started

1. Fork this repo and `git clone` it down to your computer.

2. Create two files `index.html` and `script.js`.

3. Include `script.js` in `index.html` using a `<script>` tag.

4. Open `index.html` in your web browser and open the console.

5. After answering each section below, `git commit` your work.

6. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request.

---

### Booleans & Comparison Operators

You don't need to do this section in your `script.js` file. Just write your answers directly in the markdown tables below.

Here's an example truth table for the `!` (not) operation. In it, we're listing the values of `!a` that correspond with a given value of `a`.

| a | !a |

|-------|-------|

| true | false |

| false | true |

Fill out the truth tables below for `&&` (AND), `||` (OR) and one that uses multiple comparison operators. All you need to do is replace the `?`'s with either `true` or `false`.

> **NOTE:** Because of markdown formatting, `||` and `&&` have been replaced with `OR` and `AND` respectively.

> 

> **HINT:** With the last one, it may be helpful to add additional columns to the table for each individual comparison.

| a | b | a AND b |

|-------|-------|---------|

| true | true | true |

| true | false | false |

| false | true | false |

| false | false | true |

| a | b | a OR b |

|-------|-------|--------|

| true | true | true |

| true | false | true |

| false | true | true |

| false | false | true |

| a | b | a `!=` b |

|---|-----|----------|

| 3 | 3 | true |

| 1 | 5 | true |

| 2 | "2" | true |

| a | b | !a AND (a OR b) |

|-------|-------|-----------------|

| true | true | false |

| true | false | true |

| false | true | false |

| false | false | true |

---

### Exam Marks

Create a variable called `studentScore` and assign it a number between 0 and 100. Write a conditional that matches the following conditions:

- If a student scores 80 or more, tell them they've got an A.

- If they score 70 or more, tell them they've got a B.

- If they score 60 or more, tell them they've got a C.

- If they score 50 or more, tell them they've got a D.

- If they score below 50, tell them they have to re-take the exam.

### Pizza/Pasta

1. Use the [`prompt()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt) function to record what a user would like to eat in a variable

2. Check if they like pizza, and if they do then output `"yay pizza!!"`

3. Otherwise check if they like pasta, and if they do then output `"ooh I love pasta!!"`

4. If they don't like either one, then output `"brussel sprouts for you!"`

---

### Bouncer 1

You're a bouncer at a bar. Create an `age` variable and a conditional that satisfies the following requirements...

- If a patron is older than `21`, output `"Come on in!"`.

- If a patron is between `18` and `21`, output `"Come on in (but no drinking)!"`.

- If a patron is younger than 18, output `"You're too young to be in here!"`.

- If a patron is older than 75, output `"Are you sure you want to be here?"`.

---

### Bouncer 2

Bar patrons must have an ID if the bouncer is even going to consider what age they are.

- If the patron has an ID, the bouncer will then check if they are of the proper age

- If the patron does not have an ID, the bouncer will tell them `"No ID, no entry."`

> Hint: Whether the patron has an ID or not can be stored in a `hasId` variable. What do you think the stored data type should be?

---

### Valentine's Day Flowchart

- Implement the flowchart below in code.

![](https://venngage-wordpress.s3.amazonaws.com/uploads/2018/02/flow-chart-template-1.png)

---

### Letter to Santa Flowchart

- Implement the flowchart below in code.

- For each node in the flowchart that isn't a question, output the text to the console.

i.e.

```js
console.log('Write your wishlist and letter to Santa.')

console.log('Address your envelope with "1 Candy Cane Lane, North Pole".')
```

![Flowchart](https://i.imgur.com/CfhdkQg.jpg)

Github Answers: [GitHub - Jeffrey-Fazal/js-conditionals](https://github.com/Jeffrey-Fazal/js-conditionals)

---

# Variables, Primitive Types, & Operators

### Getting Started

1. Fork this repo and `git clone` it down to your computer.

2. Create two files `index.html` and `script.js`.

3. Include `script.js` in `index.html` using a `<script>` tag.

4. Open `index.html` in your web browser and open the console.

5. After answering each section below, `git commit` your work.

6. When you're finished or when time is up, push your work to your remote repo and file a Pull Request.

---

### Fortune Teller

Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables

- job title

- geographic location

- favourite sport

- side project

Using the variables you defined, output your fortune to the console like so:

```js
"You will be a Programmer in Portugal, playing Tennis while building a Flying Car."
```

---

### Temperature Converter

Google the formula for converting from Celsius to Fahrenheit and vice versa.

Store a celsius temperature into a variable.

Convert it to fahrenheit and output:

```js
"__°C is __°F".
```

Now store a fahrenheit temperature into a variable.

Convert it to celsius and output:

```js
"__°F is __°C".
```

---

### Age Calculator

- Create a variable that contains your birth year.

- Create a variable that contains an arbitrary, future year.

- Calculate your 2 possible ages for that year based on the stored values.

- For example, if you were born in 1996, then in 2022 you'll be either 25 or 26, depending on the month.

- Output to the screen, substituting the correct values like so:

```js
"I will be either __ or __ in YYYY".
```

---

### Data Types

For each expression, predict what you think the output will be in a comment (`//`) ***without first running the command***. Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

#### Example

```js
typeof "potato"

// Prediction: Vegetable

// Actual: String
```

What is the output of each of the expressions below?

```js
typeof 15

// Prediction:

// Actual:



typeof 5.5

// Prediction:

// Actual:



typeof NaN

// Prediction:

// Actual:



typeof "hello"

// Prediction:

// Actual:



typeof true

// Prediction:

// Actual:



typeof 1 != 2

// Prediction:

// Actual:



console.log("hamburger" + "s")

// Prediction:

// Actual:



console.log("hamburgers" - "s")

// Prediction:

// Actual:



console.log("1" + "3")

// Prediction:

// Actual:



console.log("1" - "3")

// Prediction:

// Actual:



console.log("johnny" + 5)

// Prediction:

// Actual:



console.log("johnny" - 5)

// Prediction:

// Actual:



console.log(99 * "luftbaloons")

// Prediction:

// Actual:



console.log(5 + true)

// Prediction:

// Actual:



console.log(5 + false)

// Prediction:

// Actual:
```

What's going on in the second half of the previous question (`"hamburgers" - "s"` onwards)? Are there any "rules" we can pull from those examples? [Further reading](https://javascript.info/type-conversions).

[GitHub - Jeffrey-Fazal/js-primitives](https://github.com/Jeffrey-Fazal/js-primitives)

# JavaScript Loops Part 1

### Getting Started

1. Fork this repo and `git clone` it down to your computer

2. Create two files `index.html` and `script.js`

3. Include `script.js` in `index.html` using a `<script>` tag

4. Open `index.html` in your web browser and open the console

5. After answering each section below, `git commit` your work

6. When you're finished or when time is up, push your work to your remote repo, file a Pull Request, and react with a green check on Zoom

---

### Every 2

Using a `for` loop, print every second number e.g. 0, 2, 4, 6, 8.

### 9 to 3

Using a `for` loop, print backwards from 9 to 3 e.g. 9, 8, 7, 6, 5, 4, 3.

### 9 Times Table

Write a program that prints exactly the following using a `for` loop:

```text
9 Times Table

================

9 times 0 is 0

9 times 1 is 9

9 times 2 is 18

9 times 3 is 27

9 times 4 is 36

9 times 5 is 45

9 times 6 is 54

9 times 7 is 63

9 times 8 is 72

9 times 9 is 81

9 times 10 is 90

================
```

### Even/Odd Reporter

Use a `for` loop that will iterate from 1 to 20. For each iteration, check if the current number is even or odd, and log it in the console (e.g. "2 is even").

```text
1 is odd

2 is even

3 is odd

4 is even

5 is odd

// etc
```

[github.com/Jeffrey-Fazal/js-loops-01.git]()

---

# Intro to Functions

### Getting Started

1. Fork this repo and `git clone` it down to your computer
2. Create two files `index.html` and `script.js`
3. Include `script.js` in `index.html` using a `<script>` tag
4. Open `index.html` in your web browser and open the console
5. After answering each section below, `git commit` your work
6. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request.

---

### The Introduction

Write a function named `greetings` that:

- takes 1 argument, a name
- when called for example `greetings('Skitter')` should console.log "Nice to meet you Skitter!"
- when called for example `greetings('Tattletale')` should console.log "Nice to meet you Tattletale!"

---

### How Much Land

Write a function called `howMuchLand` that:

- takes 2 arguments: `length` and `width`
- when called, it multiplies the length and width to calculate the area of land
- `return`s an output similar to below

```
console.log(howMuchLand(30, 20)) // -> "You have this many square metres of land: 600"
```

---

### Which Number is Bigger?

Write a function named `greaterNum` that:

- takes 2 arguments, both numbers.
- returns whichever number is the greater (higher) number.
- Call that function 2 times with different number pairs, and console.log the output to make sure it works (e.g. "The greater number between 5 and 10 is 10.").

---

### Grade Assigner

Write a function named assignGrade that:

- takes 1 argument, a number score.

- returns a grade for the score, either "A", "B", "C", "D", or "F".

- Call that function for a few different scores and log the result to make sure it works.
  
  A few examples:
  
  ```js
  assignGrade(83) // -> returns "A"
  assignGrade(68) // -> returns "C"
  assignGrade(52) // -> returns "D"
  ```

github.com/Jeffrey-Fazal/js-functions-01.git

---

# Arrays

### Getting Started

1. Fork this repo and `git clone` it down to your computer
2. Create two files `index.html` and `script.js`
3. Include `script.js` in `index.html` using a `<script>` tag
4. Open `index.html` in your web browser and open the console
5. After answering each section below, `git commit` your work
6. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

### Movie Quotes

1. Create an array that contains at least three quotes from your favourite movie and store it in a variable called `quotes`.
2. console.log your second favourite quote
3. console.log your last favourite quote
4. console.log the number of quotes in your array (without hardcoding the number)
5. Change the first quote to a different one and console.log the `quotes` array

### `for` vs `for..of`

Copy and paste this array into your `script.js` file.

```js
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
```

1. Write a loop that prints out the index number of each letter and the letter itself.
   
   i.e.
   
   ```text
   0 - a
   1 - b
   2 - c
   3 - d
   4 - e
   5 - f
   6 - g
   ```

2. Write a `for..of` loop that prints out each letter (no index numbers this time)
   
   i.e.
   
   ```text
   a
   b
   c
   d
   e
   f
   g
   ```

---

### Sum

Copy and paste this array into your `script.js` file.

```js
const numbers = [23, 19, 23, 52, 12]
```

1. Write a program that will loop over the `numbers` array and sum all the values in a `sum` variable. Print the resulting sum when the loop is finished.

**Hint**: You'll need to declare the `sum` variable outside of the loop (what should be the starting value?) and use a compound assignment operator inside the loop.

---

### Wild Wild Life

Copy and paste these arrays into your `script.js` file.

```js
// name, species, age, hometown
let wolfy = ['Wolfy', 'wolf', 16, 'Yukon Territory']
let sharky = ['Sharky', 'shark', 20, 'Left Coast']
let plantee = ['Plantee', 'plant',  5000 , 'Mordor']
let porgee = ['Porgee', 'Porg', 186, 'Ahch-To']
let dart = ['D'Art' , 'Demogorgan Dog', 2, 'Upside Down']
```

1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
3. Give D'Art a second hometown by adding "Hawkins"
4. Remove "Wolfy" from the wolfy array and replace it with "Gameboy".

---

### Yell at the Ninja Turtles

Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)

Loop over the ninja turtles array and console.log each turtle's name in upper case:

```text
DONATELLO
LEONARDO
RAPHAEL
MICHAELANGELO
```

Do a web search (Google, Bing, DDG, whatever) for "javascript uppercase string" to find documentation on what it is and how to use it. As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own.

Jeffrey-Fazal/js-arrays-01.git

---

# JavaScript Loops Part 2

### Getting Started

1. Fork this repo and `git clone` it down to your computer
2. Create two files `index.html` and `script.js`
3. Include `script.js` in `index.html` using a `<script>` tag
4. Open `index.html` in your web browser and open the console
5. After answering each section below, `git commit` your work
6. When you're finished or when time is up, push your work to your remote repo, file a Pull Request, and react with a green check on Zoom

---

### Count to 9

Using a `while` loop, print out numbers from 0 to 9 e.g. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9

### Every 2

Using a `while` loop, print every second number up to 8 e.g. 0, 2, 4, 6, 8

---

## Guess The Number

You will build a basic "guess the number" game. Your game should keep asking the user to guess a number until they get it correct.

Look up the [`parseInt` function](https://www.w3schools.com/jsref/jsref_parseint.asp) for explicitly coercing the user's guess into a number type.

### Specification:

- Create a variable that contains a whole number between 0 and 10. This is the number that the user will try to guess.
- The user should be asked to guess the number.
- If the user's guess is correct, the user should see a congratulatory message and the game should end.
- If the user's guess is not correct, the user should be asked to guess the number again.

### Extensions

- Each time the user guesses incorrectly, give them some feedback: "Wrong, guess higher!" or "Wrong, guess lower!".
- Rather than hard-coding the number the user is trying to guess in a variable, generate a random whole number (do a web search for "JavaScript random whole number").

Jeffrey-Fazal/js-loops-02.git

---

# Array Methods with Callbacks

### Getting Started

1. Fork this repo and `git clone` it down to your computer
2. Create two files `index.html` and `script.js`
3. Include `script.js` in `index.html` using a `<script>` tag
4. Open `index.html` in your web browser and open the console
5. After answering each section below, `git commit` your work
6. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

Given the following array of `horses`:

```js
const horses = [
  {
    name: 'maythehorsebewithu',
    active: true,
    country: 'AUS',
    yearOfBirth: 2000,
    hourlyRate: 30,
    numOfHoursWorked: 2000
  },
  {
    name: 'Seabiscuit',
    active: true,
    country: 'USA',
    yearOfBirth: 2007,
    hourlyRate: 50,
    numOfHoursWorked: 2500
  },
  {
    name: 'Justify',
    active: true,
    country: 'USA',
    yearOfBirth: 2004,
    hourlyRate: 30,
    numOfHoursWorked: 2000
  },
  {
    name: 'Lost in the Fog',
    active: false,
    country: 'AUS',
    yearOfBirth: 1981,
    hourlyRate: 88,
    numOfHoursWorked: 900
  },
  {
    name: 'Eclipse',
    active: false,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 12,
    numOfHoursWorked: 9000
  },
  {
    name: 'Citation',
    active: true,
    country: 'AUS',
    yearOfBirth: 2003,
    hourlyRate: 42,
    numOfHoursWorked: 6450
  }
]
```

Write code to do the following (sometimes it helps to write each solution in a `for` loop first):

1. Use `.forEach` to print the name of each horse.
   
   Expected output:
   
   ```text
   maythehorsebewithu
   Seabiscuit
   Justify
   Lost in the Fog
   Eclipse
   Citation
   ```

2. Use `.map` to return an array of the years of birth for each horse.
   
   Expected output:
   
   ```text
   [2000, 2007, 2004, 1981, 2003, 2003]
   ```

3. Use `.filter` to filter in only the active horses.
   
   Expected output:
   
   ```text
   [
   {name: 'maythehorsebewithu', active: true, country: 'AUS', yearOfBirth: 2000, hourlyRate: 30, …},
   {name: 'Seabiscuit', active: true, country: 'USA', yearOfBirth: 2007, hourlyRate: 50, …},
   {name: 'Justify', active: true, country: 'USA', yearOfBirth: 2004, hourlyRate: 30, …},
   {name: 'Citation', active: true, country: 'AUS', yearOfBirth: 2003, hourlyRate: 42, …}
   ]
   ```

4. Use the appropriate method(s) to select the horses from Australia.
   
   Expected output:
   
   ```text
   [
   {name: 'maythehorsebewithu', active: true, country: 'AUS', yearOfBirth: 2000, hourlyRate: 30, …},
   {name: 'Lost in the Fog', active: false, country: 'AUS', yearOfBirth: 1981, hourlyRate: 88, …},
   {name: 'Eclipse', active: false, country: 'AUS', yearOfBirth: 2003, hourlyRate: 12, …},
   {name: 'Citation', active: true, country: 'AUS', yearOfBirth: 2003, hourlyRate: 42, …}
   ]
   ```

5. Use the appropriate method(s) to select horses that earn $50 or more per hour.
   
   Expected output:
   
   ```text
   [
   {name: 'Seabiscuit', active: true, country: 'USA', yearOfBirth: 2007, hourlyRate: 50, …},
   {name: 'Lost in the Fog', active: false, country: 'AUS', yearOfBirth: 1981, hourlyRate: 88, …}
   ]
   ```

6. Use the appropriate method(s) to get a list of the totals earned by each horse.
   
   Expected output:
   
   ```text
   [60000, 125000, 60000, 79200, 108000, 270900]
   ```

### BONUS

Use the appropriate method to return horses from youngest to oldest **hint:** look up "JS `sort` compare function".

```
Expected output:
``` text
[
  {name: 'Seabiscuit', active: true, country: 'USA', yearOfBirth: 2007, hourlyRate: 50, …},
  {name: 'Justify', active: true, country: 'USA', yearOfBirth: 2004, hourlyRate: 30, …},
  {name: 'Eclipse', active: false, country: 'AUS', yearOfBirth: 2003, hourlyRate: 12, …},
  {name: 'Citation', active: true, country: 'AUS', yearOfBirth: 2003, hourlyRate: 42, …},
  {name: 'maythehorsebewithu', active: true, country: 'AUS', yearOfBirth: 2000, hourlyRate: 30, …},
  {name: 'Lost in the Fog', active: false, country: 'AUS', yearOfBirth: 1981, hourlyRate: 88, …}
]
```

```
[GitHub - seic60anz-unit-1/js-array-methods](https://github.com/seic60anz-unit-1/js-array-methods)
```

---

# Higher Order Functions & Callbacks

### Getting Started

1. Fork this repo and `git clone` it down to your computer
2. Create two files `index.html` and `script.js`
3. Include `script.js` in `index.html` using a `<script>` tag
4. Open `index.html` in your web browser and open the console
5. After answering each section below, `git commit` your work
6. When you're finished or when time is up, push your work to your remote repo, and file a Pull Request

---

### Callback Drills

Follow these steps:

1. Create a function that takes a parameter and logs it
2. Create a second function that logs 'hi'
3. Call the first function, passing in the second function as an argument
4. You should see a function reference being logged
5. Alter the first function so that it calls its parameter
6. If you did these steps correctly, you should get a log of 'hi'

---

### Guess the Log

Write your guesses as a comment in `script.js`. Run the code after you guess to see if you were correct.

1. Guess what this will log:
   
   ```js
   const foo = (param, param2) => {
   param(param2)
   }
   
   const bar = (param) => {
   console.log(param)
   }
   
   foo(bar, 'hi')
   ```

2. Guess what this will log:
   
   ```js
   const foo = (param1, param2) => {
   param1(param2)
   }
   
   const baz = (param) => {
   console.log(param.toUpperCase())
   }
   
   foo(baz, 'hello')
   ```

3. Guess what this will log:
   
   ```js
   const foo = (param, param2) => {
   param(param2, 'hello')
   }
   
   const bar = (param, param2) => {
   console.log(param2)
   }
   
   foo(bar, 'hi')
   ```

---

### Electric Mixer

![electric mixer](https://i.imgur.com/zwwHz2L.jpg)

A callback is like an electric mixer attachment. Each mixer attachment *does* something different: slice, dice, spiralise, and all sorts of fancy things depending on the attachment.

The electric mixer also *does* something: it **uses** the mixer attachment.

1. Write a function `electricMixer` that takes one parameter named `attachment`. The `electricMixer` function should console log `"This mixer is now: _____"` plus the return value of the attachment.

2. Write at least 3 attachments for the electric mixer. Each attachment is a function that returns what it's doing.
   
   i.e.
   
   ```js
   const spiraliser = () => {
   return "spiralising"
   }
   ```

3. Call `electricMixer` 3 or more times, passing in each of your attachments as arguments.

Example:

```javascript
electricMixer(spiraliser)
electricMixer(dicer)
electricMixer(grinder)

// Console should show:
// "This mixer is now: spiralising"
// "This mixer is now: dicing"
// "This mixer is now: grinding meat"
```

github.com/Jeffrey-Fazal/js-hof-callbacks.git

---

### Pattern Printer

Write a function in Javascript called PatternPrinter that takes a number shown as a range and returns a string. This string will show a pattern in the console of starting at 1 and adding to the string each time you go through the loop.

- You will need to use nested loops

### Examples

```JS
printPattern(8);
/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */
```
