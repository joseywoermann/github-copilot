// return if a number is odd or even
export function isOdd(num) {
    return num % 2 == 1;
}

// check if a number is prime
export function isPrime(num) {
    if (num == 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false;
    }
    return true;
}

// return the factorial of a number
export function factorial(num) {
    if (num == 1) return 1;
    return num * factorial(num - 1);
}
