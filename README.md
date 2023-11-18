![facebook_cover_photo_2](https://github.com/noahkimDev/HiSEOUL/assets/68933325/1db005c6-99b4-4cf6-9ccd-1a0903d13ad1)

## About
- 외국인들을 위한 서울 가이드
- 서울에 거주하는 외국인들을 대상으로 생활필수정보를 제공하고자 서비스를 기획하게 되었습니다.( 필요한 정보에 대한 수요를 직접 설문조사)
- 설문지 링크 : https://bit.ly/3p3nE4p
- 1인 개발
- 아키텍처

<img src="https://github.com/noahkimDev/HiSEOULver2/assets/68933325/eee7e2ef-cfaa-4478-8792-4c16f314366a" width="600" height="400">



</br>

- HiSEOUL.ver1과의 차이점
1) sequelize대신 mysql2를 활용하여 query문으로 데이터베이스와 통신하였습니다.
   HiSEOUL.ver2에서는 ORM보다 MySQL에 익숙해지기 위해 mysql2를 사용하였고, 프로그램의 사이즈도 sequelize와 대비하여 mysql2가 훨씬 가볍기때문에 프로그램 실행 속도에 긍정적인 영향이 있을 것으로 생각했습니다.
    
3) 로그인 상태를 유지하기 위한 세션데이터를 Redis 데이터베이스에 저장하였습니다.  
   휘발성인 메모리에 세션데이터를 저장하면 서버가 종료되었을 때 세션데이터가 삭제되어 로그인여부를 확인할 수 없습니다. 그러나 외부 데이터베이스(Redis,mysql 등)에 저장하면 서버가 종료되더라도 로그인여부를 세션데이터로부터 확인할 수 있습니닫.

## Stack
<div>
  <h4>Front-End</h4>
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-06B6D4?style=for-the-badge&logo=css3&logoColor=white">
  
</div>  
<br>
<div>
  <h4>Back-End</h4>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/redis-E34F26?style=for-the-badge&logo=redis&logoColor=white">
</div>  

</br></br>

## 기능시현

모든 기능시현 모음 링크 : https://bit.ly/4493vc1

![ezgif com-video-to-gif](https://github.com/noahkimDev/HiSEOUL/assets/68933325/f7684808-042c-4e52-9dd7-3e620dac7c0d)

</br>

## Database Schema

<img src="https://github.com/noahkimDev/HiSEOUL/assets/68933325/f75b8c51-2fb4-4849-903f-f4c5e4360b6f" width="600" height="400">

