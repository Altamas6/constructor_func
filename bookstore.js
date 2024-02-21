// Author constructor
function Author(name, birthYear, nationality){
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
}

// Book constructor
function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
}

// Method to get book information
Book.prototype.getBookInfo = function() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author.name);
    console.log("Genre: " + this.genre);
    console.log("Price: $" + this.price);
    console.log("-------------------------");
}

// Creating instances of Author and Book objects
var author1 = new Author("J.K. Rowling", 1965, "British");
var book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 10.99);

var author2 = new Author("George Orwell", 1903, "British");
var book2 = new Book("1984", author2, "Dystopian", 8.99);

var author3 = new Author("Harper Lee", 1926, "American");
var book3 = new Book("To Kill a Mockingbird", author3, "Fiction", 9.99);

// Displaying book details
book1.getBookInfo();
book2.getBookInfo();
book3.getBookInfo();
