

/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/

let oddSum = 0;
let oddN = 91;
while (oddN <= 129) {
    if (oddN % 2 !== 0) {
        oddSum += oddN;
    }
    oddN++;
}
console.log(`Sum from 91-129 is ${oddSum}`);

console.log(`========================= {Programming Hero} ============`)

let evenSum = 0;
let evenN = 51;
while (evenN <= 85) {
    if (evenN % 2 === 0) {
        evenSum += evenN;
    }
    evenN++;
}
console.log(`Sum from 91-129 is ${evenSum}`);