function leapYear (year : number ){
return (year % 4 === 0 && year %  100 !== 0 || year % 400 ===0 )

}
let checking = leapYear(2024)
console.log( "IS 2024 leapYear",checking);

let check = leapYear(2025)
console.log("IS 2025 leapYear",check);




// let Year : number = 2023
// let leapYear : number = Year % 4 
// leapYear = Year / 100 

// console.log(leapYear);
