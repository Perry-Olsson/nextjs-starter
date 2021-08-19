import styled from "styled-components";
import constants from "components/constants";
import { Link, Button, Flex, useThemeToggler } from "components";

export const MainNav = () => {
  const toggle = useThemeToggler();

  return (
    <Container as="nav">
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
      </div>
      <div>
        <Button onClick={toggle}>Change Theme</Button>
      </div>
    </Container>
  );
};

const Container = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem;
  height: ${constants.mainNav.height};
  border-bottom: solid 1px;
`;
