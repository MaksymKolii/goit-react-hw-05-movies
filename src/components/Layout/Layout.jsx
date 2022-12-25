import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './Layout.styled';
import { Container } from '../Container/Container';
import { Section } from 'components/Section/Section';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <Navigation />
      </Header>

      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
};
