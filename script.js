const bookTitle= document.getElementById('book-title');
const bookAuthor = document.getElementById('book-author');
const addBtn = document.getElementById('btn');
const listEntry = document.getElementById('list-entry');


class Book{
  constructor(title, author){
    this.title = title;
    this.author = author;
  }
static addBook(){
   const  title = bookTitle.value.trim();
     const author = bookAuthor.value.trim();
    if (title.length > 0 && author.length > 0) {
      const newBook = new Book(title, author );
      const book={title,author}
      
      const bookCollection =document.createElement( 'li' );
      bookCollection.classList.add( 'book-card' );

      bookCollection.innerHTML += `
        
            <li class="book-card">
              <p class="book-title">${book.title}</p>
              <p class="book-title">${book.author}</p>
              <button class="remove-btn">Remove</button>
            </li>
            <hr />`;
        listEntry.appendChild(bookCollection);
      title.value = '';
      title.author = '';
   
  console.log(`Added book: ${newBook.title} by ${newBook.author}`)
}

}
}

addBtn.addEventListener('click',Book.addBook);



/*
let books = JSON.parse(localStorage.getItem('books')) || [];

const addBook = () => {
  const title = bookTitle.value.trim();
  const author = bookAuthor.value.trim();
  if (title.length > 0 && author.length > 0) {
    const book = { title, author };
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    title.value = '';
    title.author = '';
  }
  this.location.reload();
};

const updateStorage = () => {
  localStorage.setItem('books', JSON.stringify(books));
};

const removeBook = (title, author) => {
  books = books.filter((book) => book.title !== title && book.author !== author);
  updateStorage();
};

addBtn.addEventListener('click', addBook);

listEntry.innerHTML = `${books
  .map(
    (book) => `
      <li class="book-card">
        <p class="book-title">${book.title}</p>
        <p class="book-title">${book.author}</p>
        <button class="remove-btn">Remove</button>
      </li>
      <hr />`,
  )
  .join('')}`;

const removeBtns = document.querySelectorAll('.remove-btn');

removeBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.book-card');
    const title = card.querySelector('.book-title');
    const author = card.querySelector('.book-author');
    removeBook(title.innerText, author);
    this.location.reload();
  });
});
*/
