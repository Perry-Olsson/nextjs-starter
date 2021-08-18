import { createSnap, render, screen } from "../__utils__/index";
import Home from "../pages/index";
import renderer from "react-test-renderer";
describe("App", () => {
  it("renders a heading", () => {
    renderer.act;
    const tree = createSnap(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
