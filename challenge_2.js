console.log("Start challenge 2!");

let sumOfarr = function(nums, sum) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == sum){
                return [i, j]
            }
        }
    }
};

const result = sumOfarr([2,7,11,15], 9)

if(result == undefined){
    console.log("no output")
}else{
    console.log("output : "+result)
}

