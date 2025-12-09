let library = [];



function book(author, title, pages, read) {
    if (!new.target) throw new Error("This is a constructor.");
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = `${title} by ${author}, it's ${pages} pages.`;
    this.id = crypto.randomUUID();
}

function addToLibrary(author, title, pages) {
    let bookToAdd = new book(author, title, pages);
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

//todo
//add ability to let people add books using a button