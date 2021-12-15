# __1. 프로젝트 개요__
융합전자연구에 사용할 스마트폰 센서 데이터 수집을 위한 React Native App 제작

# __2. 프로젝트 구조__
프로젝트는 UI용 컴포넌트와 기능(DB 등) 컴포넌트로 나뉘어 제작됨

## __2.1 UI용 컴포넌트__
<img src='./UI 컴포넌트 구조도.png' />
> UI 컴포넌트 구조도 <br>
  * 1.App.js는 화면전환(Navigation)을 위한 컴포넌트를 포함함. 다른 기능은 일절 없음
  * 2. RootScreen.js는 3가지 센서 데이터(가속도, GPS, 기기정보) UI 컴포넌트를 전환하기 위한 Navigation Root Node 역할
  * 3.1 AccScreen.js는 3축 가속도 데이터(X,Y,Z)를 간단한 Text로 표현함 
  * 3.2 GpsScreen.js는 GPS 데이터(위도, 경도)를 간단한 Text로 표현함
  * 3.3 DeviceInfoScreen.js는 센서 데이터를 수집하는 기기의 정보(모델명, os 정보 등)를 간단한 Text로 표현함

## __2.2 기능 컴포넌트__




