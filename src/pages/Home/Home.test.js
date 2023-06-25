import Home from "./Home";

describe("Home", () => {
  it("should render", () => {
    expect(Home).toMatchSnapshot();
  });

  it("should display text", () => {
    const mainHome = Home._getFocused(); // TypeError: _Home.default._getFocused is not a function
    let text = Home.tag("Header").text.text;
    expect(text).toEqual("Welcome");
  });
});
