{
    let blockLet : string = "This is me kulsoom"
    const blockConst : number = 89

    console.log(blockConst);
    console.log(blockLet);
    
    // it will excute easily inside the block 
}

// if i log blockedLet and blocketConst here it will show an error like this

try{
    // console.log(blockConst);

} catch(error){
    console.log("error : Declaration or statement expected.");
    
}

try{
    // console.log(blockLet);
    
} catch (error){
    console.log("error : Declaration or statement expected");
    
}

//// This shows that `let` and `const` 
//variables keep safe inside the block where they're defined.
