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

    // while empty str or null return to reprompt
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
    let viewLibrary = document.querySelector(".grid");
    let viewBook = document.createElement("div");
    library.push(bookToAdd);
    viewBook.classList.add("card");
    viewBook.textContent = `${bookToAdd.title}`;
    viewBook.id = bookToAdd.id;
    viewLibrary.appendChild(viewBook);
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