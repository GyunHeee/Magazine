# Magazine

## 목적

누구나 로그인을 하면 포스트 등록이 가능한 메거진입니다. 실시간 데이터를 활용한 리액트 실습의 목적으로 구현된 프로젝트입니다.

## 주요 기능

### Home page

<img width="300" height="230" alt="스크린샷 2023-04-07 오후 4 21 58" src="https://user-images.githubusercontent.com/92011224/230562232-2ec50381-ea88-456f-b1ba-3ae8dc9ced3e.png">

### Fashion page

<img width="300" height="230" alt="스크린샷 2023-04-07 오후 4 09 56" src="https://user-images.githubusercontent.com/92011224/230561720-e66524f2-5781-4013-afef-7d0d88586871.png">

### Life page

<img width="300" height="230" alt="스크린샷 2023-04-07 오후 4 10 03" src="https://user-images.githubusercontent.com/92011224/230561738-857a825c-f3cc-4ea2-9fe4-4dad06f24701.png">

### Interior page

<img width="300" height="230" alt="스크린샷 2023-04-07 오후 4 10 14" src="https://user-images.githubusercontent.com/92011224/230561743-e7b6a6ff-0c87-42b3-980c-5b6b543abee2.png">

### About page

<img width="300" height="230" alt="스크린샷 2023-04-07 오후 4 10 24" src="https://user-images.githubusercontent.com/92011224/230561750-8989fecb-d0a0-4bad-b5fc-6690e4e5ae75.png">

### New Post page

<img width="300" height="230"  alt="스크린샷 2023-04-07 오후 4 15 13" src="https://user-images.githubusercontent.com/92011224/230561762-a430bc70-82cc-47be-b03a-1d140034c3ec.png">

## Post Detail page

<img width="1727" alt="스크린샷 2023-04-07 오후 4 30 08" src="https://user-images.githubusercontent.com/92011224/230563538-a0604f2d-1a81-4b4c-abe3-effce0f1a512.png">

1. 구글 계정을 이용하여 로그인 한 후 pencil 아이콘을 클릭하여 NewPost page에서 새로운 포스트를 등록할 수 있습니다. 등록한 포스트는 즉각적으로 웹사이트에 반영되며 정보는 firebase 실시간데이터베이스에 업로드됩니다.
2. pick 속성이 있는 포스트는 Home화면에 보여지게 됩니다.
3. Navbar에서 각각의 카테고리에 맞게 페이지 이동이 가능하며, 제품사진 클릭 시 제품상세페이지로 이동합니다.
4. About버튼을 클릭하면 About 페이지로 이동합니다.

## 사용 기술

React, tailwindcss, Firebase (Authentication, RealTime Database), Cloudinary,React Router, React Query(Tanstack Query)

## 배운 점

- firebase 실시간 데이터베이스를 이용해서 데이터를 동적으로 읽고 쓰기
- firebase를 이용해서 구글로그인
- cloudinary 서비스로 이미지 업로드
- useNavigate의 state와 useLocation

## 어려운 점

- env & 사이트 배포과정
- firebase 실시간 데이터베이스 활용

## 더 공부할 점

- 네트워크 성능 개선 리팩토링
- 반응형 웹 페이지 구현

## Depoly

https://magazinedailysite.netlify.app/
