function sum(a, b) {
    return a + b;
}

function calc(valor1, valor2, callback){
    return callback(valor1, valor2)
}

console.log(calc(-2,7, sum))

function date(callback) {
    console.log(new Date())
    setTimeout(function() {
        let date = new Date();
        callback(date)
    }, 3000)

}

function printDate(dateNow) {
    console.log(dateNow)
}

date(printDate);