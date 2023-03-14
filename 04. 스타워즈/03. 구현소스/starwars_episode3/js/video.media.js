// 스타워즈 비디오 미디어 쿼리 페이지 JS - video.media.js\

/******************************************* 
    함수명: playMv
    기능: 영화예고편 화면에 띄우기
*******************************************/
var playMv = function (mvcode) {
    // mvcode 예고편아이디

    // 예고편 동영상용 박스
    var mvbx = document.querySelector("#mvbx");
    // console.log(mvbx);

    // 1. 함수호출확인
    console.log("플레이어!", mvcode);

    // 2. 영화박스에 아이프레임 넣기
    // 대상: #mvbx -> mvbx
    mvbx.innerHTML = `
        <div id="mv">
            <!-- 유튜브 아이프레임 -->
            <iframe width="100%" height="100%" 
            src="https://www.youtube.com/embed/${mvcode}?autoplay=1" 
            allow="autoplay" style="border:none"></iframe>
            <!-- 닫기버튼 --> 
            <button class="cbtn">×</button>
        </div>
    `;

    // 삽입된 동영상박스 (#mv) CSS설정하기
    var mv = document.querySelector("#mv");
    var msy = mv.style;

    msy.position = "fixed";
    msy.top = "50%";
    msy.left = "50%";
    msy.transform = "translate(-50%,-50%)";
    msy.width = "700px";
    msy.height = "450px";
    msy.backgroundColor = "#000";

    // 닫기버튼 CSS 셋팅하기
    var cbtn = document.querySelector(".cbtn");
    var csy = cbtn.style;

    csy.position = "absolute";
    csy.top = "0";
    csy.right = "-70px";
    csy.width = "50px";
    csy.height = "50px";
    csy.border = "none";
    csy.color = "#fff";
    csy.backgroundColor = "blue";
    csy.fontSize = "40px";
    csy.fontWeight = "bold";
    csy.borderRadius = "50%";
    csy.cursor = "pointer";
    csy.lineHeight = "50px";

    // body 가상요소로 배경반투명 암전보이기/숨기기
    const bdcont = document.body;
    bdcont.classList.add("on");

    // 닫기버튼 클릭시 #mv 제거하기
    cbtn.onclick = function () {
        mv.remove();
        bdcont.classList.remove("on");
    };
    // remove() 메서드 -> DOM에서 요소를 삭제함
}; /////////////// playMv 함수 ////////
