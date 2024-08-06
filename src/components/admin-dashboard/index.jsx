// // // components/Layout.js
// // import React from 'react';
// // import styled from 'styled-components';
// // import Header from './Header';
// // import Sidebar from './Sidebar';

// // const LayoutWrapper = styled.div`
// //   display: grid;
// //   grid-template-areas:
// //     "header header"
// //     "sidebar main";
// //   grid-template-columns: 250px 1fr;
// //   grid-template-rows: auto 1fr;
// //   min-height: 100vh;
// // `;

// // const HeaderWrapper = styled.header`
// //   grid-area: header;
// //   position: sticky;
// //   top: 0;
// //   z-index: 1000;
// //   background-color: #fff;
// //   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // `;

// // const SidebarWrapper = styled.aside`
// //   grid-area: sidebar;
// //   background-color: #f8f9fa;
// //   border-right: 1px solid #dee2e6;
// //   overflow-y: auto;
// //   height: calc(100vh - 60px); // Adjust based on your header height
// //   position: sticky;
// //   top: 60px; // Should match your header height
// // `;

// // const MainContent = styled.main`
// //   grid-area: main;
// //   padding: 20px;
// //   overflow-y: auto;
// // `;

// // const Layout = ({ children }) => {
// //   return (
// //     <LayoutWrapper>
// //       <HeaderWrapper>
// //         <Header />
// //       </HeaderWrapper>
// //       <SidebarWrapper>
// //         <Sidebar />
// //       </SidebarWrapper>
// //       <MainContent>
// //         {children}
// //       </MainContent>
// //     </LayoutWrapper>
// //   );
// // };

// // export default Layout;


// // components/Layout.js
// import React from 'react';
// import styled from 'styled-components';
// import Header from './Header';
// import Sidebar from './Sidebar';

// const LayoutWrapper = styled.div`
//   display: grid;
//   grid-template-areas:
//     "header header"
//     "sidebar main";
//   grid-template-columns: 250px 1fr;
//   grid-template-rows: auto 1fr;
//   min-height: 100vh;
// `;

// const HeaderWrapper = styled.header`
//   grid-area: header;
//   position: sticky;
//   top: 0;
//   z-index: 1000;
//   background-color: #fff;
//   box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// `;

// const SidebarWrapper = styled.aside`
//   grid-area: sidebar;
//   background-color: #f8f9fa;
//   border-right: 1px solid #dee2e6;
//   overflow-y: auto;
//   height: calc(100vh - 60px); // Adjust based on your header height
//   position: sticky;
//   top: 60px; // Should match your header height
// `;

// const MainContent = styled.main`
//   grid-area: main;
//   padding: 20px;
//   overflow-y: auto;
// `;

// const Layout = ({ children }) => {
//   return (
//     <LayoutWrapper>
//       <HeaderWrapper>
//         <Header />
//       </HeaderWrapper>
//       <SidebarWrapper>
//         <Sidebar />
//       </SidebarWrapper>
//       <MainContent>
//         {children}
//       </MainContent>
//     </LayoutWrapper>
//   );
// };

// export default Layout;


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
  background-color: #343a40; // Match Sidebar background color
  overflow-y: auto;
  height: 100vh; // Full height for sidebar
  position: fixed; // Fix the sidebar position
  top: 0;
  left: 0;
  width: 250px;
  padding-top: 60px; // Adjust for header height
`;

const MainContent = styled.main`
  grid-area: main;
  padding: 20px;
  overflow-y: auto;
  margin-left: 250px; // Adjust for fixed sidebar width
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
