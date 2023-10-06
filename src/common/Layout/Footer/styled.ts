import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  background-color: transparent;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkEmail = styled.a`
  text-decoration: none;
  font-size: 30px;
  font-weight: 700;
  color: unset;
  padding: 10px;
  transition: all 0.6s ease-in-out;

  &:hover {
    filter: brightness(140%);
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoint.mobile}px) {
    font-size: 18px;
    text-align: center;
  } */
`;

export const SocialIcon = styled.a`
  cursor: pointer;
  padding: 10px;
  transition: all 0.6s ease-in;

  & path {
    fill: ${({ theme }) => theme.color.primary};
  }

  &:hover {
    filter: brightness(140%);
  }
`;

export const Copywrite = styled.div`
  text-align: center;
  font-weight: 600;
`;
