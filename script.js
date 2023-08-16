const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const addBtn = document.getElementById('btn');
const listEntry = document.getElementById('list-entry');

const books = JSON.parse(localStorage.getItem('books')) || [];

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

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  listEntry.innerHTML += `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remBtn" data-index="${i}">Remove</button>
    <hr>
  `;
}
const removeButtons = document.getElementsByClassName('remBtn');

for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', function () {
    const index = parseInt(this.dataset.index);
    books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(books));
    location.reload();
  });
}
