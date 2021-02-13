console.log("1.Вывести на страницу в одну строку через запятую числа от 10 до 20");
let result = " ";
for (let i = 10; i <= 20; i++) {
    result += i + ",";
}
console.log(result);
console.log(" ");

console.log("2.Вывести квадраты чисел от 10 до 20");

for (let i = 10; i <= 20; i++) {
    let resultSquer;
    resultSquer = i * i;
    console.log("квадрат" + " " + i + " = " + resultSquer);
}
console.log(" ");

console.log("3.Вывести таблицу умножения на 7");

for (let i = 1; i <= 9; i++) {
    let firstTamle;
    firstTamle = 7 * i;
    console.log(`7 * ${i} = ${firstTamle}`);
}
console.log(" ");

console.log("4.Найти сумму всех целых чисел от 1 до 15");

let resultSum = 0;
for (let i = 1; i <= 15; i++) {
    resultSum += + i;
}
console.log(`сумма равна : ${resultSum}`);
console.log(" ");

console.log("5.Найти произведение всех целых чисел от 15 до 35");

let multiplication = 0;
for (let i = 15; i <= 35; i++) {
    multiplication += i * i;
}
console.log(`призведение равно :${multiplication}`);
console.log(" ");

console.log("6.Найти среднее арифметическое всех целых чисел от 1 до 500");

let averageSum = 0;
let average = 0;
for (let i = 1; i <= 500; i++) {
    averageSum += + i;

}
average = averageSum / 500;
console.log(`среднее арифметическое : ${average}`);
console.log(" ");

console.log("7.Вывести на страницу сумму только четных чисел в диапазоне от 30 до 80");

let evenSum = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        evenSum += +i;
    }

}
console.log(`Cумм только четных чисел : ${evenSum}`);
console.log(" ");

console.log("8.Вывести на страницу все числа в диапазоне от 100 до 200 кратные 3");
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}
console.log(" ");

console.log("9.Дано натуральное число. Найти и вывести на страницу все его делители.Определить количество его четных делителей Найти сумму его четных делителей");
let number = Number(prompt('введите чисдо для задания 9'));
let numberSum = 0;
if (!Number.isNaN(number)) {
    for (let i = 1; i <= 9; i++) {
        if (number % i === 0) {
            console.log(`${i} : делитель числа  ${number}`);
            if (i % 2 === 0) {
                numberSum += +i;
            }
        }

    }
    console.log(`сумма четных делителей :${numberSum}`);
} else {
    alert("вы ввели не число");
}

console.log(" ");

console.log("10.Напечатать полную таблицу умножения от 1 до 10");
for (let i = 1; i <= 9; i++) {
    for (j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}

console.log(" ");

console.log("11 Игра")
let randomNUmber = Math.trunc(Math.random() * 10);
console.log(randomNUmber);
let userNUmber = prompt("Введите число от 0 до 9");
for(i = 0 ;; i++){
    if(userNUmber == randomNUmber){
        console.log("Победа!!!");
        break;
    }
    if(userNUmber !== randomNUmber){
        userNUmber = prompt("Введите число от 0 до 9");
    }
    if(userNUmber == null){
        console.log("end");
        break;
    }
}


   











