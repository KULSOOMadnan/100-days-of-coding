
interface Cars {
    model: number,
    name : string,
    no_plate : string,
    color : string
}

let cars : any = {
    model : 2024,
    name : "fortuner",
    no_plate :"KAS 777",
}

cars['color'] = "black" // this will add the new property in cars object
cars.model = 2025 // it updated the value of model

console.log(cars);
// console.log(cars.model);
// console.log(cars.name);
