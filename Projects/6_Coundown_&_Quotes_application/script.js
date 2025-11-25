{
  // ====== Countdown Timer Logic ======
  const targetInput = document.getElementById("targetInput");
  const startBtn = document.getElementById("startBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const resetBtn = document.getElementById("resetBtn");
  const countdownDisplay = document.getElementById("countdownDisplay");
  const statusEl = document.getElementById("status");

  let intervalId = null;
  let targetTime = null;
  let pausedRemaining = null; // ms remaining when paused

  function formatTime(ms) {
    if (ms < 0) ms = 0;
    const totalSeconds = Math.floor(ms / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);
    return `${String(days).padStart(2, "0")}:${String(hours).padStart(
      2,
      "0"
    )}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  function updateCountdown() {
    const now = Date.now();
    const msLeft = targetTime - now;
    countdownDisplay.textContent = formatTime(msLeft);
    if (msLeft <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      statusEl.textContent = "Finished";
      // small notification flash
      document.body.classList.add("animate-pulse");
      setTimeout(() => document.body.classList.remove("animate-pulse"), 1200);
    }
  }

  startBtn.addEventListener("click", () => {
    // determine targetTime
    if (pausedRemaining != null && !intervalId) {
      // resume from pause
      targetTime = Date.now() + pausedRemaining;
      pausedRemaining = null;
    } else {
      const val = targetInput.value;
      if (!val) return alert("Please choose a target date & time.");
      targetTime = new Date(val).getTime();
      if (isNaN(targetTime)) return alert("Invalid date/time.");
      if (targetTime <= Date.now()) return alert("Choose a future date/time.");
    }

    if (intervalId) return;
    updateCountdown();
    intervalId = setInterval(updateCountdown, 1000);
    statusEl.textContent = "Running";
  });

  pauseBtn.addEventListener("click", () => {
    if (!intervalId) return;
    clearInterval(intervalId);
    intervalId = null;
    pausedRemaining = targetTime - Date.now();
    statusEl.textContent = "Paused";
  });

  resetBtn.addEventListener("click", () => {
    if (intervalId) clearInterval(intervalId);
    intervalId = null;
    pausedRemaining = null;
    targetTime = null;
    countdownDisplay.textContent = "00:00:00:00";
    statusEl.textContent = "Stopped";
  });

  // ====== Quote Generator Logic ======
  const defaultQuotes = [
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "You are stronger than you think.",
    "Small steps every day lead to big results.",
  ];

  const STORAGE_KEY = "saved_quotes_v1";
  const genQuoteBtn = document.getElementById("genQuoteBtn");
  const quoteText = document.getElementById("quoteText");
  const copyQuoteBtn = document.getElementById("copyQuoteBtn");
  const newQuoteInput = document.getElementById("newQuoteInput");
  const addQuoteBtn = document.getElementById("addQuoteBtn");
  const clearQuotesBtn = document.getElementById("clearQuotesBtn");
  const savedCount = document.getElementById("savedCount");

  function loadSavedQuotes() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  function saveQuotes(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
    renderSavedCount();
  }

  function renderSavedCount() {
    const saved = loadSavedQuotes();
    savedCount.textContent = saved.length;
  }

  function getAllQuotes() {
    return [...defaultQuotes, ...loadSavedQuotes()];
  }

  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  genQuoteBtn.addEventListener("click", () => {
    const q = pickRandom(getAllQuotes());
    quoteText.textContent = `"${q.replace(/^\"|\"$/g, "")}"`;
  });

  copyQuoteBtn.addEventListener("click", async () => {
    const text = quoteText.textContent || "";
    try {
      await navigator.clipboard.writeText(text);
      copyQuoteBtn.textContent = "Copied!";
      setTimeout(() => (copyQuoteBtn.textContent = "Copy"), 1200);
    } catch (e) {
      alert("Copy failed — your browser may block clipboard access.");
    }
  });

  addQuoteBtn.addEventListener("click", () => {
    const v = newQuoteInput.value.trim();
    if (!v) return;
    const saved = loadSavedQuotes();
    saved.unshift(v);
    saveQuotes(saved);
    newQuoteInput.value = "";
    quoteText.textContent = `"${v}"`;
  });

  clearQuotesBtn.addEventListener("click", () => {
    if (!confirm("Clear all saved quotes?")) return;
    localStorage.removeItem(STORAGE_KEY);
    renderSavedCount();
    quoteText.textContent = pickRandom(defaultQuotes);
  });

  // initial render
  renderSavedCount();
}
