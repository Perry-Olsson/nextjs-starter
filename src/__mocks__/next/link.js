import React from "react";

export default function Link({ children, href, ...restProps }) {
  restProps.onClick = jest.fn((href) => href);
  return React.cloneElement(children, { href, ...restProps });
}
