import { MainNav } from "../app/Navigation";
import { darkTheme, lightTheme } from "components";
import { fireEvent, render, screen } from "../__utils__";

describe("Theme", () => {
  it("theme changes on toggle button press", () => {
    render(<MainNav />);
    const themeToggler = screen.getByRole("button", { name: "theme" });
    const nav = screen.getByRole("navigation");

    expect(nav).toHaveStyle(
      `background-color: ${lightTheme.background.primary}`
    );

    fireEvent.click(themeToggler);

    expect(nav).toHaveStyle(
      `background-color: ${darkTheme.background.primary}`
    );
  });
});
