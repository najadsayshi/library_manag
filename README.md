# Library Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The **Library Management System** is a web application that helps users manage a library by performing CRUD operations on book records. It allows users to add, view, update, delete, issue, and return books.

## Features
- Add new books with details such as name, author, pages, and price.
- View all available books in a tabular format.
- Issue and return books, updating their availability status.
- Delete books from the library.
- User-friendly interface with responsive design.

## Technologies Used
- **Node.js**: Backend runtime environment.
- **Express**: Web framework for building the application.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM for interacting with MongoDB.
- **EJS**: Template engine for rendering dynamic HTML pages.
- **CSS**: Styling for the user interface.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/najadsayshi/library_manag.git
   ```

2. Navigate to the project directory:
   ```bash
   cd library_manag
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the MongoDB server locally or use a cloud-based MongoDB service.

5. Run the application:
   ```bash
   node app.js
   ```

6. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Usage
- **Home Page**: Displays a list of all books.
- **Add Book**: Use the form to add a new book.
- **Issue Book**: Change a book's status to "Issued".
- **Return Book**: Change a book's status to "Available".
- **Delete Book**: Remove a book from the database.

## File Structure
```
library_manag/
├── app.js           # Main application file
├── config/
│   ├── db.js       # Database configuration file
├── views/
│   ├── home.ejs    # Home page template
├── public/
│   ├── styles.css  # CSS file for styling
├── models/
│   ├── book.js     # Mongoose schema for books
├── package.json     # Project metadata and dependencies
└── README.md        # Project documentation
```

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Describe your changes"
   ```
4. Push to your forked repository and create a pull request.

## License
This project is licensed under the NAJAD LICENCE :)).

---
Feel free to explore, contribute, and enhance the system as needed!
