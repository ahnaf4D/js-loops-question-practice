/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/

// odd numbers find out below
let oddN = 61;
while (oddN <= 100) {
    if (oddN % 2 !== 0) {
        console.log(oddN);
    }
    oddN++;
}
console.log("==================================================={Programming Hero}================");
// even numbers find out below
let evenN = 78;
while (evenN <= 98) {
    if (evenN % 2 == 0) {
        console.log(evenN);
    }
    evenN++;
}
