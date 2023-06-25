import { Lightning, Colors, Router } from "@lightningjs/sdk";
import { navItems } from "./data";
import MenuWidgetItem from "./MenuWidgetItem";
import Logo from "../../components/Logo";

export default class MenuWidget extends Lightning.Component {
  static _template() {
    return {
      h: 1080,
      w: 340,
      x: 0,
      y: 0,
      rect: true,
      color: 0xff171a21,
      Items: { y: 200 },
      Logo: {
        type: Logo,
      },
    };
  }
  _init() {
    // Generate Menu Items
    this.index = 0;
    this.dataLength = navItems.length;
    const items = [];
    navItems.map((item, index) => {
      items.push({
        type: MenuWidgetItem,
        y: index * 100,
        label: item.navItem,
        path: item.path,
      });
    });
    this.tag("Items").children = items;
  }

  _handleUp() {
    if (this.index !== 0) {
      this.index--;
    }
  }

  _handleDown() {
    if (this.index !== this.dataLength - 1) {
      this.index++;
    }
  }

  get activeItem() {
    return this.tag("Items").children[this.index];
  }

  _getFocused() {
    return this.tag("Items").children[this.index] || this;
  }
  _handleRight() {
    Router.focusPage();
  }
  _handleLeft() {
    Router.focusWidget("MenuWidget");
  }
}
