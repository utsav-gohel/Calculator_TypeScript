let screenVal: any = document.querySelector("#screen");

let btn: any = document.querySelectorAll(".btn");

let item: any, btntext: any;
for (item of btn) {
  item.addEventListener("click", (e: any) => {
    btntext = e.target.innerText;
    screenVal.value = screenVal.value + btntext;
  });
}

const sin = (): void => {
  screenVal.value = Math.sin(screenVal.value);
};
const cos = (): void => {
  screenVal.value = Math.cos(screenVal.value);
};
const tan = (): void => {
  screenVal.value = Math.tan(screenVal.value);
};
const pow = (): void => {
  screenVal.value = Math.pow(screenVal.value, 2);
};
const sqrt = (): any => {
  screenVal.value = Math.sqrt(screenVal.value);
};
const log = (): void => {
  screenVal.value = Math.log10(screenVal.value);
};
const pi = (): void => {
  screenVal.value = Math.PI;
};
const e = (): void => {
  screenVal.value = Math.exp(screenVal.value);
};

const fact = (): void => {
  let i, num, f;
  f = 1;
  num = screenVal.value;
  for (i = 1; i <= num; i++) {
    f = f * i;
  }
  i = i - 1;
  screenVal.value = f;
};
const backspc = (): void => {
  screenVal.value = screenVal.value.substr(0, screenVal.value.length - 1);
};

let ms: any;
const memory_store = (): void => {
  ms = screenVal.value;
  screenVal.value = "";
  console.log(ms);
};

const memory_clear = (): void => {
  ms = "";
  screenVal.value = "";
};

const memoryPlus = (): void => {
  screenVal.value = Number(screenVal.value) + Number(ms);
  ms = screenVal.value;
};

const memoryMinus = (): void => {
  screenVal.value = Math.abs(Number(screenVal.value) - Number(ms));
  ms = screenVal.value;
};

const memory_read = (): void => {
  screenVal.value = ms;
};

const syntaxError = () => {
  if (eval(screenVal.value) == SyntaxError) {
    screenVal.value = "Syntax Error";
  }
};

const onebyx = (): void => {
  screenVal.value = 1 + "/" + screenVal.value;
};

const ln = (): void => {
  screenVal.value = Math.log(screenVal.value);
};

const absolute = (): void => {
  screenVal.value = Math.abs(screenVal.value);
};
const plusMinus = (): void => {
  if (screenVal.value.charAt(0) === "-") {
    screenVal.value = screenVal.value.slice(1);
  } else {
    screenVal.value = "-" + screenVal.value;
  }
};

const power = (): void => {
  screenVal.value = Math.pow(10, screenVal.value);
};

const random = (): void => {
  screenVal.value = Math.random();
};
