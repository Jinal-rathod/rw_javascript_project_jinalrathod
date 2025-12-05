// 👍Library Management System

// Definition: Manages books, issue date, and return status.

// Features:
// ------------------
// Add book
// Issue book
// Return book
// Check availability

// Book Class
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.isIssued = false;
    this.issueDate = null;
  }

  // Issue book
  issueBook() {
    if (!this.isIssued) {
      this.isIssued = true;
      this.issueDate = new Date();
      console.log(`Book Issued: ${this.title} on ${this.issueDate}`);
    } else {
      console.log(`Book already issued!`);
    }
  }

  // Return book
  returnBook() {
    if (this.isIssued) {
      this.isIssued = false;
      const returnDate = new Date();
      console.log(`Book Returned: ${this.title} on ${returnDate}`);
      this.issueDate = null;
    } else {
      console.log(`This book was not issued!`);
    }
  }

  // Check availability
  checkAvailability() {
    return this.isIssued ? "Not Available" : "Available";
  }
}

// Library Class
class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
    console.log(`Book Added: ${book.title}`);
  }

  showBooks() {
    console.log("Library Books List:");
    this.books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} by ${
          book.author
        } | Status: ${book.checkAvailability()}`
      );
    });
  }
}

// Create Library Object
const library = new Library();

// Add Books
library.addBook(new Books("JavaScript Basics", "John Doe"));
library.addBook(new Books("Learning React", "Facebook Team"));

// Display All Books
library.showBooks();

// Issue First Book
library.books[0].issueBook();

// Check Availability After Issue
library.showBooks();

// Return Book
library.books[0].returnBook();

// Final List
library.showBooks();
