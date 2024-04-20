interface smartPhone {
    brand : string,
    model : string,
    processor : string,
    features :{
    RAM: number,
    ROM : number,
    battery : string,
    display : string
    }

}

let SmartPhone :smartPhone = {
 
    brand : "vivo Y17s",
    model : "v2331",
    processor :"2.0 octa core",
    features: {
    RAM:8 ,
    ROM : 128,
    battery :"50000 mph",
    display : "7 inches"
    }
    
}

console.log(SmartPhone);

