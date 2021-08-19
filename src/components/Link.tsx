import React, { FC } from "react";
import NextLink from "next/link";
import styled from "styled-components";

interface Props {
  href: string;
}

export const Link: FC<Props & React.AnchorHTMLAttributes<HTMLAnchorElement>> =
  ({ href, children, ...restProps }) => {
    return (
      <NextLink href={href} passHref>
        <AnchorTag {...restProps}>{children}</AnchorTag>
      </NextLink>
    );
  };

const AnchorTag = styled.a`
  margin: 0 1.5rem;
  font-size: 1.5rem;
`;
