import { Lightning, Utils } from "@lightningjs/sdk";
// import Sidebar from "./components/organisms/Sidebar/Sidebar";
import Menu from "./components/molecules/Menu/Menu";

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
        // color: 0xfffbb03b,
        src: Utils.asset("images/background.png"),
      },
      // Logo: {
      //   mountX: 0.5,
      //   mountY: 1,
      //   x: 960,
      //   y: 600,
      //   src: Utils.asset("images/logo.png"),
      // },

      Menu: { type: Menu },
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
    this._setState("Menu");
  }
  static _states() {
    return [
      class Menu extends this {
        _getFocused() {
          return this.tag("Menu");
        }
        _handleLeft() {
          console.log("App handleLeft");
          this._setState("Menu");
        }
        _handleRight() {
          console.log("App handleRight");
          this._setState(this.state);
        }
      },
    ];
  }
  // _getFocused() {
  //   console.log("App focused ");
  // }
}
