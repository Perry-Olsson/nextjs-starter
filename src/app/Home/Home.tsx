import { FC } from "react";
import styled from "styled-components";
import { Flex } from "components";

export const Home: FC = () => {
  return (
    <Container>
      <Title>Home Page</Title>
    </Container>
  );
};

const Container = styled(Flex)`
  margin-top: 50px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.text.primary};
`;
