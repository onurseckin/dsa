//time complexity n power of 2 (2 uzeri n)
function fibonacciRecursive(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//time complexity o(n)
function fibonacciMemoization(n, memo = []){
    if(memo[n]!==undefined) return memo[n];
    if(n <= 2) return 1;
    let res = fib(n-1, memo) + fib(n-2, memo);
    memo[n] = res;
    return res;
}

//O(1) Binet's Formula
function fibonacciBinetsFormula(number) {
    var sqRootOf5 = Math.sqrt(5);

    var Phi = (1+sqRootOf5)/2;
    var phi = (1-sqRootOf5)/2

    return Math.round((Math.pow(Phi, number) - Math.pow(phi, number)) / sqRootOf5);
}