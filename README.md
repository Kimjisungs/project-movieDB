## Site

https://moviedb-7d075.firebaseapp.com/

## movie DB

React, Redux를 이용한 반응형 SPA입니다.

영화, TV프로그램, 인물의 정보를 볼 수 있는 사이트이며, 검색으로도 정보를 얻을 수 있습니다.

## 구조

- assets (공통 css, image)
  - css
  - images
- Components
  - App.js
  - GlobalStyle.js
  - Header.js
  - Loadder.js (동글뱅이 로딩)
  - LoadingBar.js (Bar형태의 로딩)
  - Message.js (error 메시지)
  - Modal.js (상세 페이지 팝업)
  - Poster.js (이미지 클릭 요소)
  - Router.js (페이지 라우터)
  - Search (상단 검색 영역)
    - index.js
    - SearchContainer.js
    - SearchPresenter.js
  - Section.js
  - Tab.js
  - Visual.js (Home 메인 이미지)
  - Wrapper.js (전체 Layout)
  - WrapperContent.js (상세 Layout)
- Redux
  - Action
    - index.js
  - Reducer
    - index.js
    - Loading.js
    - Search.js
- Routes
  - Home (메인 페이지)
    - index.js
    - HomContainer.js
    - HomePresenter.js
    - Router.js
    - TV (TV tab)
      - index.js
      - TVContainer.js
      - TVPresenter.js
    - Movie (Movie tab)
      - index.js
      - MovieContainer.js
      - MoviePresenter.js
    - People (People tab)
      - index.js
      - PeopleContainer.js
      - PeoplePresenter.js
  - Detail (상세 페이지)
    - index.js
    - DetailContainer.js
    - DetailPresenter.js
  - SearchContent (검색 후 나오는 페이지)
    - index.js
    - SearchContainer.js
    - SearchPresenter.js

## 기능

```react

```

1. Components, Routes, assest, api으로 파일 분리.

   - Components - Globalstyle.js, header.js, router.js, tab.js, search.js
   - Routes -> Home -> Movie,TV
   - api.js

   https://youtu.be/XxfZFSJQOG8
   [![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/XxfZFSJQOG8/0.jpg)](https://www.youtube.com/watch?v=XxfZFSJQOG8)

2. CSS in JS

   - Props를 styled component에 전달하여 uri 파라미터 변경에 따른 style 변화 ex) tab active되여 uri가 변경될때

   <iframe width="560" height="315" src="https://www.youtube.com/embed/XxfZFSJQOG8" frameborder="0" allowfullscreen></iframe>

3) api, data update Container, data view Presenter

   - axios를 이용하여 api 컴포넌트, update 컴포넌트, update한 컴포넌트를 props로 상속시켜 view를 보여주는 Presenter페이지로 구분하여 적용

4) uuid

   - list를 순회 할때 id가 없을경우 ex) tab components의 list순회

### 5. Loading

- 데이터를 불러와서 render 되기 전까지 loading image를 사용자에게 보여주어 ux측면을 높힘

![loading](https://user-images.githubusercontent.com/33679192/74599161-1a65a280-50c1-11ea-8009-501a680a1f3c.gif)

#### code

**Container.js**

```react
state = {
  loading: true,
};

try {
    const {
      data: { results: popularLists }
    } = await tvApi.popular();
    this.setState({
      popularLists
    });
  } catch {
    this.setState({
      error: "visual Not Found"
    });
  } finally {
    this.setState({
      loading: false
    });
  }

```

**Presenter.js**

```react
{loading ? (
    <Loader />
  ) : (
    <>
      {popResults && popResults.length > 0 && (
        <Section title="Popular">
          {popResults.map(person => (
```

### 6. Loading Bar

- 데이터를 불러와서 render 되기까지 loading의 진행 시간을 Bar형태로 사용자에게 보여주어 ux측면을 높힘
- 로딩 시작시 milliseconds값과 로딩이 끝난 후의 millisecnods값을 구하여 startTime, endTime의 값으로 redux store에 등록하고 그 값을 계산하여 styled components를 이용 animation 값에 적용.

![LoadingBar](https://user-images.githubusercontent.com/33679192/74599663-de364000-50c8-11ea-970a-a955fa35d86d.gif)

#### code

**LoadingBar.js**

```react
const LoadingBarShape = styled.div`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #eee;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    animation: ${AniWidthBar} ${props => `${props.barAni * 0.001}`}s ease-in-out;
    height: 100%;
    background-color: red;
    transition: all 0.2s;
  }
`;

class LoadingBar extends React.Component {
  barAni = () => {
    const date = new Date();
    const milliSeconds = date.getMilliseconds();
    const {
      loading,
      startTime,
      endTime,
      loadingStart,
      loadingEnd
    } = this.props;
    let totalSeconds = 0;

    if (loading && !startTime) loadingStart(milliSeconds);
    if (!loading && !endTime) loadingEnd(milliSeconds);

    let _startTime = 0;
    let _endTime = 0;

    if (!loading && startTime && endTime) {
      _startTime = startTime > 500 ? 1000 - startTime : startTime;
      _endTime = endTime > 500 ? 1000 - endTime : endTime;
      totalSeconds = Math.abs(_startTime + _endTime);
      totalSeconds =
        totalSeconds < 100 ? `0${totalSeconds}` : `${totalSeconds}`;
      return totalSeconds;
    }
  };

  componentWillUnmount() {
    const { loadingStart, loadingEnd } = this.props;
    loadingStart(0);
    loadingEnd(0);
  }

  render() {
    return <LoadingBarShape barAni={this.barAni()} />;
  }
}


```

6. error

   - loading 후 error(페이지가 없을떄)의 경우 "Page Not Found 처리"

     1. visual image가 없을경우 '이미지가 없습니다'

7. visual

   - 데이터 제한 5개 filter

### 8. 이미지에 데이터가 없을경우 처리

![imagevisiblenone](https://user-images.githubusercontent.com/33679192/74597816-d5ce0d00-50a8-11ea-9de1-b7b80626a43e.jpg)

#### code

```react
   <Img>
     <img
       src={
         image
           ? `https://image.tmdb.org/t/p/w500${image}`
           : require("../assets/images/no_poster.jpg")
       }
      alt={title}
   />
```

9. Proptype check

10. uri에 query 값이 없을때 홈으로 이동

11. uri에 query 값이 있는 상태에서 새로고침하면 input value에 값이 없을때 uri의 query값을 update하여 넣어주는것.

12. 뒤로가기 했을때 query값이 남아있는것.

13. 뒤로가기를 하더라도 home url 에서는 searchQuery값이 없게 처리.

14. home에서는 componentDidMount가 없게 처리

15. loading bar

16. 팝업 vidoe

    - 데이터가 없을때는 보이지 않게

17. Helmet

18. search enter, click

19. 반응형 스타일 변경
