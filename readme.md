# __1. 프로젝트 개요__
융합전자연구에 사용할 스마트폰 센서 데이터 수집을 위한 React Native App 제작

# __2. 프로젝트 구조__
프로젝트는 UI용 컴포넌트와 기능(DB 등) 컴포넌트로 나뉘어 제작됨

## __2.1 UI용 컴포넌트__
<img src='./UI 컴포넌트 구조도.png' />


>UI 컴포넌트 구조도 
1.App.js는 화면전환(Navigation)을 위한 컴포넌트를 포함함. 다른 기능은 일절 없음
2. RootScreen.js는 3가지 센서 데이터(가속도, GPS, 기기정보) UI 컴포넌트를 전환하기 위한 Navigation Root Node 역할
3.1 AccScreen.js는 3축 가속도 데이터(X,Y,Z)를 간단한 Text로 표현함 
3.2 GpsScreen.js는 GPS 데이터(위도, 경도)를 간단한 Text로 표현함
3.3 DeviceInfoScreen.js는 센서 데이터를 수집하는 기기의 정보(모델명, os 정보 등)를 간단한 Text로 표현함

## __2.2 기능 컴포넌트__
<img src='./기능 컴포넌트 구조도.png'/>


>기능 컴포넌트 구조도
1. AccScreen, GpsScreen, DeviceInfo는 각각 가속도 데이터(x,y,z), 위치데이터(latitude, longitude), 기기정보(모델명, os 정보 등)을 수집함(Expo 라이브러리 사용)
2. 데이터를 Firebase에 저장하기위해서는 Firebase와 연결이 필요함. 이에따라 Firebase와 연결을 전담하는 db.js를 작성함
3. db.js에서 사용할 수 있는 함수는 WriteData, ReadData임.
4. WriteData는 db의 collection(데이터종류이름), data(센서데이터)를 넘겨주면 알아서 연결하여 저장 
5. ReadData는 db의 collection(데이터종류이름)을 넘겨주면 db의 collection에 저장된 모든 문서(document)를 가져와서 console에 출력함



