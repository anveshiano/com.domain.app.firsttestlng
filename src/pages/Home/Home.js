import { Lightning, Router } from "@lightningjs/sdk";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: "transparent",
      Header: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: "Welcome",
          fontFace: "ExtraBold",
          fontSize: 128,
        },
      },
    };
  }
  _handleUp() {}
  _init() {
    console.log("Home rendered");
  }
  _focus() {
    console.log("focus Home page");
  }
}
