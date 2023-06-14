// References to form elements

const form = document.querySelector('form');
const topText = document.querySelector('#top-text');
const btmText = document.querySelector('#bottom-text'); 
const imageURL = document.querySelector('#image-url');
const memeDisplay = document.querySelector('#meme-display');



form.addEventListener("submit", function(e){
    e.preventDefault();

    //Create new meme container
    const newMeme = document.createElement('div');
    newMeme.classList.add('meme-template');

    //Create new meme text elements
    const topTextElement = document.createElement('p');
    const btmTextElement = document.createElement('p');
    topTextElement.innerText = topText.value;
    btmTextElement.innerText = btmText.value;
    topTextElement.classList.add('top');
    btmTextElement.classList.add('bottom');

    //Create new image element
    const imageElement = document.createElement('img');
    imageElement.src = imageURL.value;

    //Create remove button
    const newButton = document.createElement('button');
    newButton.innerText = "Remove";
    newButton.classList.add('remove-button');

    newButton.addEventListener("click", function(event) {
        event.target.parentElement.remove();
      });

    //Append meme elements to container
    newMeme.appendChild(topTextElement);
    newMeme.appendChild(btmTextElement);
    newMeme.appendChild(imageElement);
    newMeme.appendChild(newButton);

    memeDisplay.appendChild(newMeme);

    newMeme.addEventListener("click", function(event) {
        event.target.parentElement.remove();
    })

    form.reset();
});