// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('#pid');
const input = document.querySelector('input');
const in2 = document.getElementById('in2');
const in21 = document.querySelector('#in2');

console.log(input);
console.log(in2);
console.log(in21);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
  in2,
  in21
});