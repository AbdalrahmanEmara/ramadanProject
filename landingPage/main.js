const toggleBtn = document.querySelector(".toggle");
    const toggleBtnIcon = document.querySelector(".toggle i");
    const dropDown = document.querySelector(".dropdown-menu");

    toggleBtn.onclick = function () {
        dropDown.classList.toggle("open")
    const isOpen = dropDown.classList.contains('open')

    toggleBtnIcon.classList=isOpen
    ? "fa-solid fa-xmark"
    : "fa-solid fa-bars"
}