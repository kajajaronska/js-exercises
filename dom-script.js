const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!"

const header_three = document.createElement('h3');
header_three.textContent = "I'm a blue h3!"

container.appendChild(paragraph);
container.appendChild(header_three);

const div = document.createElement('div');
div.setAttribute('style', 'border: black solid; background: salmon')

const header_one = document.createElement('h1');
header_one.textContent = "I'm in a div";

const paragraph_two = document.createElement('p');
paragraph_two.textContent = "ME TOO!";

div.appendChild(header_one);
div.appendChild(paragraph_two);

container.appendChild(div);