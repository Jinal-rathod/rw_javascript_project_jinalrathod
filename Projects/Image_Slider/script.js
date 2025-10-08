{
  const slider = document.getElementById("slider");
  const slides = slider.children;
  const total = slides.length;
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dotsContainer = document.getElementById("dots");
  let index = 0;
  let autoSlide;

  // Create dots dynamically
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.className =
      "w-3 h-3 rounded-full bg-white/40 hover:bg-white transition";
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  function updateDots() {
    [...dotsContainer.children].forEach((d, i) => {
      d.classList.toggle("bg-white", i === index);
      d.classList.toggle("bg-white/40", i !== index);
    });
  }

  function goToSlide(i) {
    index = (i + total) % total;
    slider.style.transform = `translateX(-${index * 100}%)`;
    updateDots();
    resetAutoSlide();
  }

  function nextSlide() {
    goToSlide(index + 1);
  }
  function prevSlide() {
    goToSlide(index - 1);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 3000);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  updateDots();
  resetAutoSlide();
}
