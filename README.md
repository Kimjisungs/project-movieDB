## 기능

1. Components, Routes, assest, api으로 파일 분리.

   - Components - Globalstyle.js, header.js, router.js, tab.js, search.js
   - Routes -> Home -> Movie,TV
   - api.js

2. CSS in JS

   - Props를 styled component에 전달하여 uri 파라미터 변경에 따른 style 변화 ex) tab active되여 uri가 변경될때

3. api, data update Container, data view Presenter

   - axios를 이용하여 api 컴포넌트, update 컴포넌트, update한 컴포넌트를 props로 상속시켜 view를 보여주는 Presenter페이지로 구분하여 적용

4. uuid

   - list를 순회 할때 id가 없을경우 ex) tab components의 list순회

5. loading

   - 데이터가 불러오기 전 loading처리

6. error

   - loading 후 error(페이지가 없을떄)의 경우 "Page Not Found 처리"

     1. visual image가 없을경우 '이미지가 없습니다'

7. visual
   - 데이터 제한 5개 filter
