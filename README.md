## 기능

1. Components, Routes, assest, api으로 파일 분리.

   - Components - Globalstyle.js, header.js, router.js, tab.js, search.js
   - Routes -> Home -> Movie,TV
   - api.js

2. CSS in JS

   - Props를 styled component에 전달하여 url 파라미터 변경에 따른 style 변화 ex) tab active되여 uri가 변경될때

3. api, data update Container, data view Presenter
   - axios를 이용하여 api 컴포넌트, update 컴포넌트, update한 컴포넌트를 props로 상속시켜 view를 보여주는 Presenter페이지로 구분하여 적용
