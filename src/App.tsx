import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Counter from "./pages/counter/Counter";
import ListSample from "./pages/list_sample/ListSample";

// App은 React의 함수형 컴포넌트입니다. 이 컴포넌트는 애플리케이션의 최상위 컴포넌트로, 전체 애플리케이션의 구조를 정의합니다.
// Router는 react-router-dom에서 제공하는 컴포넌트로, 브라우저의 주소(URL)와 React 애플리케이션을 연결해주는 역할을 합니다. 이 컴포넌트로 감싸진 내부에서는 라우팅 기능을 사용할 수 있습니다.​
// <MainLayout>은 애플리케이션의 공통 레이아웃을 정의하는 컴포넌트입니다. 예를 들어, 모든 페이지에 공통적으로 표시되는 헤더나 푸터를 이 컴포넌트에 포함시킬 수 있습니다. 이렇게 하면 각 페이지마다 중복 코드를 작성하지 않아도 됩니다.
// MainLayout 의 children은 MainLayout 컴포넌트의 자식 요소로, 현재 라우트에 해당하는 컴포넌트(Home 또는 Counter)가 전달됩니다.
// <Routes>는 여러 개의 <Route>를 감싸는 컴포넌트로, 현재 브라우저의 주소에 따라 어떤 컴포넌트를 렌더링할지 결정합니다. React Router v6부터는 <Switch> 대신 <Routes>를 사용합니다.​
// 이 라우트는 브라우저의 주소가 /일 때, 즉 홈 페이지일 때 <Home /> 컴포넌트를 렌더링합니다.
// 이 라우트는 브라우저의 주소가 /counter일 때 <Counter /> 컴포넌트를 렌더링합니다.
const App: React.FC = () => (
  <Router>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/list_sample" element={<ListSample />} />
      </Routes>
    </MainLayout>
  </Router>
);

export default App;
