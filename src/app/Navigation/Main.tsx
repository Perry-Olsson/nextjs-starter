import styled from "styled-components";
import constants from "components/constants";
import { useThemeToggler } from "components";
export const MainNav = () => {
  const toggle = useThemeToggler();

  return (
    <Container>
      <div>
        <h2>Home</h2>
      </div>
      <div>
        <button onClick={toggle}>theme</button>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: ${constants.mainNav.height};
  border-bottom: solid 1px;
`;
