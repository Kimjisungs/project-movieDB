## Site

https://moviedb-7d075.firebaseapp.com/

## movie DB

React, Redux를 이용한 반응형 SPA입니다.

영화, TV프로그램, 인물의 정보를 볼 수 있는 사이트이며, 검색으로도 정보를 얻을 수 있습니다.

## API

React, React Router, React Router Dom, Redux, React Redux, Axios, PropTypes, Styled Components, Query String, uuid, react-id-swiper, react-app-polyfill

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

### 1. Search Bar

**1) Refresh**

- 새로고침시 검색어를 그대로 보존하여 ux의 사용성을 높힘
  - QueryString api를 이용하여 uri의 query를 값의 형태로 만들어 query값을 redux store에 업데이트

![loadingBarRefresh](https://user-images.githubusercontent.com/33679192/74601558-e26f5700-50e2-11ea-8c1f-82eee1c8110a.gif)

> Components > Search > SearchContainer.js

```react
class SearchContainer extends React.Component {
  uriQuery = () => {
    const {
      location: { search }
    } = this.props;
    const { query: uriQuery } = qs.parse(search);
    return uriQuery;
  };

  updateQueryToRedux = (() => {
    const { getQuery } = this.props;

    return {
      search: ({ target: { value } }) => getQuery(value),
      uri: () => {
        const nowUriQuery = this.uriQuery();
        getQuery(nowUriQuery);
      },
      empty: () => getQuery("")
    };
  })();

  componentDidMount() {
    this.updateQueryToRedux.uri();
  }
```

> Components > Search > SearchPresenter.js

```react
  <Input
    placeholder="Search Movie. ex) code, movie"
    onChange={updateQuery}
    value={searchQuery}
  />
```

**2) GoBack**

- browser의 뒤로가기, 앞으로가기 버튼을 누를 시 검색어를 보존하여 어떤 검색을 한 결과인지 알수있게 ux 제공
  - didUpdate를 이용하여 현재의 uri와 과거uri가 다를때 감지하여 현재 페이지의 uri query를 업데이트함.
  - Home으로 접근할 경우 uri query를 빈 값으로 적용

![loadingBarHistoryBack](https://user-images.githubusercontent.com/33679192/74602288-6ed14800-50ea-11ea-8023-3868e76354a5.gif)

> Components > Search > SearchContainer.js

```react
  uriQuery = () => {
    const {
      location: { search }
    } = this.props;
    const { query: uriQuery } = qs.parse(search);
    return uriQuery;
  };

  updateQueryToRedux = (() => {
    const { getQuery } = this.props;

    return {
      search: ({ target: { value } }) => getQuery(value),
      uri: () => {
        const nowUriQuery = this.uriQuery();
        getQuery(nowUriQuery);
      },
      empty: () => getQuery("")
    };
  })();

  matchUriAndSearchQuery = prevProps => {
    const {
      location: { search }
    } = prevProps;
    const { query: prevUriQuery } = qs.parse(search);
    const nowUriQuery = this.uriQuery();

    const {
      location: { pathname }
    } = this.props;

    if (prevUriQuery !== nowUriQuery) {
      pathname.includes("/home")
        ? this.updateQueryToRedux.empty()
        : this.updateQueryToRedux.uri();
    }
  };

  componentDidUpdate(prevProps) {
    this.matchUriAndSearchQuery(prevProps);
  }
```

**3) Submit**

- 검색어를 적은 후 enter 및 버튼을 클릭했을때 검색 결과를 표출
  - onChange 이벤트 이용하여 검색어를 Redux Store에 업데이트, 업데이트 된 검색어를 value속성에 적용
  - onSubmit, onClick 이벤트를 이용하여 값을 uri의 query에 push
  - Router에서 감지하고 didMount하여 화면에 표출

![loadingBarSubmit](https://user-images.githubusercontent.com/33679192/74600663-fe213000-50d7-11ea-96c5-63107e7400e9.gif)

> Components > Search > SearchContainer.js

```react
class SearchContainer extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    const { queryFromRedux: searchQuery, history } = this.props;
    if (searchQuery !== "") history.push(`/search?query=${searchQuery}`);
  };

  updateQueryToRedux = (() => {
    const { getQuery } = this.props;

    return {
      search: ({ target: { value } }) => getQuery(value),
      uri: () => {
        const nowUriQuery = this.uriQuery();
        getQuery(nowUriQuery);
      },
      empty: () => getQuery("")
    };
  })();

  render() {
    const { queryFromRedux: searchQuery } = this.props;

    return (
      <SearchPresenter
        handleSubmit={this.handleSubmit}
        updateQuery={this.updateQueryToRedux.search}
        searchQuery={searchQuery}
      />
    );
  }
```

> Components > Search > SearchPresenter.js

```react
  <Form onSubmit={handleSubmit}>
    <Input
      placeholder="Search Movie. ex) code, movie"
      onChange={updateQuery}
      value={searchQuery}
    />
  <Button type="button" onClick={handleSubmit}>
```

### 6. Loading Bar

- 데이터를 불러와서 render 되기까지 loading의 진행 시간을 Bar형태로 사용자에게 보여주어 ux측면을 높힘
  - 로딩 시작시 milliseconds값과 로딩이 끝난 후의 millisecnods값을 구하여 startTime, endTime의 값으로 redux store에 등록하고 그 값을 계산하여 styled components를 이용 animation 값에 적용.

![LoadingBar](https://user-images.githubusercontent.com/33679192/74599663-de364000-50c8-11ea-970a-a955fa35d86d.gif)

**Components > LoadingBar.js**

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

const mapStateToProps = state => {
  return {
    startTime: state.loading.milliSecond.start,
    endTime: state.loading.milliSecond.end
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      loadingStart,
      loadingEnd
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingBar);

```

### 5. Loading

- 데이터를 불러와서 render 되기 전까지 loading image를 사용자에게 보여주어 ux측면을 높힘

![loading](https://user-images.githubusercontent.com/33679192/74599161-1a65a280-50c1-11ea-8009-501a680a1f3c.gif)

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

6. error

   - loading 후 error(페이지가 없을떄)의 경우 "Page Not Found 처리"

     1. visual image가 없을경우 '이미지가 없습니다'

7. visual

   - 데이터 제한 5개 filter

### 8. 이미지가 없는 경우

- 이미지가 없을경우 No Poster 이미지로 대체

![imagevisiblenone](https://user-images.githubusercontent.com/33679192/74597816-d5ce0d00-50a8-11ea-9de1-b7b80626a43e.jpg)

**Components > Poster.js**

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
