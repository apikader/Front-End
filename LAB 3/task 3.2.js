function Book(bookName, authorName) {
    this.bookName = bookName;
    this.authorName = authorName;
  }
  Book.prototype.price = 10.99;
  let myBook = new Book("The Great Gatsby", "F. Scott Fitzgerald");
  console.log("Book Name: " + myBook.bookName);
  console.log("Author Name: " + myBook.authorName);
  console.log("Price: " + myBook.price);
  