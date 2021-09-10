function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.info = function() {
    if (read) {
      return `${title} by ${author}, ${pages} pages, read`;
    } else {
      return `${title} by ${author}, ${pages} pages, not read yet`;
    }
  }
  this.read = read;
}

let myLibrary = [];
let title;
let author;
let pages;
let read;
let counter;
let checkboxStatus;
let readButton;
let notReadButton;


function addBookToLibrary() {
  title = document.getElementById('titleInput').value;
  author = document.getElementById('authorInput').value;
  pages = document.getElementById('pagesInput').value;
  checkbox = document.getElementsByClassName("checkboxClass")[0];
  readButton = document.getElementById('alreadyRead');
  notReadButton = document.getElementById('notRead');
  document.getElementById('titleInput').value = "";
  document.getElementById('authorInput').value = "";
  document.getElementById('pagesInput').value = "";
  if(checkbox.checked == true){
    read = true;
  }else{
    read = false;
}
  const book1 = new Book(title, author, pages, read);
  if(book1.read == true){
    readButton.style.visibility = "visible"
    readButton.style.visibility = "hidden"
  }else{
    notReadButton.style.visibility = "visible"
    readButton.style.visibility = "hidden"
  }
  myLibrary.push(book1);
}

let addBook = document.getElementsByClassName('addBtn')[0];
let bookDiv = document.getElementsByClassName("bookAddDiv")[0];
addBook.addEventListener("click", function() {
  bookDiv.style.visibility = "visible";
});

let booksTextDisplay = document.getElementsByClassName("booksText")[0];
let bookCardsArray = document.getElementsByClassName('bookCard');

if (myLibrary.length === 0) {
  booksTextDisplay.innerHTML = "No Books";
  bookCardsArray[0].style.visibility = "hidden";
} else {
  // for(let i = 0; i < bookCardsArray.length; i++){
  //   bookCardsArray[0].style.visibility = "visible";
  // }
  // booksTextDisplay.textContent = "";
}
counter = 0;
let confirm = document.getElementById('confirmBtn');
confirm.addEventListener("click", function() {
  addBookToLibrary();
  setTimeout(openText(), 3000);
  setTimeout(function() {
    document.getElementById("bookAdded").style.visibility = 'hidden';
  }, 3000);

  function openText() {
    let Temp = document.getElementById("bookAdded")
    if (Temp != null)
      Temp.style.visibility = "visible";
  }
  if (myLibrary.length === 0) {
    booksTextDisplay.innerHTML = "No Books";
    bookCardsArray[0].style.visibility = "hidden";
  } else {
    for (let i = 0; i < bookCardsArray.length; i++) {
      bookCardsArray[0].style.visibility = "visible";
    }
  }
  const newBook = document.createElement('div');
  newBook.classList.add('bookCard')
  const container = document.querySelector('#container');
  const btnContainer = document.getElementsByClassName('buttonClass')[0];
  container.appendChild(newBook);
  booksTextDisplay.textContent = "";
  const titleBook = document.createElement('h2');
  titleBook.classList.add('bookTitle');
  const authorBook = document.createElement('h2');
  authorBook.classList.add('bookAuthor');
  const pagesBook = document.createElement('h2');
  pagesBook.classList.add('bookPages');
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');
  button1.id = "#alreadyRead"
  button2.id = "#notRead"
  button1.textContent = "READ";
  button2.textContent = "NOT READ"
  const titleContainer = document.getElementsByClassName('bookCard')[counter + 1];
  titleContainer.appendChild(titleBook);
  titleContainer.appendChild(authorBook);
  titleContainer.appendChild(pagesBook);
  titleContainer.appendChild(titleBook);
  titleContainer.appendChild(btnContainer);
  titleBook.textContent = myLibrary[counter].title;
  authorBook.textContent = myLibrary[counter].author;
  pagesBook.textContent = myLibrary[counter].pages;
  console.log(counter);
  counter++;
});
