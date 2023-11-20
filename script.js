
Book = function (title, author, npages, status){
    this.title = title;
    this.author = author;
    this.npages = npages;
    this.status = status;
}

book1 = new Book("test1", "test author 1", 344, "read");

console.log(book1);