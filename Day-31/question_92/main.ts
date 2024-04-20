function removeElement<t>(item :t[] ){
   return item.pop()
    
   // this method del the last array item and also print it
   
}

let favColor = [ "Black" , " babypink " , "maroon" , " white"] 
console.log("Original Array: ",favColor);
console.log("Deleted item :",removeElement(favColor));
console.log("After applying pop method :",favColor);