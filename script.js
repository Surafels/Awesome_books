const bookTitle = document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBtn = document.getElementById('btn');
const listEntry = document.getElementById('list-entry');

const books = JSON.parse(localStorage.getItem('books')) || [];

const storeEntry = () => {
  addBtn.addEventListener('click', () => {
    const title = bookTitle.value.trim();
    const author = bookAuthor.value.trim();

    if (title.length > 0 && author.length > 0) {
      const book = { title, author };
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));

      title.value = '';
      title.author = '';
    }

    location.reload();
  });
};
storeEntry();

const showBookList = () => {
  books.map((book, index) => {
    listEntry.innerHTML += `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="rem-btn" data-index="${index}">Remove</button>
    <hr>
  `;
  });
};
showBookList();

const removeButtons = document.getElementsByClassName('rem-btn');

const removeBook = () => {
  Array.from(removeButtons).map(btn => {
    btn.addEventListener('click', function () {
      const index = parseInt(this.dataset.index);
      books.splice(index, 1);
      localStorage.setItem('books', JSON.stringify(books));
      location.reload();
    });
  });
};
removeBook();
