let searchInput = document.getElementById("searchInput");
let suggestSearch = document.querySelector(".suggestSearch");
let findInput = document.getElementById("findInput");
let data = document.getElementById("data");
let hoursData = document.getElementById("hoursData");
let closeBtn = document.getElementById("closeBtn");
let keyAPI = "a264d5db944f4218bb9200222241312";
let currentIndex = -1;
let currentIndexHour = 0;

let currentWeather =
  "https://api.weatherapi.com/v1/current.json?key=a264d5db944f4218bb9200222241312&q=London,United Kingdom";

let forecastWeather =
  "https://api.weatherapi.com/v1/forecast.json?key=a264d5db944f4218bb9200222241312&q=London&days=5";

let Search =
  "https://api.weatherapi.com/v1/search.json?key=a264d5db944f4218bb9200222241312&q=lond";

let conditions = "https://www.weatherapi.com/docs/weather_conditions.json";

selectCity("cairo", "Egypt");

// search by chars
async function searchCities(letters) {
  try {
    let response = await (
      await fetch(
        `https://api.weatherapi.com/v1/search.json?key=a264d5db944f4218bb9200222241312&q=${letters}`
      )
    ).json();

    displaySearch(response);
    // console.log("display", response);
  } catch (error) {
    showAlert("Failed to fetch data from API. Please try again later.");
  }
}

