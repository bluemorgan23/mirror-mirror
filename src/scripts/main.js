//Create input field and added id message
let inputField = document.createElement("input");
inputField.id = "message";

//Create label element that labels the input field and acts as a container
//Append the label and then append the input field to the container
let label = document.createElement("label");
label.innerHTML = "Enter text here: ";
document.body.appendChild(label);
label.appendChild(inputField);

//Create a container for the articles and append it to the DOM
let artContainer = document.createElement("div");
document.body.appendChild(artContainer);

//Create two article elements with unique id's
let articleOne = document.createElement("article");
let articleTwo = document.createElement("article");
articleOne.id = "one";
articleTwo.id = "two";
// articleOne.innerHTML = "test";
// articleTwo.innerHTML = "test";

//append both the articles to the article container
artContainer.appendChild(articleOne);
artContainer.appendChild(articleTwo);

inputField.addEventListener("keyup", function() {
    articleOne.textContent = inputField.value;
    articleTwo.textContent = inputField.value;
})