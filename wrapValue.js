function wrapValue(x) {
    let local = x;

    return () => local;
}

let wrap1 = wrapValue(1);


let wrap2 = wrapValue(2);

console.log(wrap1());
console.log(wrap2());