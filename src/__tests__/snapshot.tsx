import { createSnap } from "../__utils__/index";
import { MainNav } from "../app/Navigation";
import Home from "../pages/index";

describe("App", () => {
  it("Home Page", () => {
    const tree = createSnap(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Navigation", () => {
    const tree = createSnap(<MainNav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
