// 갤러리 배너 JS - gallery.js //////
window.addEventListener("DOMContentLoaded",()=>{

    // 1. 최상위 배너박스 대상 선정: .photobx
    const photobx = document.querySelectorAll(".photobx");

    // 2. 배너박스 일괄 셋팅하기
    photobx.forEach((ele,idx)=>setBan(ele,idx)); // forEach //
    // setBan(각요소,요소별순번)    
    
}); // 로드 구역