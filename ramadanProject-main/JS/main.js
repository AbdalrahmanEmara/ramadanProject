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
  }
}
window.addEventListener("load", function () {
  getPrayerTimes("Cairo", "Egypt");
});

// prayer time

//  todo
// to do list---------------------------------------------------------------------------------------------------------------


// to do end-------------------------------------------------------------------------------------
