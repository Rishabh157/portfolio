// let arr = [1, 2, 1, 3, 5, 1, 5];

// let count = {};

// for (let i = 0; i < arr.length; i++) {
//   // count[arr[i]] = (count[arr[i]] || 0) + 1;
//   count[arr[i]] = (count[arr[i]] || 0) + 1;
// }

// console.log("count", count);

let arr = [1, 2, 1, 3, 5, 1];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 300);
// }

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log('i' , i);    
    console.log(arr[i]);
  }, 300);
}
