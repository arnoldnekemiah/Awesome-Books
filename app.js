// check if the local storage is empty, then add empty array
if (localStorage.getItem('Added books') == null) {
  localStorage.setItem('Added books', JSON.stringify([]));
}
// store data in localStorage
const storeData = JSON.parse(localStorage.getItem('Added books'));

// function to add a new book to the collection, with title and author.
function updateData() {
  localStorage.setItem('Added books', JSON.stringify(storeData));
}

// Get values from input fields
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  e.preventDefault();
  // eslint-disable-next-line no-use-before-define
  addNewdata(title.value, author.value);
});
function createBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    books += `
        <p>${arr[i].title}</p>
        <p>${arr[i].author}</p>
        <button onClick="removeBook(${i})">Remove</button>
        <hr/>`;
  }
  return books;
}

// function to display books to the UI from local Storage
function displayBooks() {
  const listOfBooks = document.querySelector('.container');
  listOfBooks.innerHTML = `
    <ul class="book-ul">${createBooks(storeData)}</ul>`;
}

// function to add new data
function addNewdata(bookTitle, bookAuthor) {
  const Book = {
    title: bookTitle,
    author: bookAuthor,
  };
  storeData.push(Book);
  updateData();
  displayBooks();
}

// function to remove data from local storage
// eslint-disable-next-line no-unused-vars
function removeBook(i) {
  storeData.splice(i, 1);
  updateData();
  displayBooks();
}
// Display the initial set of books
displayBooks();