# 📽 React-project, 영화 서비스 만들기

demo


## 프로젝트 선정배경 -> 수정필요

일상생활에서 쉬이 접할 수 있는 영화콘텐츠 API를 이용하면 화면구성이 용이하다 판단하여 영화서비스 개발으로 결정
API에서 제공하는 포스터 이미지 화질저하로 모바일 사이즈에 맞춰 진행

<br>

## 개발 목표
- 네이버 오픈 API 소스를 활용하여 영화 서비스 구현

영화 제목 검색을 통하여 쉽게 정보를 확인하며 즐겨찾기 및 예매등의 기능을 통해 고객들의 편의를 제공

<br>

## 서비스 내용

**초안**
- 메인 : api를 활용하여 영화 포스터 랜덤 출력
- 로그인 / 회원가입
- 검색 및 결과 리스팅
- 상세페이지 
  - 정보출력
  - 예매 (결제기능 제외)
  - wish기능


**현재 작업 내용**

- 메인 : 포스터 슬라이드 구현은 완료하였으나 네이버 API 특성상 랜덤 출력은 실패
- 로그인 / 회원가입 ❌
- 검색 및 결과 리스팅 **+ 페이지네이션** ⭕
- 상세페이지 
  - 정보출력 ⭕
  - 예매 **+ 예매정보 페이지** ⭕
  - wish기능 **+ 위시리스트 페이지** ⭕

<br>

## 프로젝트 진행
1. API 선정 : 네이버 오픈 API

  - 공공데이터포털(정보산업진흥원:영화정보API)API -> 내용 부족으로 API 변경
  - OMDB -> 네이버 API 내용에 줄거리 데이터가 없어서 OMDB의 API로 변경하려 했으나 승인이 나지않아 사용실패 -> ⭐ **네이버API**


2. 사전 자료 수집 및 관련 지식 학습
3. 팀원 모두 기능별로 파트 분배, 각자 구현하여 지정 일자에 코드리뷰와 소스정리 및 취합
4. 프로젝트 완성 및 보고서 작성


<br>

## 💻 Set-up
-> 사용 라이브러리


<br>

## Component

### page
- Main -> Main_poster
- Search -> Posts, Pagination
- Detail -> Heart, Reserve
- Like
- ResFinished

### components
- Logo
- Nav
- Heart
- Main_poster
- Movie
- Pagination
- posts
- Reserve

<br>

## 개발내용

### App.js
Router / Context
Router를 활용하여 페이지 전환,
context 기능 사용하기 위하여 Router 가장 외부에 MovieProvider로 감싸준다.
MovieContext.js : likeDate, setLikeDate를 value값으로 갖는 MovieProvider 정의, {props.children}을 이용하여 전달

### Main.js
메인 페이지에서 Main_poster 컴포넌트를 수입(import) 
Main_poster : axios를 이용하여 네이버 api의 영화 검색 기능을 사용
네이버 api 검색 기능 특성상 query(영화제목) 값이 필수로 들어가야하기 떄문에 임의로 어벤져스 값을 넣어
ImageSlider 기능과 함께 포스터 화면 구현

### Search
useEffect 에 있는 getMovies 를 실행하여 영화정보를 가져와 state를 변경,관리 

**onChange**
onchange 이벤트를 사용하여 input창에 검색어를 입력하면 value(검색정보)를 state에 저장
**handleSubmit**
handleSubmit은 input에서 엔터를 입력시 정보가 전송되는 기본 이벤트로, 해당 이벤트가 발생시 getMovies 함수실행
해당 이벤트의 고유기능으로 화면이 새로고침되는 것을 방지하기 위해 e.preventDefault() 사용

### Pagination  ---> 확인 필요
movies를 posts에 넣어 기존의 정보를 뿌려주던 movies.map을 posts에 넣어 페이지 네이션 구현

<br>

## 핵심기술
useContext, Router


<br>

## 문제해결
