// JavaScript 
const a = parseFloat(prompt('Enter A'));
console.log('a: ' + a);
document.write('a = ');
document.write(a);
document.write('<br>');
const b = parseFloat(prompt('Enter B'));
document.write('b = ');
document.write(b);
document.write('<br>');
const c = parseFloat(prompt('Enter C'));
document.write('c = ');
document.write(c);
document.write('<br>');


solveQuadraticEquation(a, b, c);
// document.write(solveQuadraticEquation(a,b,c));

function solveQuadraticEquation(a, b, c) {
    const d = discr(a, b, c);
    document.write('discriminant = ');
    document.write(d);
    document.write('<br>');
    if (d > 0) {
        let x1 = (-b + Math.sqrt(d)) / 2 * a;
        let x2 = (-b - Math.sqrt(d)) / 2 * a;
        console.log('Value x1: ' + x1);
        console.log('Value x2: ' + x2);
        document.write('Value x1: ');
        document.write(x1);
        document.write('<br>');
        document.write('Value x2: ');
        document.write(x2);
        document.write('<br>');
    }
    else if (d < 0) {
        console.log('The equasion does not have real solutions!');
        document.write('The equasion does not have real solutions!');
        document.write('<br>');
    }
    else {
        let x1 = (-b) / 2 * a;
        console.log('Both solutions are the same and equal to: ' + x1);
        document.write('Both solutions are the same and equal to: ');
        document.write(x1);
        document.write('<br>');
    }
    // return 
}

function discr(a, b, c) {
    return (Math.pow(b, 2) - 4 * a * c);
}
