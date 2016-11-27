let obj = {a: 12};
let s1 = Symbol("my symbol");
let s2 = Symbol("my symbol");

Object.defineProperty(obj, s1, {
    enumerable: false
});

obj[s2] = "";

console.log(Object.getOwnPropertySymbols(obj));