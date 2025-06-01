function roundTo(n, step = 1){
    let remainder = n % step
    
    return n - remainder + (remainder < step/2 ? 0 : step);
}

console.log(roundTo(7));
console.log(roundTo(7, 5));
console.log(roundTo(8, 5));
console.log(roundTo(12, 10));