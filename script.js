Book = function (title, author, npages, status) {
  this.title = title;
  this.author = author;
  this.npages = npages;
  this.status = status;
};

const formbutton = document.getElementById("form_button");

formbutton.onclick = function () {
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

  book = new Book(
    formTitle.value,
    formAuthor.value,
    formPages.value,
    bookStatus
  );

  console.log(bookStatus);
  console.log(book);
};
