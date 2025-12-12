# Short Responses

For this assessment, aim to write a response with the following qualities:

- [ ] Addresses all parts of the prompt
- [ ] Accurately uses relevant technical terminology
- [ ] Is free of grammar and spelling mistakes
- [ ] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Consider the code below which has a bug. Instead of printing the correct letter grade, it always prints `"Your grade is: undefined"`.

```js
const getLetterGrade = (score) => {
  let letter;
  if (score >= 90) {
    let letter = "A";
  } else if (score >= 80) {
    let letter = "B";
  } else if (score >= 70) {
    let letter = "C";
  } else {
    let letter = "F";
  }

  return "Your grade is: " + letter;
};

console.log(getLetterGrade(95)); // This should print "Your grade is: A"
console.log(getLetterGrade(82)); // This should print "Your grade is: B"
console.log(getLetterGrade(74)); // This should print "Your grade is: C"
console.log(getLetterGrade(65)); // This should print "Your grade is: F"
```

**Part A**: Explain why this bug is occurring. Use proper technical terminology.

**Part B**: Then, explain how you would fix it.

### Response 1

**Part A:**

The bug occurs because of **variable shadowing** and **block scope**.

Inside the `if`, `else if`, and `else` blocks, `let letter = "A"` its written; what this does is that each of these creates a **new variable** named `letter` that exists only **inside that block**. So you end up with **two** different letter variables

**Part B:**

In order to fix this error you need to **remove** the let inside the `if/else` blocks so that you **assign** a value to the **existing** outer variable instead of creating new block-scoped ones.

---

## Prompt 2

Read the following code:

```js
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = originalSettings;
newSettings.volume = 75;
console.log(originalSettings.volume);
```

**Part A:** What will be logged to the console? Why does this happen? Be sure to use precise technical terminology in your answer.

**Part B:** How would you modify the code so that changing `newSettings.volume` does NOT affect `originalSettings.volume`? Write the corrected code below your explanation.

### Response 2

**Part A:**

The console will log 75 and this happens because in JavaScript objects are stored by reference not value. So when we write `const newSettings = originalSettings;` what we are doing is that both variables are now pointing to the same reference in memory.

**Part B:**

To make sure that changing `newSettings` does not affect `originalSettings`, we must create a shallow copy of the object, like in the example below.

**Corrected Code:**

```js
// Fix this code so newSettings is a true copy
const originalSettings = { volume: 50, brightness: 80 };
const newSettings = { ...originalSettings };
newSettings.volume = 75;
console.log(originalSettings.volume);
```

---

## Prompt 3

Given this array of products and the code using `filter`:

```js
const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 700, inStock: false },
  { name: "Watch", price: 300, inStock: true },
  { name: "Tablet", price: 500, inStock: true },
];

const itemsInStock = products.filter((product) => {
  return product.inStock;
});
```

Walk through what happens in the first iteration of filter:

- What is the value of `product`?
- What gets returned from the callback?
- What happens with that returned value?

### Response 3

```js
// On the first iteration, filter looks at the first element of the array:
{ name: "Laptop", price: 1000, inStock: true };

// So now product is:
product = { name: "Laptop", price: 1000, inStock: true };

// What gets returned from the callback?
return product.inStock;

// Since product.inStock is true it returns:
true;

// What happens with that returned value?

// filter uses the returned value to decide whether to include this item in the new array or not.

// Because the callback returned true, the product is added to itemsInStock.

// So after the first iteration:

itemsInStock = [
  { name: "Laptop", price: 1000, inStock: true };
];
```
