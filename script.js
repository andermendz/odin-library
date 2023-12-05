Book = function (title, author, npages, status) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const booksform = document.getElementById('booksform');
const formbutton = document.getElementById("form_button");

book.prototype.changeStatus = function () {
    if(this.status == "Read"){
      this.status = "Not Read";
    } else if (this.status == "Not Read"){
      this.status = "Read";
    }
};

formbutton.onclick = function (e) {
  e.preventDefault();

 
  const formTitle = document.getElementById("title");
  const formAuthor = document.getElementById("author");
  const formPages = document.getElementById("npages");
  let bookStatus = document.getElementsByName("status");
  

  let errorContainer = document.querySelector(".error-container");
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

  console.log(formTitle.value + " " + formAuthor.value + " " + formPages.value + " " + bookStatus )
  
  if (formTitle.value == "" || formAuthor.value == "" || formPages.value == "") {
    errorContainer.textContent = "Please fill in all the fields";
    errorContainer.setAttribute("style", "opacity: 1");
    console.log("error en el formulario");
    return;


  } else if ( formTitle.value  && formAuthor.value && formPages.value && bookStatus !== "Read" && bookStatus != "Not Read" ){
    errorContainer.textContent = "Choose a status";
    errorContainer.setAttribute("style", "opacity: 1");
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

  
let books = []
books.push(bookObject);
console.log(books);

// se podria añadir funciones especificar que perteneceria a cada libro como la de toggle de estado
    books.forEach((book) => {
      const bookdiv = document.createElement("div");
      bookdiv.className = "book";
    
      const bookdetails = document.createElement("div");
      bookdetails.className = "book-details";
    
      const booktitle = document.createElement("div");
      booktitle.className = "book-title";
    
      if(book.title.length > 34){
        book.title = book.title.slice(0, 34) + "...";
      }
      booktitle.textContent = book.title;
      bookdetails.appendChild(booktitle);
    
      const bookauthor = document.createElement("div");
      bookauthor.className = "book-author";
      if(book.author.length > 28){
        book.author = book.author.slice(0, 28) + "...";
      }
      bookauthor.textContent = "By " + book.author;
      bookdetails.appendChild(bookauthor);
    
      const booknpages = document.createElement("div");
      booknpages.className = "book-npages";
    
      const pagesindicator = document.createElement("div");
      pagesindicator.textContent = "Pages:";
      booknpages.appendChild(pagesindicator);
    
      const pagesnumber = document.createElement("div");
      pagesnumber.textContent = book.npages;
      booknpages.appendChild(pagesnumber);
      bookdetails.appendChild(booknpages);
      bookdiv.appendChild(bookdetails);
    
      const bookstatus = document.createElement("div");
      bookstatus.className = "book-status";
    
      const statusTitle = document.createElement("div");
      statusTitle.textContent = "Status:";
      bookstatus.appendChild(statusTitle);
    
      const statusIndicator = document.createElement("div");
      statusIndicator.className = "status-indicator";
      statusIndicator.textContent = book.status;
      if (book.status === "Read") {
        statusIndicator.classList.add("read");
      } else if (book.status === "Not Read") {
        statusIndicator.classList.add("not-read");
      }
      bookstatus.appendChild(statusIndicator);
      bookdetails.appendChild(bookstatus);

      const bookActions = document.createElement("div");
      bookActions.className = "book-actions";

      const bookEdit = document.createElement("div");
      bookEdit.className = "book-edit";
      
      const editIcon = document.createElement("span");
      editIcon.className = "material-symbols-outlined";
      editIcon.textContent = "edit";
      bookEdit.appendChild(editIcon);

      const bookDelete = document.createElement("div");
      bookDelete.className = "book-delete";

      const deleteIcon = document.createElement("span");
      deleteIcon.className = "material-symbols-outlined";
      deleteIcon.textContent = "delete";
      bookDelete.appendChild(deleteIcon);



      bookActions.appendChild(bookEdit);
      bookActions.appendChild(bookDelete);

      bookdetails.appendChild(bookActions);

      bookdiv.appendChild(bookdetails);
      bookscontainer.appendChild(bookdiv);
  
    });

 
    booksform.reset();
};

