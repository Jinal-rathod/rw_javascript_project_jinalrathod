const countryInput = document.getElementById("countryInput");
const getDataBtn = document.getElementById("getData");
const result = document.getElementById("result");
const error = document.getElementById("error");

function Empty() {
  result.innerHTML = `
      <div class="card">
        <div class="left">
          <div style="width:200px; height:128px;border-radius:5px;background:linear-gradient(90deg,#0ea5a6,#3b82f6);"></div>
          <div style="font-weight: 600;" class="small">Search a country</div>
        </div>
        <div class="body">
          <div class="meta">
            <div class="stat"><span class="small">Cases</span><strong>—</strong></div>
            <div class="stat"><span class="small">Deaths</span><strong>—</strong></div>
            <div class="stat"><span class="small">Active</span><strong>—</strong></div>
            <div class="stat"><span class="small">Recovered</span><strong>—</strong></div>
          </div>
          <div class="lastUpdated">No data loaded</div>
        </div>
      </div>
    `;
}

function onLoading(country) {
  error.style.display = "none";
  result.innerHTML = `
      <div class="card">
        <div class="left">
          <div style="width:100px;height:64px;border-radius:8px;background:linear-gradient(90deg,#94a3b8,#64748b); opacity:0.6"></div>
          <div class="small">Loading</div>
        </div>
        <div class="body">
          <div class="big">
            Fetching COVID data......
          </div>
        </div>
      </div>
    `;
}

async function CoronaDatas(country) {
  const url = `https://disease.sh/v3/covid-19/countries/${country}`;
  try {
    onLoading(country);
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data....");
    const data = await res.json();
    result.innerHTML = `
      <div class="card" >
        <div class="left">
          <img class="flag" src="${data.countryInfo.flag}" alt="flag" />
          <div style="margin-top:10px;" >${data.country}</div>
        </div>

        <div class="body">
          <div class="meta">
            <div class="stat">
              <span class="small">Total cases</span>
              <strong>${data.cases.toLocaleString()}</strong>
            </div>
            <div class="stat">
              <span class="small">Active</span>
              <strong>${data.active.toLocaleString()}</strong>
            </div>
            <div class="stat">
              <span class="small">Total deaths</span>
              <strong>${data.deaths.toLocaleString()}</strong>
            </div>
            <div class="stat">
              <span class="small">Recovered</span>
              <strong>${data.recovered.toLocaleString()}</strong>
            </div>
          </div>

          <div style="display:flex;justify-content:space-between;align-items:center;margin-top:20px;flex-wrap:wrap">
            <div style="text-size:15px;">Population : <strong style="padding-left: 5px;" class="small">${data.population.toLocaleString()}</strong></div>
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
  const country = countryInput.value.trim();
  error.style.display = "none";
  if (!country) {
    error.textContent = "Please enter a country name.";
    return;
  }
  CoronaDatas(country);
});

countryInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getDataBtn.click();
  }
});
