// function rentalCarCost(d) {
//   if (d == 3 && d < 7) {
//     let totalAmount = d * 40 - 20;
//     return totalAmount;
//   } else if (d == 7 && d > 7) {
//     let totalAmount = d * 40 - 50;
//     return totalAmount;
//   } else {
//     return d * 40;
//   }
// }

// console.log(rentalCarCost(4));

// const invert = arr  => {
//   const result = []
//   for(let i = 0; i < arr.length; i++) {
//     let signCheck = Math.sign(arr[i])
//     if(signCheck === -1){
//       let invertedFalse = Math.abs(arr[i])
//       result.push(invertedFalse)
//     }else if(signCheck === 1){
//       let invertedTrue = -Math.abs(arr[i])
//       result.push(invertedTrue)
//     }
//   }
//   return result
// }

// let array1 = [13,3,-3,2]

// console.log(invert(array1))

// function cockroachSpeed(s) {
//   let converted = Math.round(s);
//   if (converted >= 0) {
//     Math.floor(converted);
//   }
//   let convertToCm = Math.round(converted * 30);
//   return convertToCm;
// }
// console.log(cockroachSpeed(2.0597705722374924));

// function even_or_odd(number) {
//   const isEven = 13 % 2 == 0;
//   if (isEven === true) {
//     console.log('Even');
//   } else if (isEven === false) {
//     console.log('Odd');
//   }
// }

// even_or_odd(3)

// function countSheeps(arrayOfSheep) {
//   let result = 0;
//   arrayOfSheep.forEach((item) => {
//    return item === true ? result++: 'ee'
//   })
//   return result
// }
// const array1 = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];
// console.log(countSheeps(array1))

// function setAlarm(employed, vacation){
//  return employed ? true : false
// }
// console.log(setAlarm(true,true))
// function setAlarm(employed, vacation) {
//   if(employed === true ) {
//     return true
//   }
// }
// console.log(setAlarm(true,true))

// const greet = (str) => {
//   return str
// };

// greet('hello world!');

// function positiveSum(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let checkNum = Math.sign(arr[i]);
//     checkNum == 1 || 0  ? result += arr[i] : result += 0
//   }
//   return result
// }
// const array1 = [1, -4, 7, 12];
// console.log(positiveSum(array1))

// function check(a, x) {
//  return a.includes(x)
// }
// const array1 = [1,34,3]
// console.log(check(array1,4))

// function getSumOfDigits(integer) {

//  const splitArr = Array.from('' + integer)
//  const resSplitMap = splitArr.map(Number)
//  return resSplitMap.reduce((a,b) => a + b)
// }
// console.log(getSumOfDigits(123))

// const stringToNumber = function (str) {
//  return Number(str);
// }

// const convert = string => {
//   const resOfStr = string.split(' ')
//   return resOfStr

// }
// console.log(convert('Syimyk Mitalipov '))

// const trem = (s) => {
//   return s.split(' ').join('')
// }
// console.log(trem('syi myk mital ipov '))

// function areYouPlayingBanjo(name) {
//   if (name[0] === 'R' || name[0] === 'r') {
//     return name + ' plays banjo';
//   } else {
//     return name + ' does not play banjo';
//   }
// }

// console.log(areYouPlayingBanjo('Sobert'));

// function descendingOrder(n){
//   const checkNum = n.split(' ').join('')
//   const resofMap = checkNum.map(Number)
// }
// console.log(descendingOrder(67404))

// function countBy(x, n) {
//   let z = [];
//   for(let i = x; i < n + 1;i++){
//     z.push(i)
//   }
//   return z
// }
// console.log(countBy(1,10))
// const str1 = "How can mirrors be real if our eyes aren't real"
// String.prototype.toJadenCase = function () {
//     const result = ''
//     let thisStr = this
//     for(let i = 0; i < thisStr.length; i++) {
//       return result
//     }
// };
// console.log(str1.toJadenCase())

// String.prototype.toJadenCase = () => {
//   let result = [];
//   const thisStr = this;
//   let s = '';
//   for (let i = 0; i < thisStr.length; i++) {
//     if (str1[i] !== ' ' && i != str1.length) {
//       s += str1[i];
//       result.push(s)
//     } else {
//       result.push(s);
//       s = '';
//     }
//   }
//   return result
// };

// const str1 = 'Syimyk Mitalipov';

// console.log(str1.toJadenCase());


// function sum (numbers) {
//     "use strict";
//     let result = null
//      numbers ? result += numbers.reduce((num, acc) => num + acc) : 0
//      return result
// };
// console.log(sum([1, 5.2, 4, 0, -1]));


// function digits(n) {
//  let result = 0
//     const convertToStr = String(n)
//     const resOfSplit = convertToStr.split('')
//     resOfSplit.forEach((num) => {
//         return result += 1
//     })
//     return result
// }

// console.log(digits(1000))

// const squareNum = (num) => {
//     let result = ''
//     const resOfSplit = num.toString().split('')
//      for(let res of resOfSplit)  {
      
//       result += Math.pow(Number(res) , 2)
//      }
//      return Number(result)
// }
// console.log(squareNum(66))

// const isAviableMessage = (message) => {
//     for(num of message) {
//         isNaN(num)
        
//    }
    
// }
// console.log(isAviableMessage("3hey5hello2hi"))
// const reverse = (elem) => {
//     return elem.split('').reverse().join('')
// }
// console.log(reverse('sasss'))

// const array1 = [1,3,4]


// Array.prototype.myMap = function(callback) {
//     let result = [];
//     const thisArray = this;
//     for(let i = 0; i < thisArray.length; i++) {
//         result.push(callback(thisArray[i] , i , thisArray))
//     }
//     return result;
// }



// console.log(array1.myMap((el,i) => {
//     return el + 2
// }))


// function doubleChar(str) {
//     const resOfSplit = str.split('')
//    return resOfSplit.map((elem,i) => elem + elem).join('')
// }

// console.log(doubleChar('123'))



// function min(arr, toReturn) {
//     return toReturn === 'value' ? arr[0] : toReturn === 'index' ? arr.indexOf(arr[0]): null
// }

// console.log(min([2, 2, 3, 4, 5] , 'index'))


// function reverseWords(str) {
//   let result = ''
//  str.split(' ').map((elem) => elem.split('').reverse().join('')).forEach(element => {
//   result +=  ' ' + element
//  });
// return result
// }

// console.log(reverseWords('The quick brown fox jumps over the lazy dog.'))
// function removeChar(str) {
//   return str.slice(1, -1)

// };
// console.log(removeChar('Syimyk'))













// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   syimyk: "Mitalipov",
//   email: "johndoe@stackabuse.com",
//   age: 37,
//   hobby: "Singing"
// };
// const names = Object.keys(user).
//   filter((key) => key.includes('syimyk')).
//   reduce((cur, key) => { return Object.assign(cur, { [key]: user[key] }) }, {});


//   console.log(names)


// const wordReverse  = (word) => {
//   return [...word].reverse().join('')
// }
// console.log(wordReverse('syimyk'))

 

// const numReverse = (num) => {
//   return parseInt((num < 0 ? '-' : '') + String(Math.abs(num)).split('').reverse().join(''))
    
// }
// console.log(numReverse(245))

// console.log(Math.abs(12

// const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

// const count = fruitBasket.reduce((tally,fruit) => {
//   tally[fruit] = (tally[fruit] || 0) + 1
//   return tally
// },{})
// console.log(count)






