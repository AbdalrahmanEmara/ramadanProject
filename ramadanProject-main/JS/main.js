//nav bar
const toggleBtn = document.querySelector(".toggle");
const toggleBtnIcon = document.querySelector(".toggle i");
const dropDown = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDown.classList.toggle("open");
  const isOpen = dropDown.classList.contains("open");

  toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// prayer time
function convertTo12HourFormat(time) {
  let [hours, minutes] = time.split(":").map(Number);
  let period = hours >= 12 ? "م" : "ص";
  hours = hours % 12 || 12; // Convert 0 to 12
  return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
}

async function getPrayerTimes(city, country) {
  try {
    const url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;
    console.log("Fetching:", url); // Debugging log
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("API Response:", data); // Debugging log

    if (!data.data || !data.data.timings) {
      throw new Error("Invalid data format received!");
    }

    const timings = data.data.timings;

    // Update prayer times in 12-hour format
    document.getElementById("fajr").innerText = convertTo12HourFormat(
      timings.Fajr,
    );
    document.getElementById("sunrise").innerText = convertTo12HourFormat(
      timings.Sunrise,
    );
    document.getElementById("dhuhr").innerText = convertTo12HourFormat(
      timings.Dhuhr,
    );
    document.getElementById("asr").innerText = convertTo12HourFormat(
      timings.Asr,
    );
    document.getElementById("maghrib").innerText = convertTo12HourFormat(
      timings.Maghrib,
    );
    document.getElementById("isha").innerText = convertTo12HourFormat(
      timings.Isha,
    );
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    alert("Failed to fetch prayer times. Check the console for details.");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  getPrayerTimes("Cairo", "Egypt");
});
// prayer time

// book
let books = [
  { name: "book1", image: "./imgs/1.png" },
  { name: "book2", image: "./imgs/2.png" },
  { name: "book3", image: "./imgs/3.png" },
  { name: "book4", image: "./imgs/4.png" },
  { name: "book5", image: "./imgs/5.png" },
  { name: "book6", image: "./imgs/6.png" },
  { name: "book7", image: "./imgs/7.png" },
  { name: "book8", image: "./imgs/8.png" },
  { name: "book9", image: "./imgs/9.png" },
  { name: "book10", image: "./imgs/10.png" },
];

function displayBooks() {
  let gridContainer = document.getElementById("booksGrid");
  gridContainer.innerHTML = ""; // Clear previous content

  books.forEach((book) => {
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
// books
