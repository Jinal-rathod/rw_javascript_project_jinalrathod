{
  const slide = document.querySelectorAll(".slide");
  const dot = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("pre");
  const nextBtn = document.getElementById("next");

  let curIndex = 0;
  const totalslide = 3;
  let autoSlide;

  function showSlide(index) {
    slide.forEach((slide, i) => {
      slide.classList.remove("active-slide");
      slide.classList.add("hidden-slide");
      dot[i].classList.remove("opacity-100");
      dot[i].classList.add("opacity-50");
    });
    slide[index].classList.add("active-slide");
    slide[index].classList.remove("hidden-slide");
    dot[index].classList.add("opacity-100");
    dot[index].classList.remove("opacity-50");
  }

  nextBtn.addEventListener("click", () => {
    curIndex = (curIndex + 1) % totalslide;
    showSlide(curIndex);
    resetAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    curIndex = (curIndex - 1 + totalslide) % totalslide;
    showSlide(curIndex);
    resetAutoSlide();
  });

  dot.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      curIndex = index;
      showSlide(curIndex);
      resetAutoSlide();
    });
  });

  function startAutoSlide() {
    autoSlide = setInterval(() => {
      curIndex = (curIndex + 1) % totalslide;
      showSlide(curIndex);
    }, 2000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
  }

  showSlide(curIndex);
  startAutoSlide();
}
