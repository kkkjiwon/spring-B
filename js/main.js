document.addEventListener("DOMContentLoaded", function () {
  // aos 적용
  AOS.init();
  // 햄버거 버튼, 오버레이
  const mbt = document.querySelector(".mbt");
  const navMb = document.querySelector(".nav-mb");
  //검색창
  const searchEl = document.querySelector(".search");
  const searchInputEl = searchEl.querySelector("input");

  searchEl.addEventListener("click", function () {
    searchInputEl.focus();
  });

  searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "이달의 강연 무료");
  });
  searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", "");
  });
  // 햄버거 버튼 클릭 이벤트
  mbt.addEventListener("click", function () {
    const state = this.classList.contains("ani");
    if (state) {
      this.classList.remove("ani");
      navMb.classList.remove("active");
      // menu의 .hide 숨기기
      $(".menu > .hide").slideUp();
    } else {
      this.classList.add("ani");
      navMb.classList.add("active");
    }
  });
  // 처음이라면
  var swiper = new Swiper(".sw-s_foryou", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 5000, // 슬라이드 간의 시간 간격 (밀리초)
      disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생을 유지할지 여부
      reverseDirection: false, // 슬라이드 방향 반대로
      stopOnLastSlide: false, // 마지막 슬라이드에서 재생 중지
      waitForTransition: true, // 다음 슬라이드로 넘어가기 전에 현재 슬라이드의 전환을 기다림
      disableOnInteraction: false, // 사용자 상호 작용 후에도 자동 재생 유지
    },
  });
  // 프로그램
  var swiper = new Swiper(".sw-s_program", {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 20,
    breakpoints: {
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 2,
      },
    },
  });
});
// 모바일 메뉴
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
    $(this).find(".material-symbols-outlined").toggleClass("active");
  });
});
