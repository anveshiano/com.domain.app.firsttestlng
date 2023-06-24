import { Lightning, Colors, Router } from "@lightningjs/sdk";

export default class MenuWidgetItem extends Lightning.Component {
  static _template() {
    return {
      h: 100,
      w: 340,
      x: 20,
      rect: true,
      color: "transparent",
      Label: {
        h: (h) => h / 2,
        w: 340,
        y: (h) => h / 2,
        x: 20,
        mountY: 0.5,
        text: {
          text: "MenuItem",
          fontSize: 36,
          textColor: 0xffffffff,
          fontFace: "SemiBold",
        },
        path: this.path,
      },
    };
  }

  /**
   * @param {{ text: string; }} value
   */
  set label(value) {
    if (typeof value === "string") {
      value = { text: value };
    }
    this.tag("Label").text = value;
  }

  _focus() {
    Router.navigate(this.path);
    console.log("I am coming here:", this.path);
    this.patch({
      smooth: {},
      Label: {
        smooth: {
          scale: 1.5,
          x: 100,
        },
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: {},
      Label: {
        smooth: {
          scale: 1,
          x: 20,
        },
      },
    });
  }
}
