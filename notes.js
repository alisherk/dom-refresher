//document object is available on the browser that has 
//all html tree

//get element by id
var banner = document.getElementById('page-banner');
//document will stored within it
var bookList = document.getElementById('book-list');
console.log(bookList);

//query DOM by class name
// will grab all elements that has class titles
const titles = document.getElementsByClassName('title');
//title will be HTML Collection is array like but not quite
//html col need to be converted to array to use forEach
Array.from(titles).forEach((titel) => {
  console.log(title);
});

for (let i = 0; i < titles.length; i++) {
  console.log(titles[i]);
}

//get elements by tag name
//we can get all li tags
const lis = document.getElementsByTagName('li');

// To query the DOM, there are two main methods:
document.querySelector();

document.querySelectorAll();

// Ex. 1
// This allows us to go into the element with the id #book-list, access the second child of the li with class name.
const wmf = document.querySelector('#book-list li:nth-child(2) .name');

// Ex. 2
const books = document.querySelectorAll('#book-list li .name');

// Iterating over node list returned by querySelectorAll:
books.forEach(function (book) {
  console.log(book);
});

// Converting the collection of elements (known as a "NODE LIST") returned by querySelectorAll() into an array:
// OPTIONAL - Not required at all, UNLESS we use document.getElementsByClassName();

const x = Array.from(books);

x.forEach(function (book) {
  console.log(book);
});
// Can be done at one go:

Array.from(books).forEach(function (book) {
  console.log(book);
});

// Logging the text content only:
books.forEach(function (book) {
  console.log(book.textContent);
});

// Replacing text content:
books.forEach(function (book) {
  book.textContent = 'This is a test';
});

// Appending text content (more useful), just use "+=" :
books.forEach(function (book) {
  book.textContent += 'This is a test';
});

//Appending new HTML elements. To replace the original HTML, use '=' instead of '+='
const bookList = document.querySelector('#book-list');
bookList.innerHTML += '<h2>This is how you add HTML</h2>';

// Cloning a node:
const banner = document.querySelector('#page-banner');

const clonedBanner = banner.cloneNode(true); // true is used to clone the entire node, nested nodes and all.
// "Node" is an interface that is implemented by multiple other objects, including "document" and "element".
// All objects implementing the "Node" interface can be treated similarly.
// The term "node" therefore (in the DOM context) means any object that implements the "Node" interface.
// Most commonly that is an element object representing a HTML element.

// To find parent node
const bookList1 = document.querySelector('#book-list');

console.log('the parent node is ', bookList.parentNode);

// You can chain them together to find the parent of the parent
// we just found above
console.log('the parent node is ', bookList.parentNode.parentNode);
// To find node children isn't useful (they include line breaks), so we use this instead:

console.log(bookList.children);

// To find element sibling:
var bookList = document.querySelector('#book-list');

console.log('book-list next element sibling is: ', bookList.nextElementSibling);

// To find previous element sibling:
console.log(
  'book-list previous element sibling is: ',
  bookList.previousElementSibling
);

// Example use case:
bookList.previousElementSibling.querySelector('p').innerHTML +=
  '<br>Too cool for everyone else!</br>';
// You can chain the properties and methods together

// EVENT LISTENERS
const h2 = document.querySelector('#book-list h2');
h2.addEventListener('click', function (e) {
  console.log(e.target);
  console.log(e);
});

// Example use case: Deleting a list object using the removeChild() method
const btns = document.querySelectorAll('#book-list .delete');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const li = e.target.parentElement;

    li.parentNode.removeChild(li);
  });
});

// PREVENTING DEFAULT BEHAVIOUR
// In this example, preventing the default behaviour of a link navigating to another website
const link = document.querySelector('#page-banner a');

link.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Navigation to ', e.target.textContent, ' was prevented');
});

// Attaching event listeners to the ul instead of each li for efficiency

// Adding an event listener to each li is "expensive" and inefficient
// we can take advantage of event bubbling
const list = document.querySelector('#book-list ul');

// delete books
list.addEventListener('click', function (e) {
  if (e.target.className == 'delete') {
    const li = e.target.parentElement;
    list.removeChild(li);
    // li.parentNode.removeChild(li); NOTE: This line of code does the exact same thing as list.removeChild(li);
  }
});

// Query the DOM for form elements:

document.forms; // Returns a HTML collection

document.forms[0]; // Accesses the first form element

document.forms['add-book']; // Access the form with id #add-book

// Add book list
const addForm = document.forms['add-book'];

// Forms have a 'submit' event that we can listen for. They also refresh the page by default
// That explains e.preventDefault(); below

addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;
  console.log(value);
});


// Creating elements and adding them to the document
addForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const value = addForm.querySelector('input[type="text"]').value;

  // create elements
  const li = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteBtn = document.createElement('span');

  // add content

  deleteBtn.textContent = 'delete';
  bookName.textContent = value;

  // add classes

  bookName.classList.add('name');
  deleteBtn.classList.add('delete');

  // append to document (with appendChild)
  li.appendChild(bookName);
  li.appendChild(deleteBtn);
  list.appendChild(li);
});

//Get and Set attributes
var book = document.querySelector('li:first-child.name');

// Returns the class of the elements: 'name' in this case
book.getAttribute('class');

// Replaces the original class of 'name' with a new class of 'name-2'
// setAttribute takes two arguments, the first is the one we want to replace, the second is what it will be replaced with
book.setAttribute('class', 'name-2');

// Check if an element has an attribute
book.hasAttribute('class'); // Returns a boolean value. In this case, it's true

// Remove attributes
book.removeAttribute('class');

// Lesson #15: Reacting to a change event. Example: Checkboxes or radio buttons

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', function (e) {
  if (hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'initial';
  }
});

// Lesson #16 Custom Search Filter

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase();

  const books = list.getElementsByTagName('li');

  Array.from(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) !== -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

// Lesson #17 Tabbed Content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', function (e) {
  if (e.target.tagName == 'LI') {
    console.log('fired')
    const targetPanel = document.querySelector(e.target.dataset.target);
    // .dataset looks for data attributes like the data-target attr in the HTML
    // the second .target is a custom name. It couldn've been dataset.beans for example.
    panels.forEach(function (panel) {
      if (panel == targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      } // The block above adds a class of 'active' if the target of the click is the target panel
    }); // if not, it removes the class of 'active'
  }
});

//Wait Content Loaded
document.addEventListener('DOMContentLoaded', function () {

});
//If the script tags are not at the bottom of your HTML, Javascript code won't work,
// because event listeners can't attach to something that doesn't yet exist. To get around this,
// add all of the JS code into the event listener above and it will only run once the DOM content has loaded.
