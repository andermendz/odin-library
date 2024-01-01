Book = function (id, title, author, npages, status) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const booksform = document.getElementById("booksform");
const bookscontainer = document.querySelector(".bookscontainer");
const formbutton = document.getElementById("form_button");
let errorContainer = document.createElement("div");
let dialog = document.querySelector("dialog");

Book.prototype.changeStatus = function () {
  if (this.status == "Read") {
    this.status = "Not Read";
  } else if (this.status == "Not Read") {
    this.status = "Read";
  }

  console.log(this.length);
};

Book.prototype.Remove = function () {
  books.splice(this.id, 1);
};

Book.prototype.Edit = function () {
  console.log("The book to edit is the one with ID : " + this.id);

  let titleDialog = document.getElementById("title-dialog");
  let authorDialog = document.getElementById("author-dialog");
  let npagesDialog = document.getElementById("npages-dialog");

  let statusReadDialog = document.getElementById("dialog-read");
  let statusNotReadDialog = document.getElementById("dialog-notread");

  let dialogErrorContainer = document.getElementById("dialog-error");


      
  titleDialog.value = this.title;
  authorDialog.value = this.author;
  npagesDialog.value = this.npages;
  
  this.status == "Read"
    ? (statusReadDialog.checked = true)
    : (statusNotReadDialog.checked = true);


  let dialogFormButton = document.getElementById("dialog-form_button");


  dialogFormButton.onclick = (e) => {
    e.preventDefault();

  let dialogBookStatus = document.getElementsByName("status-dialog");

  

    dialogBookStatus.forEach((status) => {
      {
        if (status.checked && status.id == "dialog-read") {
          dialogBookStatus = "Read";
        } else if (status.checked && status.id == "dialog-notread") {
          dialogBookStatus = "Not Read";
        }
      }
    });

    if (
      titleDialog.value == "" ||
      authorDialog.value == "" ||
      npagesDialog.value == ""
    ) {
      dialogErrorContainer.setAttribute("style", "display: block;");

      dialogErrorContainer.textContent = "Please fill in all the fields";
  
      console.log("error en el formulario");
      return;
    } else if (
      titleDialog.value &&
      authorDialog.value &&
      npagesDialog.value &&
      dialogBookStatus !== "Read" &&
      dialogBookStatus != "Not Read"
    ) {
      dialogErrorContainer.setAttribute("style", "display: block;");
    
      dialogErrorContainer.textContent = "Choose a status";
      console.log(dialogBookStatus)
  
      console.log("no status");
      return;
    } else {
      errorContainer.setAttribute("style", "opacity: 0");
    }


    this.title = titleDialog.value;
    this.author = authorDialog.value;
    this.npages = npagesDialog.value;
    this.status = dialogBookStatus;
    dialog.close();

    renderBooks()
  };
 
};



function renderBook(book) {
  const bookdiv = document.createElement("div");
  bookdiv.innerHTML = `
    <div class="book">
      <div class="book-details">
        <div class="book-title">${
          book.title.length > 34
            ? book.title.slice(0, 34) + "..."
            : book.title
        }</div>
        <div class="book-author">By ${
          book.author.length > 28
            ? book.author.slice(0, 28) + "..."
            : book.author
        }</div>
        <div class="book-npages">
          <div>Pages:</div>
          <div>${book.npages}</div>
        </div>
        <div class="book-status">
          <div>Status:</div>
          <div class="status-indicator ${
            book.status === "Read" ? "read" : "not-read"
          }">${book.status}</div>
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
    renderBooks()
  };

  bookDelete.onclick = function () {
    book.Remove();
   
  };

  bookEdit.onclick = function () {
    book.Edit();
    dialog.showModal();
  };

  bookscontainer.appendChild(bookdiv);
}

function renderBooks() {
  bookscontainer.innerHTML = "";
  books.forEach((book) => {
    renderBook(book);
  });
}

let books = [];

formbutton.onclick = function (e) {
  e.preventDefault();

  const bookId = document.getElementById("book-id");

  // declare bookid by the length of the array
  bookId.value = books.length;

  const formTitle = document.getElementById("title");
  const formAuthor = document.getElementById("author");
  const formPages = document.getElementById("npages");
  let bookStatus = document.getElementsByName("status");

  

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

 



  renderBooks()

  booksform.reset();
};
