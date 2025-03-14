var swiper = new Swiper(".mySwiper", {
    spaceBetween: 20,
    autoplay: {
        delay: 2000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: { slidesPerView: 2 }, // Small screens (phones)
        480: { slidesPerView: 3 }, // Slightly larger phones
        768: { slidesPerView:4 }, // Tablets
        1024: { slidesPerView: 6 }, // Small laptops
        1280: { slidesPerView: 7 }, // Large screens
        1440: { slidesPerView: 8 }  // Full-size desktops
    }
});


const swiperWrapper = document.querySelector(".swiper-wrapper");

let books = [
    { name: "مباحث في أصول الدين", image: "./img/1.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/do5UqLso9w11kvAs6fMsQUuBoQX06xebtX10ekxE.pdf"},
    { name: "أسماء الله وصفاته", image: "./img/2.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/Q7Dx2ww1JWl8NY5cSNTqyhJVI7Yyfks7ePcuzutZ.pdf"},
    { name: "الإبداع في كمال الشرع", image: "./img/3.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/OZoao0IWxhhe3YksNNBC7I7P8T0CRsw3bhI0geMt.pdf"},
    { name: "التمسك بالسنة", image: "./img/4.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/feEwev0UUHiAmTu44G4RUUE1tlNiJ0FJmmUZmJCi.pdf"},
    { name: "الخلاف بين العلماء", image: "./img/5.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/j88YUnmizlnSdsfKgLlp8XesJNlaqfBzvpeAdG4j.pdf"},
    { name: "مكارم الأخلاق", image: "./img/6.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/2TSIEsiymWdSHNNTasU5ZLfKi9mYrtv0el44bdQh.pdf"},
    { name: "من الأحكام الفقهية في الطهارة  ", image: "./img/7.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/h6GCK7mectZvd9oEyqSBcxUxFoTiazomb3MrfIRb.pdf"},
    { name: "ستون سؤالا في أحكام الحيض ", image: "./img/8.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/udjv4bLWNVb3AbORgXOOAA0bdjWlknisUazsp7Dt.pdf"},
    { name: "رسالة في مواقيت الصلاة", image: "./img/9.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/U4YtC46myREiRGBTt6IF8KeJhAt12Y3aKhCQ8SD4.pdf"},
    { name: " رسالة في سجود السهو", image: "./img/10.png" ,url:"https://shekhcp.binothaimeen.net/storage/translated-books/2024-09-08/zgcKXDJ1lBKl5g69PdOrsVZ59Vfr6l055iocA5vk.pdf"}
];

if (swiperWrapper) {
    
    books.forEach((book) => {
        let slide = document.createElement("div"); 
        slide.classList.add("swiper-slide"); 

        slide.innerHTML = `
            <div class="img-holder">
                <img src="${book.image}" alt="${book.name}" onerror="this.src='./img/default.png'"/>
            </div>
            <div class="book-content">
                <p>${book.name}</p>
                <a class="btn" href="${book.url}" target="_blank" rel="noopener noreferrer">المزيد</a>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
    swiper.update();
} 
var swiper2 = new Swiper(".mySwiper2", {
    pagination: {
      el: ".swiper-pagination2",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
});

