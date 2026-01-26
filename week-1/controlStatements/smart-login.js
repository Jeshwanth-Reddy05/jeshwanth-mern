let isLoggedIn=true;
let isProfileComplete=true;
let msg=""

if(!isLoggedIn){
    msg+="please login";
}
if(isLoggedIn && !isProfileComplete){
    msg+="complete your profile"
}
if(isLoggedIn && isProfileComplete){
    msg+="welcome back";
}
console.log(msg)