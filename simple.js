/* for (let i = 1; i < 6; i++) {
    console.log(i);
} */
// recursion
function consoleNumber(i){
    if(i>5){
        return;
    }
    console.log(i);
    consoleNumber(++i);
}
consoleNumber(1);