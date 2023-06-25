import { Lightning } from "@lightningjs/sdk";
import { Cards } from "../../components/Cards";

export default class Movies extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff0e1117,
      Cards: {
        type: Cards,
      },
    };
  }

  _init() {}

  _focus() {
    console.log("focus Movies");
  }

  _getFocused() {
    return this.tag("Cards");
  }
}