// select city
async function selectCity(name, country) {
  try {
    let response = await (
      await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=a264d5db944f4218bb9200222241312&q=${name},${country}&days=3`
      )
    ).json();
    suggestSearch.classList.add("d-none");
    hoursData.classList.remove("d-none");
    searchInput.value = "";
    displayData(response);
    displayHours(response);
  } catch (error) {
    showAlert("Failed to fetch data from API. Please try again later.");
  }
}

function displaySearch(response) {
  let container = "";
  for (let i = 0; i < response.length; i++) {
    container += `  

      <div class="searchResult m-1 p-1 fw-bold"  onclick="selectCity('${response[i].name} , ${response[i].country}')">
              <div>${response[i].name}, <span>${response[i].country}</span></div>
              <div class="w-100 mx-auto bg-white line mt-1"></div>
          </div>

    `;
  }
  suggestSearch.innerHTML = container;

  if (response.length > 0) {
    suggestSearch.classList.remove("d-none");
  } else {
    suggestSearch.classList.add("d-none");
  }

  currentIndex = -1;
}

function handleArrowNavigation(event) {
  const suggestions = document.querySelectorAll(".searchResult");

  if (suggestions.length > 0) {
    if (event.key === "ArrowDown") {
      currentIndex = (currentIndex + 1) % suggestions.length;
    } else if (event.key === "ArrowUp") {
      currentIndex =
        (currentIndex - 1 + suggestions.length) % suggestions.length;
    } else if (event.key === "Enter") {
      if (currentIndex >= 0) {
        suggestions[currentIndex].click();
      }
      return;
    }

    suggestions.forEach((item) => item.classList.remove("highlight"));
    if (currentIndex >= 0 && currentIndex < suggestions.length) {
      suggestions[currentIndex].classList.add("highlight");
      suggestions[currentIndex].scrollIntoView({ block: "nearest" });
    }
  }

  const hours = document.querySelectorAll(".hoursData");

  if (hours.length > 0) {
    if (event.key === "ArrowRight") {
      currentIndexHour = (currentIndexHour + 1) % hours.length;
      console.log(currentIndexHour);
    } else if (event.key === "ArrowLeft") {
      currentIndexHour = (currentIndexHour - 1 + hours.length) % hours.length;
      console.log(currentIndexHour);
    }

    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      if (currentIndexHour >= 0 && currentIndexHour < hours.length) {
        hours[currentIndexHour].scrollIntoView({ block: "start" });
      }
    }
  }
}

document.addEventListener("keydown", handleArrowNavigation);

searchInput.addEventListener("input", function () {
  let inputData = searchInput.value;
  searchCities(inputData);
});

function displayData(response) {
  let container = "";

  for (let i = 0; i < 3; i++) {
    let localtime = response.forecast.forecastday[i].date;
    let timezone = response.location.tz_id;
    let date = new Date(localtime);
    let dateString = String(date);

    let options = { weekday: "long", timeZone: timezone };

    let dayName = "";
    if (i == 0) {
      dayName = "Today";
    } else if (i == 1) {
      dayName = "Tomorrow";
    } else {
      dayName = new Intl.DateTimeFormat("en-US", options).format(date);
    }

    container += `  
      <div class="weather-card">
          <div class="d-flex justify-content-between align-items-center">

          <h3 class="date">${dayName}</h3>
          <div class="date">${dateString.split(" ", 3).join(" ")}</div>

          </div>
          <div > ${response.location.name}, ${response.location.country}</div>
          <img src="https:${
            response.forecast.forecastday[i].day.condition.icon
          }" alt="Weather Icon">
          <div>${response.forecast.forecastday[i].day.condition.text}</div>
            <div class="temperature fw-bold">
            ${response.forecast.forecastday[i].day.avgtemp_c}°C
            </div>
          <div class="weather-details">
          <div class="weather-detail">
            <span>Max Temp</span>
            <span>${response.forecast.forecastday[i].day.maxtemp_c}°C</span>
          </div>
          <div class="weather-detail">
            <span>Min Temp</span>
            <span>${response.forecast.forecastday[i].day.mintemp_c}°C</span>
          </div>
          <div class="weather-detail">
            <span>Average Humidity</span>
            <span>${response.forecast.forecastday[i].day.avghumidity}%</span>
          </div>
            <div class="weather-detail">
              <span>Wind Speed</span>
              <span>${response.forecast.forecastday[i].day.maxwind_kph}</span>
            </div>
          </div>
        </div>
    `;
  }
  data.innerHTML = container;
}

function displayHours(response) {
  let time = response.forecast.forecastday[0].hour[0].time.split(" ", 2)[1];
  let container = "";
  for (let i = 0; i < 24; i++) {
    let j = i % 12 || 12;
    let isDay = i < 12 ? "AM" : "PM";

    container += `

        <div class="hoursData col-6 col-md-3 d-flex justify-content-center align-items-center" >
          <div class="box mx-1">
            <div class="overlap-group d-flex justify-content-center align-items-center ">
              <div class="  d-flex justify-content-center align-items-center flex-column ">
                <div class="fw-bold">${
                  response.forecast.forecastday[0].hour[j].time.split(" ", 2)[1]
                } ${isDay}</div>
                <div class="text-center imgSizeDay">
                  <img src="https:${
                    response.forecast.forecastday[0].hour[i].condition.icon
                  }" class="w-100" />
                </div>
                <div class="fw-bold">${
                  response.forecast.forecastday[0].hour[i].temp_c
                }°C</div>
                <div ">${
                  response.forecast.forecastday[0].hour[i].condition.text
                }</div>
                <div class="text-center imgSizeWind">
                  <img class="w-100" src="img/navigation-1.png" />
                </div>
                <div class="">${
                  response.forecast.forecastday[0].hour[i].wind_kph
                }km/h</div>
              </div>
            </div>
          </div>
        </div>


      `;
  }
  hoursData.innerHTML = container;
  currentIndexHour = 0;
}

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.className = savedTheme;
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  localStorage.setItem("theme", body.className);
});

/***************** */

function showAlert(message) {
  const alertBox = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  alertMessage.textContent = message;
  alertBox.classList.remove("d-none");

  setTimeout(() => {
    closeAlert();
  }, 5000);
}

function closeAlert() {
  const alertBox = document.getElementById("customAlert");
  alertBox.classList.add("d-none");
}

closeBtn.addEventListener("click", closeAlert);
