// JavaScript 
// const a = parseFloat(prompt('Enter A'));
// const b = parseFloat(prompt('Enter B'));
// const c = parseFloat(prompt('Enter C'));

const a = prompt('Enter A');
console.log('a: ' + a);
const b = prompt('Enter B');
console.log('b: ' + b);
const c = prompt('Enter C');
console.log('c: ' + c);

solveQuadraticEquation(a,b,c);
// document.write(solveQuadraticEquation(a,b,c));

function solveQuadraticEquation(a, b, c) {
    const d = discr(a, b, c);
    if (d > 0) {
        let x1 = (-b+Math.sqrt(d))/2*a;
        let x2 = (-b-Math.sqrt(d))/2*a;
        console.log('Value x1: '+ x1);
        console.log('Value x2: '+ x2);
    } else if (d < 0) {
        console.log('The equasion does not have real solutions!');
    } else {
        let x1 = (-b)/2*a;
        console.log('Both solutions are the same and equal to: '+ x1);
    }
    // return 
}

function discr(a, b, c) {
    return (Math.pow(b,2)-4*a*c);
}