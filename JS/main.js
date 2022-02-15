// bxSlider
$(document).ready(function () {
  $(".slider").bxSlider({
    mode: "horizontal",
    // mode: "vertical",
    minSlides: 4,
    maxSlides: 5,
  });
});

// $('.bxSlider').bxSlider({
//   옵션 입력
//   많이 사용하는 예)
//   명칭 | 기본값 | 설명
//   mode: 'horizontal' | (horizontal, vertical, fade) | 슬라이드 방향
//   auto: false | (false, true) | 자동 슬라이드
//   autoHover: false | (false, true) | 마우스 hover시 슬라이드 정지
//   controls: false | (false, true) | prev/next 버튼 노출 여부
//   speed: 1000 | 슬라이드 속도
//   randomStart: false | (false, true) | 램덤 스타트
//   infiniteLoop: true | (false, true) | true면 마지막에서 첫번째로 전환 그 반대도 동일, 무한루프
//   pager: true | (false, true) | 블릿버튼
//   minSlides: 1 | 최소 슬라이드 노출 개수
//   maxSlides: 5 | 최대 슬라이드 노출 개수
//   autoControls: false | (false, true) | 시작, 정지버튼 노출 여부
// });

// 또는 변수를 사용하여,
// var 변수 = $('.bxSlider').bxSlider({
//   옵션 입력
// });
