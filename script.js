const bookTitle = document.getElementById('bookTitle');
const bookAuthor = document.getElementById('bookAuthor');
const addBtn = document.getElementById('btn');
const listItem = document.getElementById('listItem');

const books = [];

addBtn.onclick = () => {
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  const bookObject = {
    title: title,
    author: author,
  };
};

for (let i = 0; i < localStorage.length; i++) {
  const title = localStorage.key(i);
  const author = localStorage.getItem(title);
  listItem.innerHTML += `
    ${title}: ${author}                                                 
     <button class="remBtn" data-title="${title}">Remove</button><br>`;
}

const removeButtons = document.getElementsByClassName('remBtn');

for (let i = 0; i < removeButtons.length; i++) {
  removeButtons[i].addEventListener('click', function () {
    const title = this.dataset.title;
    localStorage.removeItem(title);
    location.reload();
  });
}
