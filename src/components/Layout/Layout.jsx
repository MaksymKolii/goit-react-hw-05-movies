import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Container, Header } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      {/* <Suspense fallback={<div>Loading page...</div>}> */}
      <main>
        <Outlet />
      </main>

      {/* </Suspense> */}
    </Container>
  );
};
