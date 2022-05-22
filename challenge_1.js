console.log("Start challenge 1!");

const obj = {
    3: "Three",
    5: "Five",
    11: "Eleven"
}

for(let i = 1; i < 101; i++){
    let result = "";
    for (const [key, value] of Object.entries(obj)) {
        if(i % key == 0){
            result = result+value;
        }
    }

    if(result == ""){
        result = i;
    }

    console.log(result);
}
