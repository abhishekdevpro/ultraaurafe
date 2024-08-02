// components/Layout.js
import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Sidebar from './Sidebar';

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main";
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr;
  min-height: 100vh;
`;

const HeaderWrapper = styled.header`
  grid-area: header;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  overflow-y: auto;
  height: calc(100vh - 60px); // Adjust based on your header height
  position: sticky;
  top: 60px; // Should match your header height
`;

const MainContent = styled.main`
  grid-area: main;
  padding: 20px;
  overflow-y: auto;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
};

export default Layout;