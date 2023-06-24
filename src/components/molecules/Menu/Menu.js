import { Lightning, Colors } from "@lightningjs/sdk";
import MenuItem from "../../Atoms/MenuItem/MenuItem";

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      h: 400,
      w: 300,
      x: 0,
      y: 0,
      rect: true,
      color: 0xffb6c444,
      MenuItem1: {
        y: 200,
        type: MenuItem,
        label: { text: "Search" },
      },
      MenuItem2: {
        y: 252,
        type: MenuItem,
        label: { text: "Movies" },
      },
      MenuItem3: {
        y: 304,
        type: MenuItem,
        label: { text: "News Feed" },
      },
    };
  }
  _init() {}
}
