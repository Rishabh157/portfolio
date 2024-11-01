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

// function User(userName, loginCount, isLoggedIn) {
//   (this.userName = userName), // this is called properities
//     (this.loginCount = loginCount),
//     (this.isLoggedIn = isLoggedIn),
//     // this is variable // and this is what we are passing to our variable

//     (this.greeting = function () {
//       console.log(`welcome  ${this.userName}`);
//     });
// }

// Encapsulation

class Cart {
  constructor() {
    this.items = []; // Public property
    this._total_price = 0; // Private-like property (by convention, use `_` prefix)
  }

  getPrice() {
    const total = this.items.reduce((acc, ele) => (acc += ele.price), 0);
    this._total_price += total;
  }

  getTotalCartPrice() {
    return this._total_price;
  }

  addItem(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }
}

const cart1 = new Cart();

cart1.addItem({
  id: "1",
  name: "Android Phone",
  price: 16000,
});

cart1.addItem({
  id: "2",
  name: "Iphone",
  price: 120000,
});

const cart2 = new Cart();

cart1.getPrice();
console.log("cart1", cart1.getItems());
console.log("cart1", cart1.getTotalCartPrice());
console.log("cart2", cart2.getItems());
