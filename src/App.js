import { Lightning, Utils } from "@lightningjs/sdk";
import Sidebar from "./components/organisms/Sidebar/Sidebar";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Roboto-Regular.ttf") },
    ];
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        src: Utils.asset("images/background.png"),
      },
      Sidebar: { type: Sidebar },
      Text: {
        mount: 0.5,
        x: 960,
        y: 720,
        text: {
          text: "trrrr",
          fontFace: "Regular",
          fontSize: 64,
          textColor: 0xbbffffff,
        },
      },
    };
  }

  _init() {
    this._setState("Sidebar");
  }
  static _states() {
    return [
      class Sidebar extends this {
        _getFocused() {
          return this.tag("Sidebar");
        }
        _handleLeft() {
          console.log("App handleLeft");
          //   this._setState("Sidebar");
        }
        _handleRight() {
          console.log("App handleRight");
          // this._setState(this.state);
        }
      },
    ];
  }
}
