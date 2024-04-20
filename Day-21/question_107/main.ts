function divisiblityCheck (divisor: number){
  return (divisor % 2 === 0 && divisor % 3 === 0  )
}

let divisible = divisiblityCheck(7) // false
console.log(divisible);
console.log(divisiblityCheck(6)); // true

