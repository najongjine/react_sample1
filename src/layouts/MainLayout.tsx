import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// 애플리케이션의 공통 레이아웃을 정의하는 컴포넌트입니다. 예를 들어, 모든 페이지에 공통적으로 표시되는 헤더나 푸터를 이 컴포넌트에 포함시킬 수 있습니다. 이렇게 하면 각 페이지마다 중복 코드를 작성하지 않아도 됩니다.
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
