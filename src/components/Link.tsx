import React, { FC, forwardRef } from "react";
import NextLink from "next/link";
import styled from "styled-components";

interface Props {
  href: string;
}

export const Link = forwardRef<
  HTMLAnchorElement,
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, children, ...restProps }, ref) => {
  return (
    <NextLink href={href} passHref>
      <AnchorTag ref={ref} {...restProps}>
        {children}
      </AnchorTag>
    </NextLink>
  );
});

const AnchorTag = styled.a`
  margin: 0 1.5rem;
  font-size: 1.5rem;
`;
