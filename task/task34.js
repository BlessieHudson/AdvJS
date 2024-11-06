const firstPrime = (arr) => {
    return arr.find(n => {
        if (n === 2) {
            return true;
        }
        if (n <= 1 || n % 2 === 0) {
            return false;
        }
        for (let i = 3; i <= Math.sqrt(n); i += 2) {  
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    });
}

const arr = [4, 6, 8, 7, 9, 11, 15];
console.log(firstPrime(arr));

