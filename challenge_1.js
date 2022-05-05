console.log("Start challenge 1!");

let result = "";
for(let i = 1; i < 16; i++){
    if((i % 3 == 0) && (i % 5  == 0)){
        result = "ThreeFive";
    }else if(i % 3 == 0){
        result = "Three";
    }else if(i % 5  == 0){
        result = "Five";
    }else{
        result = i;
    }
    console.log(result);
}
