let navItems = document.querySelectorAll(".navItem");
let anchorHome = document.getElementById("anchorHome").offsetTop;
let anchorServices = document.getElementById("anchorServices").offsetTop;
let anchorPortfolio = document.getElementById("anchorPortfolio").offsetTop;
let anchorAbout = document.getElementById("anchorAbout").offsetTop;
let anchorContact = document.getElementById("anchorContact").offsetTop;
let chev1 = document.querySelector(".chev1");
let chev2 = document.querySelector(".chev2");
let sliderBg2 = document.querySelector(".sliderBg2");
let sliderAnim = document.querySelector(".sliderAnim");
let sliderAnim2 = document.querySelector(".sliderAnim2");
let verMob = document.querySelector(".verMob");
let diaMob = document.querySelector(".diaMob");
let slide2Mob = document.querySelector(".mainImg");
let portfolioBtn = document.querySelectorAll(".butn");
let arrImg = Array.from(document.querySelectorAll(".portImg"));
let modal = document.getElementById("modalWindow");
let btn = document.querySelector(".btn");
let ok = document.querySelector(".ok");
let form = document.querySelector(".form");
let content = document.querySelector(".modalConteiner");

window.onscroll = function() {
  let scroll = window.pageYOffset;
  if (scroll >= anchorHome && scroll < anchorServices) {
    navItems[0].classList.add("active");
  } else {
    navItems[0].classList.remove("active");
  }

  if (scroll >= anchorServices && scroll < anchorPortfolio) {
    navItems[1].classList.add("active");
  } else {
    navItems[1].classList.remove("active");
  }

  if (scroll >= anchorPortfolio && scroll < anchorAbout) {
    navItems[2].classList.add("active");
  } else {
    navItems[2].classList.remove("active");
  }
  if (scroll >= anchorAbout && scroll < anchorContact) {
    navItems[3].classList.add("active");
  } else {
    navItems[3].classList.remove("active");
  }
  if (scroll >= anchorContact) {
    navItems[4].classList.add("active");
  } else {
    navItems[4].classList.remove("active");
  }
};

chev2.onclick = function() {
  if (sliderBg2.classList.contains("sliderAnim")) {
    sliderBg2.classList.remove("sliderAnim");
    sliderBg2.classList.add("sliderAnim3");
  } else if (sliderBg2.classList.contains("sliderAnim3")) {
    sliderBg2.classList.remove("sliderAnim3");
    sliderBg2.classList.add("sliderAnim");
  } else if (sliderBg2.classList.contains("sliderAnim2")) {
    sliderBg2.classList.remove("sliderAnim2");
    sliderBg2.classList.add("sliderAnim");
  } else {
    sliderBg2.classList.add("sliderAnim");
  }
};

chev1.onclick = function() {
  sliderBg2.classList.remove("sliderAnim2");
  sliderBg2.classList.remove("sliderAnim3");
  if (sliderBg2.classList.contains("sliderAnim")) {
    sliderBg2.classList.remove("sliderAnim");
    sliderBg2.classList.add("sliderAnim2");
  } else if (sliderBg2.classList.contains("sliderAnim2")) {
    sliderBg2.classList.remove("sliderAnim2");
    sliderBg2.classList.add("sliderAnim");
  } else {
    sliderBg2.classList.add("sliderAnim");
  }
};

verMob.onclick = function() {
  verMob.getAttribute("src") == "assets/img/black.png"
    ? (verMob.src = "assets/img/ver-mob.png")
    : (verMob.src = "assets/img/black.png");
};
diaMob.onclick = function() {
  diaMob.getAttribute("src") == "assets/img/black2.png"
    ? (diaMob.src = "assets/img/di-mob.png")
    : (diaMob.src = "assets/img/black2.png");
};
slide2Mob.onclick = function() {
  slide2Mob.getAttribute("src") == "assets/img/black3.png"
    ? (slide2Mob.src = "assets/img/Slide-2.png")
    : (slide2Mob.src = "assets/img/black3.png");
};

for (let i = 0; i <= portfolioBtn.length - 1; i++) {
  portfolioBtn[i].onclick = function() {
    let random = (a, b) => Math.random() - 0.5;
    let imgMix = arrImg.map(item => item.src).sort(random);

    arrImg.map((e, i) => (e.src = imgMix[i]));

    portfolioBtn[i].classList.add("activeBtn");
    for (let j = 0; j <= portfolioBtn.length - 1; j++) {
      if (portfolioBtn[j] != portfolioBtn[i]) {
        portfolioBtn[j].classList.remove("activeBtn");
      }
    }
  };
}

for (let i = 0; i <= arrImg.length - 1; i++) {
  arrImg[i].onclick = function() {
    arrImg[i].style.border = "5px solid #F06C64";
    for (let j = 0; j <= arrImg.length; j++) {
      if (arrImg[j] != arrImg[i]) {
        arrImg[j].style.border = "none";
      }
    }
  };
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  modal.style.display = "block";

  let subject =
    document.querySelector('input[name="subject"]').value || "No subject";
  let describe =
    document.querySelector('textarea[name="textarea"]').value ||
    "No description";
  content.innerHTML = `<h2>Письмо отправлено</h2> 
  <p><b>Subject:</b> ${subject}</p>
  <p><b>Description:</b> ${describe}</p>`;
  form.reset();
});

ok.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
