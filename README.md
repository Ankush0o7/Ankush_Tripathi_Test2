Book Model Class
The Book class represents a basic model for book objects. It contains attributes such as id, name, author, price, and genre, providing a structure to store and manage book-related information.

Purpose
This class serves as a blueprint for creating book objects within an application. It encapsulates properties commonly associated with books, allowing for easy manipulation, storage, and retrieval of book details.

Usage
reating a Book Object
To create a Book object, utilize the constructor by providing values for id, name, author, price, and genre.


Sure, here's a README file that you might use to explain the purpose and usage of this Book model class:

Book Model Class
The Book class represents a basic model for book objects. It contains attributes such as id, name, author, price, and genre, providing a structure to store and manage book-related information.

Purpose
This class serves as a blueprint for creating book objects within an application. It encapsulates properties commonly associated with books, allowing for easy manipulation, storage, and retrieval of book details.

Usage
Creating a Book Object
To create a Book object, utilize the constructor by providing values for id, name, author, price, and genre.

java
Copy code
Book book = new Book(1, "Sample Book", "Sample Author", 29.99, "Sample Genre");
Accessing and Modifying Attributes
Retrieve and modify attributes using getter and setter methods.

java
Copy code
// Get book name
String bookName = book.getName();

// Set book price
book.setPrice(19.99);
Displaying Book Information
Utilize the toString() method to get a string representation of the Book object.

String bookInfo = book.toString();
System.out.println(bookInfo);
Model Structure
int id: Unique identifier for the book.
String name: Name/title of the book.
String author: Author of the book.
double price: Price of the book.
String genre: Genre/category of the book.


Methods
getId(): Retrieve the book's ID.
setId(int id): Set the book's ID.
getName(): Retrieve the book's name.
setName(String name): Set the book's name.
getAuthor(): Retrieve the book's author.
setAuthor(String author): Set the book's author.
getPrice(): Retrieve the book's price.
setPrice(double price): Set the book's price.
getGenre(): Retrieve the book's genre.
setGenre(String genre): Set the book's genre.
