class Book {
  constructor() {
    this.bookTitle = document.getElementById('book-title');
    this.bookAuthor = document.getElementById('book-author');
    this.addBtn = document.getElementById('btn');
    this.listEntry = document.getElementById('list-entry');

    this.books = JSON.parse(localStorage.getItem('books')) || [];

    this.addBtn.addEventListener('click', this.addBook.bind(this));

    this.renderBooks();
  }

  addBook() {
    const title = this.bookTitle.value.trim();
    const author = this.bookAuthor.value.trim();

    if (title.length > 0 && author.length > 0) {
      const book = { title, author };
      const same = this.books.some(
        (bk) => JSON.stringify(bk) === JSON.stringify(book)
      );
      if (!same) {
        this.books.push(book);
        this.updateStorage();
        this.clearInputs();
        this.renderBooks();
      }
    }
  }

  updateStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(title, author) {
    this.books = this.books.filter(
      (book) => book.title !== title && book.author !== author
    );
    this.updateStorage();
    this.renderBooks();
  }

  clearInputs() {
    this.bookTitle.value = '';
    this.bookAuthor.value = '';
  }

  renderBooks() {
    this.listEntry.innerHTML = this.books
      .map(
        (book) => `
          <li class="book-card">
            <p class="entry">
              <span class="book-title">"${book.title}"</span> by
              <span class="book-author">${book.author}</span>
            </p>
            <button class="remove-btn">Remove</button>
          </li>
        `
      )
      .join('');

    const removeBtns = document.querySelectorAll('.remove-btn');

    removeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const card = e.target.closest('.book-card');
        const title = card.querySelector('.book-title').innerText;
        const author = card.querySelector('.book-author').innerText;
        this.removeBook(title, author);
      });
    });
  }
}

const newBook = new Book();
window.addEventListener('load', newBook.addBook);
