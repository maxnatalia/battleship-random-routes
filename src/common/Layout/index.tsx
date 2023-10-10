import Footer from "./Footer";
import { Container, Main, Header, Title } from "./styled";

interface LayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
}

const Layout = ({ children, backgroundImage }: LayoutProps) => {
  return (
    <Container $backgroundImage={backgroundImage}>
      <Header>
        <Title>BattleShip: Random Routes</Title>
      </Header>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default Layout;
