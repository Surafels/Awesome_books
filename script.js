const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const addBtn = document.getElementById('btn');
const listItem = document.getElementById('listItem');

const books = JSON.parse(localStorage.getItem('books')) || [];

addBtn.onclick = function () {
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();

  if (title && author) {
    const book = { title, author };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    location.reload();
  }
};

for (let i = 0; i < books.length; i++) {
  const book = books[i];
  listItem.innerHTML += `
  ${book.title}:${book.author}
  <button class="remBtn" data-index="${i}">remove</button><br>
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
