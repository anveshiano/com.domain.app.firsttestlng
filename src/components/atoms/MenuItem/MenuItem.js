import { Lightning, Colors } from "@lightningjs/sdk";

export default class MenuItem extends Lightning.Component {
  static _template() {
    return {
      h: 50,
      w: 300,
      x: 0,
      y: 500,

      rect: true,
      color: 0xff763ffc,
      Label: {
        h: (h) => h / 2,
        w: 300,
        y: (h) => h / 2,
        x: 10,
        mountY: 0.5,
        text: { text: "Menu Item", fontSize: 20, color: Colors("black") },
      },
    };
  }
  _init() {
    console.log("MenuItem renderd");
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
}
