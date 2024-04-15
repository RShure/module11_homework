const arr = [3, 0, 1, 2, 7, 9, 8, 4, 5, 152, null, 11, 6, 0];
let evenCount = 0;
let oddCount = 0;
let zeroCount = 0;
function initCheckCount (){   
for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            evenCount++;
        }
        if (typeof arr[i] === 'number'&& !isNaN(arr[i])) {
        if (arr[i] % 2) {
        oddCount++
            } else {
        zeroCount++
            }
        }
    };
}    
console.log("Количество нулей: " + evenCount);
console.log("Количество нечетных чисел: " + oddCount);
console.log("Количество четных чисел: " + zeroCount);