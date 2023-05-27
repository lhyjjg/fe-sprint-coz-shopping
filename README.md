# fe-sprint-coz-shopping
코드스테이츠 솔로프로젝트 : 쇼핑몰 구현하기

## 개발 기간

2023-05-12 ~ 2023-05-18

## 배포 링크

추가 기능 구현 후 기재 예정

## 사용 스택/라이브러리

- React
- react-router-dom
- react-icons
- axios

## 구현 화면


## 구현 내용

- Header
    - 모든 페이지에서 고정되게 보여준다.
    - 햄버거 메뉴 클릭 시 상품 리스트 페이지, 북마크 리스트 페이지로 이동할 수 있는 드롭다운이 보여진다.
- Footer
    - 모든 페이지에서 고정되게 보여준다.
- 메인 페이지
    - 모든 타입의 상품 4개를 보여준다.
    - 모든 타입의 북마크 상품 4개를 보여준다.
- 상품 리스트 페이지
    - 상품 타입별로 상품을 확인할 수 있다.
- 북마크 리스트 페이지
    - 북마크한 상품을 확인할 수 있다. (LocalStorage에 저장된 상품)

## Todo

개발 기간 : 2023-05-18 ~

- [ ]  CSS 절대 단위 → 상대 단위로 변경
- [ ]  메인 페이지 상품 API 수정 상품 4개 불러오기 (query parameter 활용)
- [ ]  상품 타입 문자열 파일 분리 (컴포넌트 import 해서 사용하기 위함)
- [ ]  토스트 구현하기 (북마크 추가, 제거 시 메시지)
- [ ]  스토리북 반영

## 설치 및 실행 방법

- clone or fork
- npm install
- npm run start

## npm script

- npm run start : 쇼핑몰 페이지 확인할 수 있습니다. http://localhost:3000/
- npm run storybook : UI 컴포넌트를 확인할 수 있습니다. http://localhost:6006/
