function roundoff (value1 :number , value2 : number ){
    let product = value1 * value2
    return Math.round(product * 100 ) / 100
}
let roundedoff = roundoff(5.69,7.90)
console.log(roundedoff);
