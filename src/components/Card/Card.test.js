import { makeCreateComponent } from "@lightningjs/ui-components-test-utils";
import Card from "./Card";

const createCardComponent = makeCreateComponent(Card);

describe("Card tests", () => {
  let card, testRenderer;
  beforeEach(() => {
    [card, testRenderer] = createCardComponent();
  });

  afterEach(() => {
    card = null;
    testRenderer = null;
  });

  it("should render Card", () => {
    expect(card).toMatchSnapshot();
  });
});
