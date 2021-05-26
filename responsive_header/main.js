// 클래스명이 navbar_toggletBtn인 요소를 찾아 toggleBtn 변수에 할당
const toggleBtn = document.querySelector('.navbar_toggleBtn');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');

// 클릭할 때 해당 이벤트 리스너를 호출함
toggleBtn.addEventListener('click', ()=>{
    // 마우스를 클릭했을 때 menu와 icons에 acvtice 클래스가 없다면 클래스 추가,
    // 있다면 제거함
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});