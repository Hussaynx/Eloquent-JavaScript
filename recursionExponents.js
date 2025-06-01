function power(base, exponents){
    if(exponents == 0){
        return 1;
    }
    else{
        return base * power(base, exponents-1);
    }
}

console.log(power(2,4));