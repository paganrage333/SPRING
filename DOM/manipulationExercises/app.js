document.getElementById('container');

document.querySelector('#container');

document.querySelectorAll(".second");

document.querySelector('ol > .third');

const container = document.getElementById('container');
// container.textContent = "Hello!";

const footer = document.querySelector(".footer");
footer.classList.add("main");
footer.classList.remove("main");

const newItem = document.createElement("li");
const ul = document.querySelector("ul");
newItem.textContent = "four";

ul.append(newItem);

let olElement = document.getElementById("container").getElementsByTagName("ol")[0];
let liElements = olElement.getElementsByTagName("li");
for (let i=0; i < liElements.length; i++) {
    liElements[i].style.backgroundColor = "green"
};

footer.remove();