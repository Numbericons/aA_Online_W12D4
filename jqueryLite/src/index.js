//require files
const DomNodeCollection = require('./dom_node_collection.js');

const functionQueue = [];
let ready = false;

window.$l = (arg) => {
  switch (typeof arg) {
    case "function":
        return enqueueFunctionsReady(arg);
    case "string":
        const nodeList = document.querySelectorAll(arg);
        const nodeArr = Array.from(nodeList);
        return new DomNodeCollection(nodeArr);
    case "object":
      if (arg instanceof HTMLElement) {
        return new DomNodeCollection([arg]);
      }
  }
};

enqueueFunctionsReady = (func) => {
  if (!ready) {
    functionQueue.push(func);
  } else {
    func();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  ready = true;
  functionQueue.forEach(func => func());
});


window.$l( () => {console.log($l('div'))} );






