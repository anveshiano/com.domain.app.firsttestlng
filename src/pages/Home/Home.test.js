import Home from "./Home";
import { makeCreateComponent } from "@lightningjs/ui-components-test-utils";

const createHomeComponent = makeCreateComponent(Home);

describe("Home tests", () => {
  let home, testRenderer;
  beforeEach(() => {
    [home, testRenderer] = createHomeComponent();
  });

  afterEach(() => {
    home = null;
    testRenderer = null;
  });

  it("should render Home", () => {
    expect(home).toMatchSnapshot();
  });

  it("should display text", () => {
    const mainHome = home._getFocused();
    let text = home.tag("Header").text.text;
    expect(text).toEqual("Welcome");
  });
});
