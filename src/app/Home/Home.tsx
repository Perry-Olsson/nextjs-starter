import { FC } from "react";
import styled from "styled-components";

export const Home: FC = () => {
  return (
    <Container>
      <Title>Home Page</Title>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
`;
