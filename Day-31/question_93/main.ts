function findbanana (fruit : string[]) :void {
    const index = fruit.indexOf("banana") ;
    if (index !== -1 )
        fruit[index] = "mango"
    
 }

let  fruit = ["apple", "grapes","banana","strawbery"]
findbanana(fruit)
console.log(fruit);
