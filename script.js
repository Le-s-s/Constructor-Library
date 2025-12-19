let library = [];



function Book(author, title, pages, read) {
    if (!new.target) throw new Error("This is a constructor.");
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = `${title} by ${author}, it's ${pages} pages.`;
    this.id = crypto.randomUUID();
}

function libraryPrompt(){
    let author = "";
    let title = "";
    let pages = 0;

    // loops until author is not null
    while (!author) {
        author = prompt("What is the author?");
        if (author === null) return;
        else if (author === "") alert("Please enter author.");
    }

    while (!title) {
        title = prompt("What is the title?");
        if (title === null) return;
        else if (title === "") alert("Please enter title");
    }

    while (!pages) {
        pages = prompt("How many pages?");
        if (pages === null) return;

        pages = Number(pages);
        
        if (pages > 0) break;

        alert("Please enter a number greater than 0.");
    }

    let read = confirm("Have you read this book?");

    addToLibrary(author, title, pages,read);
    
}

function addToLibrary(author, title, pages,read) {
    let bookToAdd = new Book(author, title, pages,read);
    library.push(bookToAdd);

    let viewLibrary = document.querySelector(".grid");

    let viewBook = document.createElement("div");
    viewBook.classList.add("card");
    viewBook.id = bookToAdd.id;

    // creates text content of cards
    let bookTitle = document.createElement("h1")
    let bookAuthor = document.createElement("h2")
    let bookPages = document.createElement("h2")
    bookTitle.textContent = `${bookToAdd.title}`;
    bookAuthor.textContent =  `by  ${bookToAdd.author}`
    bookPages.textContent = `Page count ${bookToAdd.pages}`

    // Create a button to remove this book from the library
    let delButton = document.createElement("button")
    delButton.classList.add("delButton");
    delButton.textContent = `Remove from library`;

    viewLibrary.appendChild(viewBook);
    viewBook.appendChild(bookTitle);
    viewBook.appendChild(bookAuthor);
    viewBook.appendChild(bookPages);
    viewBook.appendChild(delButton);

    // On click, remove this book from both the DOM and the library array
    delButton.addEventListener("click", () => {
        removeFromLibrary(bookToAdd.id);
    });
}

function removeFromLibrary(id) {
    const deleteBook = document.getElementById(id)

    // Guard against a missing element, then remove the book card from the DOM
    if (deleteBook) deleteBook.remove();

    // Remove the book with the matching id from the library array
    library = library.filter(book => book.id !== id);
}   

function inLibrary() {
    library.forEach(element => {
        alert(element.info);
        alert(element.id);
    });
}   


document.addEventListener("DOMContentLoaded", () => {
    const bookButton = document.querySelector(".addBook");
    bookButton.addEventListener("click", libraryPrompt);
});

//todo
// simplify error handling
// add read button.