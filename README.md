# Netflix Clone v4.2.3

<br>

<br>

### 직접 사용해보세요 ⇩

<br>
https://netfilx-clone-loginable.netlify.app (v.4.2.3)<br>
- firebase 를 사용한 로그인 기능 추가 예정

<br>
<br>

# Mobile

<img width="352" alt="mobile" src="https://user-images.githubusercontent.com/53814275/159554976-28e9d572-9aa2-4b2f-b483-a2a6c94b1425.png">

<br>

# PC

<img width="1219" alt="pc" src="https://user-images.githubusercontent.com/53814275/159555043-5f57e1a9-90a4-45f9-86e9-395a07ea27da.png">
<br>
<br>

# 📢

### 메인화면의 Log in/ Log out 상태 UI 를 구현했습니다.(v4.2.3)

### swipe 를 사용하여 slide를 구현했습니다.

-   페이지 가로 크기에 따라 슬라이드에 표시되는 영화의 수와 한번 슬라이드시 넘겨지는 영화의 수를 다르게 적용하였습니다. <br>
-   모바일 등 작은 화면으로 접속시에도 최소 2개 이상의 영화가 나오도록 구현했습니다. <br>
-   슬라이드에 loop를 적용하여 슬라이드가 끊기지 않도록 했습니다.<br>
-   슬라이드 죄우 가장자리에 검정 gradient를 생성해 오리지널 홈페이지의 느낌을 살렸습니다. <br>
-   Swiper와 호환이 되지 않는 기존 Navigation을 삭제하고 Swiper에서 제공하는 Navigarion을 사용하여 크기와 높이를 자연스럽게 정렬했습니다.<br>
    <br>

### Movie Modal 창 외부를 클릭 시 창이 닫히도록 구현했습니다.

-   Costom Hook 을 사용해 구현했습니다 (v3.7.0)
    <br>

### 메인화면에서 'More information' 버튼 클릭시에도 Movie Modal 창이 나오도록 구현했습니다.

<br>

### 모바일 창에서 표시되는 Nav bar 아이콘을 수정하였고, 검색바가 footer로 가도록 배치했습니다.

<br>

### 로그아웃 시 상단 검색바가 사라지며 영화 카테고리 중 최하단 2열이 가입 독려 문구와 함께 블러처리 되도록 구현했습니다.

<br>

### 영상의 링크가 없는 경우 Banner 에서 Play 버튼이 사라지도록 하였습니다.
