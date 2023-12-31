Book = function (id,title, author, npages, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const booksform = document.getElementById("booksform");
const formbutton = document.getElementById("form_button");
let errorContainer = document.createElement("div");
let dialog = document.querySelector("dialog");


Book.prototype.changeStatus = function () {
  if (this.status == "Read") {
    this.status = "Not Read";
  } else if (this.status == "Not Read") {
    this.status = "Read";
  }

  console.log(this.length)
};

Book.prototype.bookRemoval = function () {

 
      books.splice(this.id, 1);

   

}

Book.prototype.Edit = function () {
  console.log("The book to edit is the one with ID : " + this.id)
}


let books = [];

formbutton.onclick = function (e) {
  e.preventDefault();


  const bookId = document.getElementById('book-id');

  // declare bookid by the length of the array
  bookId.value = books.length;

  

  const formTitle = document.getElementById("title");
  const formAuthor = document.getElementById("author");
  const formPages = document.getElementById("npages");
  let bookStatus = document.getElementsByName("status");

  const bookscontainer = document.querySelector(".bookscontainer");

  bookStatus.forEach((status) => {
    {
      if (status.checked && status.id == "read") {
        bookStatus = "Read";
      } else if (status.checked && status.id == "notread") {
        bookStatus = "Not Read";
      }
    }
  });

  console.log(
    formTitle.value +
      " " +
      formAuthor.value +
      " " +
      formPages.value +
      " " +
      bookStatus
  );

  if (
    formTitle.value == "" ||
    formAuthor.value == "" ||
    formPages.value == ""
  ) {
    
    errorContainer.setAttribute("class", "error-container");
    booksform.appendChild(errorContainer);
    errorContainer.textContent = "Please fill in all the fields";
   
    console.log("error en el formulario");
    return;
  } else if (
    formTitle.value &&
    formAuthor.value &&
    formPages.value &&
    bookStatus !== "Read" &&
    bookStatus != "Not Read"
  ) {
    errorContainer.setAttribute("class", "error-container");
    booksform.appendChild(errorContainer);

    errorContainer.textContent = "Choose a status";
   
    console.log("no status");
    return;
  } else {
    errorContainer.setAttribute("style", "opacity: 0");
  }

  bookObject = new Book(
    bookId.value,
    formTitle.value,
    formAuthor.value,
    formPages.value,
    bookStatus
  );

  books.push(bookObject);
  console.log(books);

  
  function renderBook(book) {
    const bookdiv = document.createElement("div");
    bookdiv.innerHTML = `
      <div class="book">
        <div class="book-details">
          <div class="book-title">${book.title.length > 34 ? book.title.slice(0, 34) + "..." : book.title}</div>
          <div class="book-author">By ${book.author.length > 28 ? book.author.slice(0, 28) + "..." : book.author}</div>
          <div class="book-npages">
            <div>Pages:</div>
            <div>${book.npages}</div>
          </div>
          <div class="book-status">
            <div>Status:</div>
            <div class="status-indicator ${book.status === "Read" ? "read" : "not-read"}">${book.status}</div>
          </div>
          <div class="book-actions">
            <div class="book-edit">
              <span class="material-symbols-outlined">edit</span>
            </div>
            <div class="book-delete">
              <span class="material-symbols-outlined">delete</span>
            </div>
          </div>
        </div>
      </div>
    `;

    const statusIndicator = bookdiv.querySelector(".status-indicator");
    const bookDelete = bookdiv.querySelector(".book-delete");
    const bookEdit = bookdiv.querySelector(".book-edit");

    statusIndicator.onclick = function () {
      book.changeStatus();
      bookscontainer.innerHTML = "";
      books.forEach((book) => {
        renderBook(book);
      });
    };

    bookDelete.onclick = function () {
      book.bookRemoval()
      bookscontainer.innerHTML = "";
      books.forEach((book) => {
        renderBook(book);
      });
    }

    bookEdit.onclick = function () {

   book.Edit();

  
dialog.showModal();

      
 




    };

    bookscontainer.appendChild(bookdiv);

  }
  bookscontainer.innerHTML = "";





  books.forEach((book) => {
    renderBook(book);
    
  });

  booksform.reset();
};

let dialogb = document.querySelector("#dialogbutton");
let dialogclose = document.querySelector("#dialogclose");

dialogb.onclick = function () {
  dialog.showModal();
};

dialogclose.onclick = function () {
  dialog.close();
};
