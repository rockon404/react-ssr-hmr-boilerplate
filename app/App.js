import React from 'react';
import styled from 'styled-components';
import { Header, NavBar } from 'app-features/Layout';
import { SwitchWithRoutes } from 'app-common/components';
import { applyGlobalStyles } from 'app-common/styles';
import routes from './routes';

applyGlobalStyles();

const PageWrapper = styled.div`
  padding: 0 24px;
`;

const App = () => (
  <div>
    <Header />
    <NavBar />
    <PageWrapper>
      <SwitchWithRoutes routes={routes} />
    </PageWrapper>
  </div>
);

export default App;
