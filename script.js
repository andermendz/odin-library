Book = function (title, author, npages, status) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const booksform = document.getElementById('booksform');
const formbutton = document.getElementById("form_button");

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

  const book = document.createElement("div");
  book.className = "book";

  const bookdetails = document.createElement("div");
  bookdetails.className = "book-details";

  const booktitle = document.createElement("div");
  booktitle.className = "book-title";

  if(bookObject.title.length > 34){
    bookObject.title = bookObject.title.slice(0, 34) + "...";
  }
  booktitle.textContent = bookObject.title;
  bookdetails.appendChild(booktitle);

  const bookauthor = document.createElement("div");
  bookauthor.className = "book-author";
  if(bookObject.author.length > 28){
    bookObject.author = bookObject.author.slice(0, 28) + "...";
  }
  bookauthor.textContent = "By " + bookObject.author;
  bookdetails.appendChild(bookauthor);

  const booknpages = document.createElement("div");
  booknpages.className = "book-npages";

  const pagesindicator = document.createElement("div");
  pagesindicator.textContent = "Pages:";
  booknpages.appendChild(pagesindicator);

  const pagesnumber = document.createElement("div");
  pagesnumber.textContent = bookObject.npages;
  booknpages.appendChild(pagesnumber);
  bookdetails.appendChild(booknpages);
  book.appendChild(bookdetails);

  const bookstatus = document.createElement("div");
  bookstatus.className = "book-status";

  const statusTitle = document.createElement("div");
  statusTitle.textContent = "Status:";
  bookstatus.appendChild(statusTitle);

  const statusIndicator = document.createElement("div");
  statusIndicator.className = "status-indicator";
  statusIndicator.textContent = bookObject.status;
  if (bookObject.status === "Read") {
    statusIndicator.classList.add("read");
  } else if (bookObject.status === "Not Read") {
    statusIndicator.classList.add("not-read");
  }
  bookstatus.appendChild(statusIndicator);
  bookdetails.appendChild(bookstatus);

  book.appendChild(bookdetails);

  booksform.reset();
  bookscontainer.appendChild(book);
};


let user = [{name: "pedro", age: 212}, {name: "dave", age: 21}, {name:"last person"}]


console.log(user[0].name);