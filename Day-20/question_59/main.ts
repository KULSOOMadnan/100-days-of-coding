function customAdders (addValue: number) : (number :number) => number{
    
  return function (number : number ):number {
      return   number + addValue
    }
}
let magicBox = customAdders(5)
console.log(customAdders(45));
