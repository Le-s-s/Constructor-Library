let library = [];


class Book{
    constructor(author, title, pages, read) {
        if (!new.target) throw new Error("This is a constructor.");
        this.author = author;
        this.title = title;
        this.pages = pages;
        this.read = read;
        this.info = `${title} by ${author}, it's ${pages} pages.`;
        this.id = crypto.randomUUID();
    }
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

    // Creates checkbox for showcasing read status.
    let readButton = document.createElement("input")
    readButton.type = 'checkbox'
    readButton.classList.add("readButton");
    readButton.id = `read-${bookToAdd.id}`;

    // creates label for read Button
    const readLabel = document.createElement("label");
    readLabel.setAttribute("for", readButton.id);
    readLabel.innerHTML = "Have you read this?";
    

    if (bookToAdd.read) readButton.checked = true;

    viewLibrary.appendChild(viewBook);
    viewBook.appendChild(bookTitle);
    viewBook.appendChild(bookAuthor);
    viewBook.appendChild(bookPages);
    viewBook.appendChild(readLabel); 
    viewBook.appendChild(readButton);
    viewBook.appendChild(delButton);
      

    // On click, remove this book from both the DOM and the library array
    delButton.addEventListener("click", () => {
        removeFromLibrary(bookToAdd.id);
    });

    // On click, remove this book from both the DOM and the library array
    readButton.addEventListener("click", (e) => {
        isRead(bookToAdd.id, e.target.checked);
    });
}

function removeFromLibrary(id) {
    const deleteBook = document.getElementById(id)

    // Guard against a missing element, then remove the book card from the DOM
    if (deleteBook) deleteBook.remove();

    // Remove the book with the matching id from the library array
    library = library.filter(book => book.id !== id);
}   

// find's book with matching id and sets it's 
// read status to the status of the checkbox.
function isRead(id,checked) {
    const book = library.find(book => book.id === id);
    if (book) book.read = checked;
}

function inLibrary() {
    library.forEach(element => {
        alert(element.info);
        alert(element.id);
        alert(element.read)
    });
}   


document.addEventListener("DOMContentLoaded", () => {
    const bookButton = document.querySelector(".addBook");
    bookButton.addEventListener("click", libraryPrompt);
});

//todo
// add more error handling