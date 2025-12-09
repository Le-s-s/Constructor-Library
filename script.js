let library = [];
function book (author,title,pages,read){
    if(!new.target){
        throw Error("This is a constructor.")
    }
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.info = `${this.title} by ${this.author}, it's ${this.pages} pages.`;
    this.id = crypto.randomUUID();
};

function addToLibrary (author,title,pages) {
    const bookToAdd = new book(author,title,pages);
    library.push(bookToAdd);
};

function inLibrary () {
    library.forEach(element => {
        alert(element.info);
        alert(element.id);
    });
}