// let arr = [1, 2, 1, 3, 5, 1, 5];

// let count = {};

// for (let i = 0; i < arr.length; i++) {
//   // count[arr[i]] = (count[arr[i]] || 0) + 1;
//   count[arr[i]] = (count[arr[i]] || 0) + 1;
// }

// console.log("count", count);

// let arr = [1, 2, 1, 3, 5, 1];

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(arr[i]);
//   }, 300);
// }

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log('i' , i);

//     console.log(arr[i]);
//   }, 300);
// }


// const x = [1, 2, 3];

// // x[-1] = -1;
// console.log(x[-1])
// console.log(x.indexOf(300))
// console.log(x[x.indexOf(10000)]);

function factorial(string) {
  let factorial = 1;
  for (let i = string.length; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

// randomChar("ABC");
// ---------------------------------------
// ABC
// ACB
// BAC
// BCA
// CAB
// CBA

let str = "ABC";

// let ans = factorial(str);

function permutation(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    let temp = element;
    for (let j = 0; j < array.length; j++) {
      const elementJ = array[j];
      if(array[i] !== array[j]){
          temp += elementJ;
      }
    }
    console.log("elementJ: ",temp);
  }

}

permutation("ABC");
// 3 + 2 + 1  => 6
