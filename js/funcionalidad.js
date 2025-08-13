document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    function setTheme(mode) {
        htmlElement.setAttribute('data-theme', mode);
        themeToggleBtn.textContent = mode === 'dark' ? '☀️' : '🌙';
        localStorage.setItem('theme', mode);
    }
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
});

const tabButtons = document.querySelectorAll(".tab-btn")
const tabContents = document.querySelectorAll(".content-panel")
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"))
    btn.classList.add("active");
    tabContents.forEach(panel => panel.classList.remove("active"))

    const targetId = btn.getAttribute("data-target")
    document.getElementById(targetId).classList.add("active")
  })
})


const animElements = document.querySelectorAll("section, .card, header, footer")
function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85
  animElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    }
  });
}
animElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(30px)"
})
window.addEventListener("scroll", showOnScroll)
showOnScroll();



const btnVolverArriba = document.getElementById("btnVolverArriba")
window.onscroll = function() {
  mostrarOcultarBoton()
}

function mostrarOcultarBoton() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    btnVolverArriba.classList.add("visible")
  } else {
    btnVolverArriba.classList.remove("visible")
  }
}
btnVolverArriba.onclick = function() {
  volverArribaSuavemente();
}
function volverArribaSuavemente() {
  window.scrollTo({
    top: 0, behavior:'smooth'
  })
}


