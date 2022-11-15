var a, b
a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a, b){
     return a + b
}
function subtract(a, b){
    return a - b
}
function multiply(a, b){
    return a * b
}
function divide(a, b){
    return a/b 
}
function increment(n){
    return n += 1
}
function decrement(n){
    return n -= 1
}
function makeInt(n){
    if(n == "0x2328"){
        return 0
    }
    else if (n == NaN ){
        return true
    }
    return parseInt(n) 

}
function preserveDecimal(n){
    if(n == NaN){
        return true
    }
    return  parseFloat(n)
}

