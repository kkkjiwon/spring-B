window.onload = function () {
  
  // 상단 스크롤 기능
  const header = document.querySelector(".header");
  const mbt = document.querySelector(".mbt");
  const navMb = document.querySelector(".nav-mb");
  const overlay = document.querySelector(".overlay");
  
  // 햄버거 버튼 클릭 이벤트
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      this.classList.remove("ani");
      navMb.classList.remove("active");
      overlay.classList.remove("active");
    } else {
      this.classList.add("ani");
      navMb.classList.add("active");
      overlay.classList.add("active");
    }
  });
  // 오버레이 클릭 시 메뉴 닫기
  overlay.addEventListener("click", function () {
    mbt.classList.remove("ani");
    navMb.classList.remove("active");
    overlay.classList.remove("active");
  });
  // s_visual
  var swiper = new Swiper(".sw-vistual", {
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
  // s_program
  var swiper = new Swiper(".sw-program", {
    slidesPerView: 1,
    spaceBetween: 0,
    breakpoints: {
      1400: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
    },
  });

  // 글자 모션
  var observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          entry.target.classList.remove("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  var mentorSection = document.querySelector(".s_Mentor_des");
  observer.observe(mentorSection);

  var letterSection = document.querySelector(".s_letter_right");
  observer.observe(letterSection);
};


$(document).ready(function () {
  $(".main-menu").mouseenter(function () {
    $(".sub-menu li , .navbt").stop().slideDown();
  });
  $(".main-menu").mouseleave(function () {
    $(".sub-menu li , .navbt").stop().slideUp();
  });
  $(".menu > a").click(function (event) {
    event.preventDefault(); // 기본 이벤트 방지

    let submenu = $(this).next(".hide");
    submenu.slideToggle(); // 부드럽게 슬라이드 업 또는 다운

    // 화살표 회전 토글
    $(this).find('.material-symbols-outlined').toggleClass('active');
  });
});