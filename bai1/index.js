let inA = document.getElementById("inA");
let inB = document.getElementById("inB");
let sol = document.getElementById("answer");
let resCon = document.getElementById("solution");
let form = document.getElementById("form");
let btn = document.getElementById("check");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sol.innerHTML = sumPrime(Number(inA.value), Number(inB.value));
});

const isPrime = (a) => {
    if (a <= 1) return false;
    if (a == 2) return true;
    for (let i = 2; i < a; i++) {
        if (a % i == 0) return false;
    }
    return true;
};

const sumPrime = (a, b) => {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        if (isPrime(i)) sum += i;
    }
    // console.log(res);
    return sum;
};
