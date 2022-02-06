/* let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum) */

//this is done by my concept
/* let result = 0;
function sum (i){
    if(i<=5){
        result = result + i;
    }
    else{
        return;
    }
    sum(++i);
    return result;
}
const res = sum(1);
console.log(res); */

function sum(i){
    if(i==1){
        return 1;
    }
    return i + sum(--i);
    //i+sum(--i)
    //5 + sum(4)
    //5 + 4 + sum(3)
    //5 + 4 + 3 + sum(2)
    //5 + 4 + 3 + 2 + sum(1)
    //5 + 4 + 3 + 2 + 1;
    
}
console.log(sum(5));