import styled from "styled-components";

export const Button = styled.button<{ negative?: boolean }>`
  padding: 0.8rem 1.5rem;
  border: solid 1px;
  border-radius: 3rem;
  background-color: ${({ theme, negative }) =>
    negative ? theme.background.primary : theme.background.secondary};
  color: ${({ theme, negative }) =>
    negative ? theme.text.primary : theme.text.secondary};
  transition: all 0.2s ease-in-out;
  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme, negative }) =>
        negative ? theme.background.secondary : theme.background.primary};
      color: ${({ theme, negative }) =>
        negative ? theme.text.secondary : theme.text.primary};
    }
  }
`;
