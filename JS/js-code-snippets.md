# Code Snippets for JS

## *CS* Randomly created a number

```js
// Generate a random number between 2 and 10, including both 2 and 10
function generateRandomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let value5 = generateRandomIntegerInRange(2, 10);
```

Other ways of generating numbers [Creating Javascript Random Numbers with Math.random() | Udacity](https://www.udacity.com/blog/2021/04/javascript-random-numbers.html#:~:text=Generating%20Javascript%20Random%20Numbers,it%20will%20never%20be%201.)

## Toggle a button

[html - Javascript toggle switch using data - Stack Overflow](https://stackoverflow.com/questions/44565816/javascript-toggle-switch-using-data)

```html
<h2>Toggle Switch</h2>

<label class="switch">
  <input type="checkbox">
  <div class="slider"></div>
</label>
```

```css
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
```

```js
document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      // do this
      console.log('Checked');
    } else {
      // do that
      console.log('Not checked');
    }
  });
});
```

# Creating elements and classes

```js
function createDuck () {
//      i.   create the element
const duck = document.createElement("div");
//      ii.  add a class to the element
duck.classList.add("duck");
//      iii. append the element to the body
document.body.appendChild(duck);
}
```

[HTML DOM Document createElement() Method](https://www.w3schools.com/jsref/met_document_createelement.asp)

https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element

# Finding the filename of a page

```js

```
