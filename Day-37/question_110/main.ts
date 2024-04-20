function gradeSystem(percentage: number) {
 if(percentage >= 90 && percentage <= 100){
   return "Congratulations! You have got 'A+one' Grade ";

}else if (percentage >= 80 && percentage <= 90){
    return "Well Done !You have got 'A +' Grade ";
    
}else if (percentage >= 70 && percentage <= 80){
    return "Awesome !You have got 'A' Grade "

}else if (percentage >= 60 && percentage <= 70){
    return "Exellent! You have got 'B' Grade "
    
}else if (percentage >= 50 && percentage <= 60){
    return "Good!You have got 'C' Grade "
    
}else if (percentage >= 40 && percentage <= 50){
    return "Nice !You have got 'D' Grade "
    
}else{
    return "You are FAIl  ";
    
}
}
console.log(gradeSystem(96));
console.log(gradeSystem(87));
console.log(gradeSystem(67));
console.log(gradeSystem(35));

