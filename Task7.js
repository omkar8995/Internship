function checkPrime() {
    let num = document.getElementById("num").value;
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    document.writeln("<h3>Result:</h3>");

    if (isPrime) {
        document.writeln("It is a Prime Number");
    } else {
        document.writeln("It is Not a Prime Number");
    }
}
