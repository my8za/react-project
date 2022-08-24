# 📽 React-project, 영화 서비스 만들기

## 프로젝트 선정배경

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
1. API 선정
2. 사전 자료 수집 및 관련 지식 학습
3. 팀원 모두 기능별로 파트 분배, 각자 구현하여 지정 일자에 코드리뷰와 소스정리 및 취합
4. 프로젝트 완성 및 보고서 작성


<br>

## 💻 Set-up



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

## 핵심기술
useContext, Router


<br>

## 문제해결
