import React, { FC, forwardRef } from "react";
import NextLink, { LinkProps } from "next/link";
import styled from "styled-components";

interface Props {
  href: string;
  nextLinkProps?: Omit<LinkProps, "passHref" | "href">;
}

export const Link = forwardRef<
  HTMLAnchorElement,
  Props & React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ href, nextLinkProps, children, ...restProps }, ref) => {
  return (
    <NextLink href={href} passHref {...nextLinkProps}>
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
