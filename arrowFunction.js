const roundTo = (n, step) => {
    let remainder = n % step;
    return n - remainder + (remainder < step / 2 ? 0: step);

};