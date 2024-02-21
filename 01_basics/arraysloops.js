let arr = ['a', "b", "c"]
console.log("\nFor Loop:")
for(let i=0; i<arr.length; i++) console.log(`Index_${i}` + ": " + arr[i]);
console.log("\nWhile Loop:")
let j = arr.length
while(j--) console.log(`Index_${j}: ${arr[j]}`);
console.log("\nDo-While Loop:")
let k = 0
do {console.log(`Index_${k}: '${arr[k]}'`); k++} while(k<arr.length);