Book = function (title, author, npages, status) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const formbutton = document.getElementById("form_button");



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

   bookObject = new Book(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    bookStatus
  );

  const book = document.createElement("div");
  book.className = "book";

  const bookimage = document.createElement("div");
  bookimage.className = "book-image";
  const image = document.createElement("img");
  image.alt = "image here";
  image.src = "./media/b1.jpg"
  bookimage.appendChild(image);

  book.appendChild(bookimage);

  const bookdetails = document.createElement("div");
  bookdetails.className = "book-details";

  const booktitle = document.createElement("div");
  booktitle.className = "book-title";
  booktitle.textContent = bookObject.title;
  bookdetails.appendChild(booktitle);
 
  const bookauthor = document.createElement("div");
  bookauthor.className = "book-author";
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
  book.appendChild(bookdetails)

  const bookstatus = document.createElement("div");
  bookstatus.className = "book-status";

  const statusTitle = document.createElement("div");
  statusTitle.textContent = "Status:";
  bookstatus.appendChild(statusTitle);

  const statusIndicator = document.createElement("div");
  statusIndicator.className = "status-indicator";
  statusIndicator.textContent = bookObject.status;
  bookstatus.appendChild(statusIndicator);
  bookdetails.appendChild(bookstatus);


  book.appendChild(bookdetails)


  bookscontainer.appendChild(book)

};
