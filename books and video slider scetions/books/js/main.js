let books = [
    { name: "مباحث في أصول الدين", image: "./img/1.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/do5UqLso9w11kvAs6fMsQUuBoQX06xebtX10ekxE.pdf"},
    { name: "أسماء الله وصفاته", image: "./img/2.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/Q7Dx2ww1JWl8NY5cSNTqyhJVI7Yyfks7ePcuzutZ.pdf"},
    { name: "الإبداع في كمال الشرع", image: "./img/3.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/OZoao0IWxhhe3YksNNBC7I7P8T0CRsw3bhI0geMt.pdf"},
    { name: "التمسك بالسنة", image: "./img/4.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/feEwev0UUHiAmTu44G4RUUE1tlNiJ0FJmmUZmJCi.pdf"},
    { name: "الخلاف بين العلماء", image: "./img/5.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/j88YUnmizlnSdsfKgLlp8XesJNlaqfBzvpeAdG4j.pdf"},
    { name: "مكارم الأخلاق", image: "./img/6.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/2TSIEsiymWdSHNNTasU5ZLfKi9mYrtv0el44bdQh.pdf"},
    { name: "من الأحكام الفقهية في الطهارة والصلاة والجنائز", image: "./img/7.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/h6GCK7mectZvd9oEyqSBcxUxFoTiazomb3MrfIRb.pdf"},
    { name: "ستون سؤالا في أحكام الحيض والنفاس", image: "./img/8.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/udjv4bLWNVb3AbORgXOOAA0bdjWlknisUazsp7Dt.pdf"},
    { name: "رسالة في مواقيت الصلاة", image: "./img/9.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/U4YtC46myREiRGBTt6IF8KeJhAt12Y3aKhCQ8SD4.pdf"},
    { name: " رسالة في سجود السهو", image: "./img/10.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/zgcKXDJ1lBKl5g69PdOrsVZ59Vfr6l055iocA5vk.pdf"}
];

function displayBooks() {
    let gridContainer = document.getElementById("booksGrid");
    

    books.forEach(book => {
        let bookItem = document.createElement("div");
        bookItem.classList.add("book");

        bookItem.innerHTML = `
            <img src="${book.image}" alt="${book.name}">
            <p>${book.name}</p>
            <a class="btn" href="${book.url}">المزيد</a>
        `;

        gridContainer.appendChild(bookItem);
    });
}

displayBooks(); // Call function to render books