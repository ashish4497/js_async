// Challenge 1

function sayHello() {
  new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
  }).then(() => {
    console.log("Hello");
  });
}

// Uncomment the line below when ready
sayHello();
// should log "Hello" after 1000ms

// Challenge 2
var promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(() => resolve(), 1000);
});
promise.then(() => {
  console.log("Resolved!");
});

// Should print out "Resolved!"
// ADD CODE HERE
yes;
// Challenge 3

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  setTimeout(() => reject(), 1000);
});
promise.catch(() => {
  console.log("Reject!");
});

// Should print out "Reject!"
// ADD CODE HERE
yes;
// Challenge 4

promise = new Promise(function (resolve, reject) {
  // ADD CODE HERE
  resolve("Promise has been resolved!");
});
promise.then((res) => console.log(res));
console.log("I am not the promise");

// Uncomment the lines below when ready
// promise.then(() => console.log('Promise has been resolved!));
// console.log("I'm not the promise!");

// Challenge 5
function delay() {
  var promise = new Promise((res, rej) => {
    setTimeout(() => res(), 1000);
  });
  promise.then(console.log("Hello"));
}
delay().then(sayHello);
// Uncomment the code below to test
// This code should log "Hello" after 1000ms

// Challenge 6
//
// ADD CODE BELOW
var secondPromise = new Promise((res, reh) => {
  res("second");
});
var firstPromise = new Promise((res, rej) => {
  res(secondPromise);
});
firstPromise.then((secondPromise) => {
  console.log(secondPromise);
});

// Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 },
];

const fakeAPICall = (i) => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  var data = Promise.all([fakeAPICall(0), fakeAPICall(1), fakeAPICall(2)]).then(
    (values) => {
      console.log(values);
    }
  );
  return data;
}
getAllData();
