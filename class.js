//  # Js is prototype based language not class based and everything are top of that even classes is synthati sugar

// # Javascript prototype based nature

// # OOP is only programing paradigm and it simply means that what the structure you use with your code
// you use classes or functions

// 1. procedure programing
// 2. object oriented programing
// 3. functional programing

// so in js everything is object then what is object

// object is simply collections of properities and methods
//                                  variables  /    functions

// new -> keyswords allow us to make a multiple instance of the same class
// when we define the new keyword every time a new constructor function called via new keyword

// step 1. when we write the this or print the this keyword we got the empty {}
// step 2. constructour function called via new keysword and gives us the the arguments to packed in it
// step 3. this keyword inject in it
// step 4. we got the function

function User(userName, loginCount, isLoggedIn) {
  (this.userName = userName), // this is called properities
    (this.loginCount = loginCount),
    (this.isLoggedIn = isLoggedIn),
    // this is variable // and this is what we are passing to our variable

    (this.greeting = function () {
      console.log(`welcome  ${this.userName}`);
    });
}
