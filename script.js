const bookTitle=document.getElementById('bookTitle');
const bookAuthor=document.getElementById('bookAuthor');
const addBtn=document.getElementById('btn');

addBtn.onclick=function(){
    const title=bookTitle.value;
    const author=bookAuthor.value;
console.log(title);
console.log(author);
if (title && author){
    localStorage.setItem(title, author);
    location.reload();
}
};
for(let i=0; i<localStorage.length;i++){
    
}