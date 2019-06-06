class DOMNodeCollection {
    constructor(array) {
        this.array = array;
    }
    
    html(string) {
        if (string) {
            this.array.forEach ( (node) => {
                node.innerHTML = string;
            })
        } else {
            return this.array[0].innerHTML;
        }
    }

    empty() {
        this.array.forEach ( (node) => {
            node.innerHTML = "";
        })
    }

    append(arg) {
        switch (typeof arg) {
        case "string":
            this.array.forEach ( (node) => {
                node.innerHTML += string;
            })
        case "DOMNodeCollection":
            arg.array.forEach ( (argNode) => {
                this.array.forEach( (thisNode) => {
                    thisNode.appendChild(argNode);
                    // thisNode.html += collectionNode.html;
                })
            })
        default:
            this.array.forEach( (thisNode) => {
                thisNode.appendChild(arg);
                    // thisNode.html += collectionNode.html;
            })
        }

        // domnode.array to domnode.array
        // 
    }

    addClass (klass) {
        this.array.forEach( (thisNode) => {
            thisNode.classList.add(`${klass}`);   //could pass in klass just as a string
            // d.className += " otherclass";
        })
    }

    removeClass(klass) {
        this.array.forEach( (thisNode) => {
            thisNode.classList.remove(`${klass}`);
                // thisNode.html += collectionNode.html;
        })
    }

    attr(attribute,value = null) {
        if (value) {
            this.array.forEach( (node) => {
                node.setAttribute(attribute, value);
            })
            return this.array;
        } else {
            return this.array[0].getAttribute(attribute);
        }
    }

    children() {
        let childrenArr = [];
        this.array.forEach( (thisNode) => {
            // const thisNodeChildren = thisNode.children;
            childrenArr = childrenArr.concat(Array.from(thisNode.children)); //seperate out thisNode.children
        })
        return new DOMNodeCollection(childrenArr);
    }

    parent() {
        let parentArr = [];
        this.array.forEach( (thisNode) => {
            // const thisNodeChildren = thisNode.children;
            const thisNodeParent = thisNode.parentNode;
            if (!parentArr.includes(thisNodeParent)) {
                parentArr.push(thisNodeParent); //parentElement ? to exclude non-elements
                // parentArr = parentArr.concat([thisNodeParent]); //parentElement ? to exclude non-elements
            // } else {
            }
        })
        return new DOMNodeCollection(parentArr);
    }

    find(selector) {
        let descendantsArr = [];
        this.array.forEach( (thisNode) => {
            let descendants = thisNode.querySelectorAll(selector);
            descendantsArr = descendantsArr.concat(Array.from(descendants));
        })
        return new DOMNodeCollection(descendantsArr);
    }

    remove() {
        this.array.forEach( (thisNode) => {
            thisNode.remove();
        })
    }

    on(event, callback) {
        this.array.forEach( (thisNode) => {
            thisNode.addEventListener(event, callback);
            thisNode.callback = callback;
        })
    }

    off(event) {
        this.array.forEach( (thisNode) => {
            thisNode.removeEventListener(event, thisNode.callback);
        })
        // target.removeEventListener(type, listener, option1, option2,);
        // target.removeEventListener(type, listener[, useCapture]);

        // document.addEventListener('click', myfunction, false);
    }
}

// empty() will remove all the contents of the selection.
// remove() will remove the selection and its contents.
// Consider:

/* <div>
    <p><strong>foo</strong></p>
</div>

$('p').empty();  // --> "<div><p></p></div>" */

// whereas,
// $('p').remove(); // --> "<div></div>"

// var c = document.body.children;
// var c = document.body.childNodes;
// document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");

//.setAttribute("class", "democlass");

// var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
// var att = document.createAttribute("class");       // Create a "class" attribute
// att.value = "democlass";                           // Set the value of the class attribute
// h1.setAttributeNode(att);                          // Add the class attribute to <h1>


// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"


module.exports = DOMNodeCollection;

