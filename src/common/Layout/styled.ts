import styled from "styled-components";

interface ContainerProps {
  $backgroundImage: string;
}

export const Container = styled.div<ContainerProps>`
  max-width: 1400px;
  min-height: 100vh;
  margin: 0 auto;
  background-image: linear-gradient(rgba(0, 18, 36, 0.4), rgba(0, 18, 36, 0.9)),
    ${({ $backgroundImage }) =>
      $backgroundImage ? `url(${$backgroundImage})` : "none"};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 40px;
  text-align: right;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 60px;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
