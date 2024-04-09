[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/-m0g1A8z)
# Pancake Sort

There is an abstract data type (ADT) called a *pancake array*, which provides
the function `flip(array, n)`, which takes the top (first) $n$ items in the
array and "flips them over", i.e. reverses their order.

For example, if you called `flip([1, 2, 3, 4], 2)`, the result would
be the array  `[2, 1, 3, 4]`, because the order of the (first) top 2
elements in the array has been reversed.

If $n$ is larger than the number of items in the array, the entire array gets
reversed. The intuition for the name "pancake array" is that with a stack of
pancakes, you can insert a spatula at any point in the stack and use it to flip
over all pancakes above that point.

Implement a sorting function that will sort an array of pancakes such that the
smallest pancake is at the top. You may use only the `flip()` function to
manipulate the array. You may break ties arbitrarily. Test your new function;
I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`, but it only tests
`pancakeSort()`, not `flip()`.

Hint: Start by thinking about the calls to `flip()` required to move a *single*
element into its correct position.

## Runtime Analysis

What is the asymptotic runtime ($\Theta$) of your algorithm in terms of the
number of comparisons? What is it in terms of the number of flips? Add your answer to this markdown file.

## Answer

### Number of Comparisons

#### TL;DR
The implementations number of comparisons is an element of $\mathrm{\Theta}(n^{2})$.

#### Reasoning

Since we initialize the `maxIndex` value in the `pancakeSort` function to be the largest *(rightmost)* element of the array, we know that `findMaxIndex` will always consider the entire input array at least once. That is, `findMaxIndex` is an element of $\mathrm{\Theta}(n)$. From there, the `while` loop has another `findMaxIndex` call nested within it, except the input size is decremented by exactly $1$ each time the `while` loop iterates. Since the `while` loop will continue to iterate until the `size` value is equal to $0$ but starts at the maximum input size $n$, we can expect the `while` loop to iterate approximately $n$ times disregarding any and all lower order terms. 

Therefore, the time function for `pancakeSort` is $\mathrm{T}(n) \approx n * n \implies \mathrm{T}(n) \approx n^{2}$. Note that I use the "$\approx$" symbol because I am dropping all constants and lower order terms for the sake of simplicity. In conclusion, we can contrive that the `pancakeSort` function is an element of $\mathrm{\Theta}(n^{2})$ since the `findMaxElement` function will be called $n$ times and take $n$ steps to complete each time. 

### Number of Flips

#### TL;DR
The implementations number of flips is an element of $\mathrm{\Theta}(n)$.

#### Reasoning

The number of flips is notably easier to discern since there are only two calls of the `flip` function in the implementation. The way `flip` operates, it will always take $n - c$ steps to complete where $n$ is the arbitrary size of the input array and $c$ is the difference between the `n` argument passed into `flip` and the value of `array.length`. Since the maximum value of $c$ is equal to the value of $n$, $c$ is asymptotically negligible which means that `flip` will always be an element of $\mathrm{\Theta}(n)$ each time the function is called. Since the only two calls of `flip` happen sequentially within the `while` loop, the number of flips can be modeled as: $\mathrm{F}(n) \approx n + n \implies \mathrm{F}(n) \approx 2n \implies \mathrm{F}(n) \in \mathrm{\Theta}(n)$.

