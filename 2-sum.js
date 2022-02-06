 /*
let sum = 0;
for(let i = 5; i >= 1; i--){
    sum = sum + i;   
}
console.log(sum);
*/ 
/*  uporer function er summary
i = 5 asy
i er value 1 er theke boro hoile i--
sum = sum - i;
*/

function sum(i){
    console.log(i);
    if(i == 1){
        return 1;
    }
    return sum(--i);//eikhan e return korsi coz amader value ta drkr silo 
}
console.log(sum(5));