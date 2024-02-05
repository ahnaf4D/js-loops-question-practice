/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let item = 1;
let sum = 0;
while (item <= 100) {
    item++;
    sum += item;
    // When results 100 loop will exit
    if (sum === 100) {
        break;
    }
}
console.log(sum);