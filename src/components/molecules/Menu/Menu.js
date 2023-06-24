import { Lightning, Colors } from "@lightningjs/sdk";
import MenuItem from "../../Atoms/MenuItem/MenuItem";
import { navItems } from "./data";

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      h: 400,
      w: 300,
      x: 0,
      y: 0,
      rect: true,
      color: 0xffb6c444,
    };
  }
  _init() {
    this.index = 0;
    this.dataLength = navItems.length;
    const buttons = [];
    navItems.map((item, index) => {
      buttons.push({ type: MenuItem, y: index * 100, label: item });
    });
    this.children = buttons;
  }

  _handleUp() {
    console.log("handleUp");
    if (this.index !== 0) {
      this.index -= 1;
    }
  }

  _handleDown() {
    if (this.index !== this.dataLength - 1) {
      this.index += 1;
    }
  }

  _getFocused() {
    console.log("focused element's index:", this.index);
    return this.children[this.index];
  }
}
