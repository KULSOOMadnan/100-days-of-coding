function identiclString (word : string , word1 : string){
 return word.toLowerCase() === word1.toLowerCase() 
 
}
console.log(identiclString("kulsoom" ,"Kulsoom")); // true
console.log(identiclString("aadnan" ,"Adana")); // false
