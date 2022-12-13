let n = prompt("enter number n");
function numberOneTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let str = "";
        for (let j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
    }
}

numberOneTriangle(n);
