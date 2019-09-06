import React from "react";
import ReactDom from "react-dom";

const element = <h1>Hello World</h1>;

console.log(element);
ReactDom.render(element, document.getElementById("root"));

// variables declare var => function
//variables declared let => block
//variables declared constant => block
// let vs. var vs const
function sayHello() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
sayHello();

//obects

const person = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
  talk() {}
};
person.talk();
let name = person.name;
console.log(name);

//bind this
const person1 = {
  name: "Mosh",
  walk() {
    console.log(this);
  },
  talk() {}
};

person1.walk();
const walk = person.walk.bind(person1);
walk();

//arrow functions

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false }
];

jobs.filter(function(job) {
  return job.isActive;
});
console.log(jobs.filter(job => job.isActive));

var data = [
  {
    z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
    type: "heatmap"
  }
];

Plotly.plot("root", data, {}, { showSendToCloud: true });
