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

  bookscontainer.appendChild(book)

  console.log(bookscontainer)

  
  
  console.log(bookStatus);
  console.log(book);
};
