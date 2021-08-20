import { Link } from "components";
import { render, screen, prettyDOM, fireEvent } from "../../__utils__";

describe("Link", () => {
  it("Passes NextLink props to Link component", () => {
    const onFocus = jest.fn();
    render(
      <Link href="/" nextLinkProps={{ as: "/home" }} onFocus={onFocus}>
        Link props
      </Link>
    );

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("/home");
    fireEvent.focusIn(link);
    expect(onFocus).toHaveBeenCalled();
  });
});
