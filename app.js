
const noteDiv = document.querySelector('#notes'); 

const span = document.createElement('span'); 

span.innerText = 'Glad to get my notes out'; 

span.style.marginLeft = '100px'; 

span.style.backgroundColor = 'red';

noteDiv.append(span);


const list = document.querySelector('#book-list ul');
const addForm = document.forms['add-book'];
const lastChild = document.querySelector('li:last-child');

addForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = addForm.querySelector('input[type="text"]').value;

  //create elements
  const li = document.createElement('li');

  const bookName = document.createElement('span');

  const delBtn = document.createElement('span');

  //append to Dom
  li.appendChild(bookName);

  li.appendChild(delBtn);

  //add content to delete button
  delBtn.textContent = 'Delete';

  //add content to span
  bookName.textContent = value;

  //add classes
  bookName.classList.add('name');
  delBtn.classList.add('delete');

  //append the li to the entire list
  list.appendChild(li);
});

const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', (e) => {
  if (hideBox.checked) {
    list.style.display = 'none';
  } else {
    list.style.display = 'block';
  }
});

const searchBar = document.forms['search-books'].querySelector('input');

searchBar.addEventListener('keyup', (e) => {
  const term = e.target.value.toLowerCase();

  const books = list.getElementsByTagName('li');

  Array.from(books).forEach((book) => {
    const title = book.firstElementChild.textContent;

    if (title.toLocaleLowerCase().indexOf(term) !== -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});

list.addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    console.log(e.target.parentElement);
    const li = e.target.parentElement;

    list.removeChild(li);
  }
});

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');

tabs.addEventListener('click', (e) => {
  if (e.target.tagName == 'LI') {
    const targetPanel = document.querySelector(e.target.dataset.target);
    // .dataset looks for data attributes like the data-target attr in the HTML
    // the second .target is a custom name. It couldn've been dataset.beans for example.
    panels.forEach(function (panel) {
      if (panel === targetPanel) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      } // The block above adds a class of 'active' if the target of the click is the target panel
    }); // if not, it removes the class of 'active'
  }
});

const mainTitle = document.querySelector('#page-banner');

mainTitle.addEventListener('click', (e) => {
  mainTitle.classList.toggle('active');
});
