import { Utils, Router } from "@lightningjs/sdk";
import routes from "./lib/routes";
import MenuWidget from "./widgets/MenuWidget";

export const initFactory = (stageInstance) => {
  this.stage = stageInstance;
};
export default class App extends Router.App {
  _setup() {
    // initFactory(this.stage);
    Router.startRouter(routes, this);
  }
  static getFonts() {
    return [
      { family: "Regular", url: Utils.asset("fonts/Inter-Regular.ttf") },
      { family: "SemiBold", url: Utils.asset("fonts/Inter-SemiBold.ttf") },
      {
        family: "ExtraBold",
        url: Utils.asset("fonts/Inter-ExtraBold.ttf"),
      },
      {
        family: "Black",
        url: Utils.asset("fonts/Inter-Black.ttf"),
      },
    ];
  }

  static _template() {
    return {
      Widgets: {
        MenuWidget: {
          type: MenuWidget,
        },
      },
    };
  }

  _handleDown() {}

  _init() {
    Router.focusWidget("MenuWidget");
  }
}
