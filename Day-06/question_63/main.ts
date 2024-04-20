type shape = {
    shapeType: "circle" | "rectangle" | "triangle",
    radius?  : number ,
    height? : number,
    width? : number,
    base? : number
}
let circles : shape = {
    shapeType : "circle",
    radius : 7
}

console.log(circles);

let rectangeles :shape = {
    shapeType : "rectangle",
    height : 8,
    width : 9

}
console.log(rectangeles);
