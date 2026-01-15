let price=1299;
let label=""
if(price<500){
    label+="budget course"
} 
if(price< 1000 && price <500){
    label+="standard course";
}
if(price>1000){
    label+="premium course"
}

console.log(label);