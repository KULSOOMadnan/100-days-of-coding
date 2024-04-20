function area(length :number , width :number ){

    return  width * length 
}
console.log(area(8,9));



// refactor it  into arrow fuction

let  AreaOfRectangle = (len : number ,width :number)  => width * len

console.log(AreaOfRectangle(4,8));



