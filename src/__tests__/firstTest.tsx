import { render, screen } from "../__utils__/index";
import Home from "../pages/index";
describe("App", () => {
  it("renders a heading", () => {
    render(<Home />);
    const title = screen.getByRole("heading", { name: "Home Page" });
    expect(title).toBeInTheDocument();
  });
});
