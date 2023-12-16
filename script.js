Book = function (title, author, npages, status) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const booksform = document.getElementById("booksform");
const formbutton = document.getElementById("form_button");

let errorContainer = document.createElement("div");

Book.prototype.changeStatus = function () {
  if (this.status == "Read") {
    this.status = "Not Read";
  } else if (this.status == "Not Read") {
    this.status = "Read";
  }
};

let books = [];

formbutton.onclick = function (e) {
  e.preventDefault();

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
    formTitle.value,
    formAuthor.value,
    formPages.value,
    bookStatus
  );

  books.push(bookObject);
  console.log(books);

  // TO-DO: find a way to optimize the books adittion to the container
  
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
    statusIndicator.onclick = function () {
      book.changeStatus();
      bookscontainer.innerHTML = "";
      books.forEach((book) => {
        renderBook(book);
      });
    };
    bookscontainer.appendChild(bookdiv);
  }
  
  bookscontainer.innerHTML = "";
  books.forEach((book) => {
    renderBook(book);
  });
  booksform.reset();
}  
let dialog = document.querySelector("dialog");
let dialogb = document.querySelector("#dialogbutton");
let dialogclose = document.querySelector("#dialogclose");

dialogb.onclick = function () {
  dialog.showModal();
};

dialogclose.onclick = function () {
  dialog.close();
};
