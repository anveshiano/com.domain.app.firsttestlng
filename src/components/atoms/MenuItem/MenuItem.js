import { Lightning, Colors } from "@lightningjs/sdk";

export default class MenuItem extends Lightning.Component {
  static _template() {
    return {
      h: 100,
      w: 300,
      x: 0,
      y: 500,

      rect: true,
      // color: 0xff763ffc,
      Label: {
        h: (h) => h / 2,
        w: 300,
        y: (h) => h / 2,
        x: 20,
        mountY: 0.5,
        text: { text: "Menu Item", fontSize: 36, textColor: 0xff000000 },
      },
    };
  }
  _init() {
    console.log("MenuItem renderd");
    this.patch({});
  }

  // Other functions and methods

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
    this.patch({
      smooth: { color: 0xff763ffc },
      Label: {
        smooth: { color: 0xffffffff, scale: 1.5, x: 90 },
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: { color: 0xffffffff },
      Label: {
        smooth: { color: 0xff000000, scale: 1, x: 20 },
      },
    });
  }
}
