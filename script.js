const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBtn = document.getElementById('btn');
const listEntry = document.getElementById('list-entry');

const title = bookTitle.value.trim();
const author = bookAuthor.value.trim();

class Book {
  books = JSON.parse(localStorage.getItem('books')) || [];

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  addBook() {
    storeBook();
    updateUI();
  }

  storeBook(title, author) {
    if (title.length > 0 && author.length > 0) {
      const book = { title, author };
      books.push(book);
      updateStorage();
      clearInputField();
    }
    window.location.reload();
  }

  clearInputField() {
    title.value = '';
    title.author = '';
  }

  updateUI() {
    listEntry.innerHTML = `
      ${books
        .map(
          book => `
            <li class="book-card">
              <p class="book-title">${book.title}</p>
              <p class="book-title">${book.author}</p>
              <button class="remove-btn">Remove</button>
            </li>
            <hr />
          `
        )
        .join('')}`;
  }

  removeBook(title, author) {
    books = books.filter(
      book => book.title !== title && book.author !== author
    );
    updateStorage();
    updateUI();
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(books));
  }
}

const book = new Book();

addBtn.addEventListener('click', book.addBook);

const removeBtns = document.querySelectorAll('.remove-btn');

removeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const card = e.target.closest('.book-card');
    const title = card.querySelector('.book-title');
    const author = card.querySelector('.book-author');
    book.removeBook(title.innerText, author);
    this.location.reload();
  });
});
