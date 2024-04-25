document.addEventListener("DOMContentLoaded", function () {
  // aos 적용
  AOS.init();
  // 햄버거 버튼, 오버레이
  const mbt = document.querySelector(".mbt");
  const navMb = document.querySelector(".nav-mb");
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
});

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
