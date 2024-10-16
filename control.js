// 1
let Arr1 = [1, 5, "4", "hello"];
let Arr2 = [true, 2, {}, ["a"], 222];


let elementArr1 = Arr1[1];
let elementArr2 = Arr2[1];

console.log(`Другий елемент з Arr1: ${elementArr1}`);
console.log(`Другий елемент з Arr2: ${elementArr2}`);


let sum = Number(elementArr1) + Number(elementArr2);
console.log(`Сума другіх елементів ${sum}`);

// 2
let stringsArray = ["lol", "gg", "kaka", "xd"];

console.log(`Перший елемент: ${stringsArray[0]}`);


stringsArray[stringsArray.length - 1] = "wadaheeeell";


console.log(`Оновлений масив: ${stringsArray}`);
// 3


// 4


// 5
const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
let total = 0;

total = cart[0] + cart[1] + cart[2] + cart[3] + cart[4] + cart[5] + cart[6] + cart[7] + cart[8] + cart[9];

console.log(total)
