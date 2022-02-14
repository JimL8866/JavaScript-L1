function fibonacciGenerator (n) {
    if (n===1) {
        var output = [0]
    }
    else if (n===2) {
        var output = [0, 1]
    }
    else {
        var output = [0, 1]
        for (var i = 2; i < n; i ++) {
            output.push(output[output.length-1] + output[output.length-2])
        }
    }
    return output
}

console.log(fibonacciGenerator(13))
