var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
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
        480: { slidesPerView: 4 }, // Slightly larger phones
        768: { slidesPerView: 5 }, // Tablets
        1024: { slidesPerView: 6 }, // Small laptops
        1280: { slidesPerView: 7 }, // Large screens
        1440: { slidesPerView: 8 }  // Full-size desktops
    }
});


const swiperWrapper = document.querySelector(".swiper-wrapper");

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

if (swiperWrapper) {
    
    books.forEach((book) => {
        let slide = document.createElement("div"); 
        slide.classList.add("swiper-slide"); 

        slide.innerHTML = `
            <div>
                <img src="${book.image}" alt="${book.name}" onerror="this.src='./img/default.png'"/>
            </div>
            <div>
                <p>${book.name}</p>
                <button class="btn">المزيد</button>
            </div>
        `;
        swiperWrapper.appendChild(slide);
    });
    swiper.update();
} 
