let books = [
    { name: "book1", image: "./img/1.png" },
    { name: "book2", image: "./img/2.png" },
    { name: "book3", image: "./img/3.png" },
    { name: "book4", image: "./img/4.png" },
    { name: "book5", image: "./img/5.png" },
    { name: "book6", image: "./img/6.png" },
    { name: "book7", image: "./img/7.png" },
    { name: "book8", image: "./img/8.png" },
    { name: "book9", image: "./img/9.png" },
    { name: "book10", image: "./img/10.png" }
];

function displayBooks() {
    let gridContainer = document.getElementById("booksGrid");
    gridContainer.innerHTML = ""; // Clear previous content

    books.forEach(book => {
        let bookItem = document.createElement("div");
        bookItem.classList.add("book");

        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.name}">
            <p>${book.name}</p>
            <button class="btn">المزيد</button>
        `;

        gridContainer.appendChild(bookItem);
    });
}

displayBooks(); // Call function to render books