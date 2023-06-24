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
      color: 0xff0e1117,
      Items: { y: 150 },
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
      this.index -= 1;
    }
  }

  _handleDown() {
    if (this.index !== this.dataLength - 1) {
      this.index += 1;
    }
  }

  get activeItem() {
    return this.tag("Items").children[this.index];
  }

  _getFocused() {
    // return this.activeItem || this;
    return this.tag("Items").children[this.index] || this;
  }
  _handleRight() {
    // console.log("==== _handleRight ");
    Router.focusPage();
  }
  _handleLeft() {
    //  console.log("====_handleLeft ");
    Router.focusWidget("MenuWidget");
  }
  _handleEnter() {
    // Router.focusPage();
    console.log("focus Handle Enter");
  }

  _focus() {
    console.log("focus MenuWidget");
  }
}
