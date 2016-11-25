let x = {x: 12};
let y = {y: 13, __proto__: x}; // {x: 12, y: 13} 아님. 프로토타임 체인임
let z = {z: 14, get b() {return 2;}, q: {}};


console.log('y:', y); // {y: 13}
console.log('y.y:', y.y); // 13
console.log('y.x:', y.x); // 12

console.log('z:', z); // {z: 14, b: [Getter], q: {}}

Object.defineProperty(z, 'z', {enumerable: false});

console.log('z:', z); // {b: [Getter], q: {}}

let m = {};

Object.assign(m, y, z);

console.log('m:', m); // {y: 13, b: 2, q: {}}
console.log('m.x', m.x); // undefined, [[prototype]] 복사 안함 
