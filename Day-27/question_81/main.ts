// Iterating Over Object Properties: Write a function that takes an object as an argument and logs
// all of its properties and values. 
function runObject(value : object | any ){
 
    for(let   properties in value){
        console.log(`${properties} : ${value[properties]}`);
    }
 
    
}
runObject({
   name : "kulsoom",
   f_name : "adnan",
   age : 18 ,
   class : "second year"

});
