const exceptionHandling=(a,b)=>{
    try{
        if(b!=0){
        let division=(a/b);
        console.log(division);
    }
    else{
        console.log("Division by zero is not allowed");
        
    }
    }
    catch(error){
        console.log(error);
    }
}
exceptionHandling(10,10)
exceptionHandling(10,0)