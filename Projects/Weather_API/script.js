const API_KEY = "21d2e8a19e3532dd32fd9fbd0e9120df";

const cityInput = document.getElementById("cityInput");
const getDataBtn = document.getElementById("getData");
const result = document.getElementById("result");
const error = document.getElementById("error");

function Empty() {
  result.innerHTML = `
      <div class="card">
        <div class="body">
          <div class="meta">
            <div class="stat"><span class="small">Temperature</span><strong>—</strong></div>
            <div class="stat"><span class="small">Humidity</span><strong>—</strong></div>
            <div class="stat"><span class="small">Wind</span><strong>—</strong></div>
            <div class="stat"><span class="small">Feels</span><strong>—</strong></div>
            <div class="stat"><span class="small">Pressure</span><strong>—</strong></div>
            <div class="stat"><span class="small">Description</span><strong>—</strong></div>
            <div class="stat"><span class="small">Sea Level</span><strong>—</strong></div>
            <div class="stat"><span class="small">Grnd Level</span><strong>—</strong></div>
          </div>
          <div class="lastUpdated">No data loaded</div>
        </div>
      </div>
    `;
}

function onLoading(city) {
  error.style.display = "none";
  result.innerHTML = `
      <div class="card">
        <div class="body">
          <div class="big">
            Fetching Weather data......
          </div>
        </div>
      </div>
    `;
}

async function WeatherDatas(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

  try {
    onLoading(city);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data....");
    const data = await res.json();
    result.innerHTML = `
      <div class="card" >
        <div class="body">
          <div class="meta">
            <div class="stat">
              <span class="small">Temperature</span>
              <strong>${data.main.temp}</strong>
            </div>
            <div class="stat">
              <span class="small">visiblity</span>
              <strong>${data.main.humidity}</strong>
            </div>
            <div class="stat">
              <span class="small">Wind</span>
              <strong>${data.wind.speed}</strong>
            </div>
            <div class="stat">
              <span class="small">Feels</span>
              <strong>${data.main.feels_like}/${data.main.temp_min}/${data.main.temp_max}</strong>
            </div>
            <div class="stat">
             <span class="small">Pressure</span>
             <strong>${data.main.pressure}</strong>
           </div>
            <div class="stat">
              <span class="small">Description</span>
              <strong>${data.weather[0].description}</strong>
            </div>
             <div class="stat">
              <span class="small">Sea Level</span>
              <strong>${data.main.sea_level}</strong>
            </div>
             <div class="stat">
              <span class="small">Grnd Level</span>
              <strong>${data.main.grnd_level}</strong>
            </div>
          </div>
        </div>
      </div>
    `;
  } catch (err) {
    error.textContent = "Failed to fetch data...";
    Empty();
  }
}

Empty();

getDataBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  error.style.display = "none";
  if (!city) {
    error.textContent = "Please enter a city name.";
    return;
  }
  WeatherDatas(city);
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getDataBtn.click();
  }
});
