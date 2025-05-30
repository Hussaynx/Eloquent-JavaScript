const roundTo = (n, step) => {
    remainder = n % step;
    return n - remainder + (remainder < step ? 0 : step);
}

const result = roundTo(17, 5);
console.log(result);
