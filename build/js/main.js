"use strict";
let screenVal = document.querySelector("#screen");
let btn = document.querySelectorAll(".btn");
let item, btntext;
for (item of btn) {
    item.addEventListener("click", (e) => {
        btntext = e.target.innerText;
        screenVal.value = screenVal.value + btntext;
    });
}
const sin = () => {
    screenVal.value = Math.sin(screenVal.value);
};
const cos = () => {
    screenVal.value = Math.cos(screenVal.value);
};
const tan = () => {
    screenVal.value = Math.tan(screenVal.value);
};
const pow = () => {
    screenVal.value = Math.pow(screenVal.value, 2);
};
const sqrt = () => {
    screenVal.value = Math.sqrt(screenVal.value);
};
const log = () => {
    screenVal.value = Math.log10(screenVal.value);
};
const pi = () => {
    screenVal.value = Math.PI;
};
const e = () => {
    screenVal.value = Math.exp(screenVal.value);
};
const fact = () => {
    let i, num, f;
    f = 1;
    num = screenVal.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screenVal.value = f;
};
const backspc = () => {
    screenVal.value = screenVal.value.substr(0, screenVal.value.length - 1);
};
let ms;
const memory_store = () => {
    ms = screenVal.value;
    screenVal.value = "";
    console.log(ms);
};
const memory_clear = () => {
    ms = "";
    screenVal.value = "";
};
const memoryPlus = () => {
    screenVal.value = Number(screenVal.value) + Number(ms);
    ms = screenVal.value;
};
const memoryMinus = () => {
    screenVal.value = Math.abs(Number(screenVal.value) - Number(ms));
    ms = screenVal.value;
};
const memory_read = () => {
    screenVal.value = ms;
};
const syntaxError = () => {
    if (eval(screenVal.value) == SyntaxError) {
        screenVal.value = "Syntax Error";
    }
};
const onebyx = () => {
    screenVal.value = 1 + "/" + screenVal.value;
};
const ln = () => {
    screenVal.value = Math.log(screenVal.value);
};
const absolute = () => {
    screenVal.value = Math.abs(screenVal.value);
};
const plusMinus = () => {
    if (screenVal.value.charAt(0) === "-") {
        screenVal.value = screenVal.value.slice(1);
    }
    else {
        screenVal.value = "-" + screenVal.value;
    }
};
const power = () => {
    screenVal.value = Math.pow(10, screenVal.value);
};
const random = () => {
    screenVal.value = Math.random();
};
