// import { Lightning } from "@lightningjs/sdk";
// import Menu from "../../molecules/Menu/Menu";
// import Logo from "../../atoms/Logo/Logo";

// export default class Sidebar extends Lightning.Component {
//   static _template() {
//     return {
//       w: 340,
//       x: 0,
//       y: 0,
//       rect: true,
//       color: 0xfff7d644,
//       Menu: {
//         y: 200,
//         type: Menu,
//       },
//       Logo: {
//         type: Logo,
//       },
//     };
//   }
//   _init() {
//     const fullHeight = this.stage.h;
//     this.patch({ h: fullHeight });
//     this._setState("Menu");
//   }
//   static _states() {
//     return [
//       class Menu extends this {
//         _getFocused() {
//           return this.tag("Menu");
//         }
//       },
//     ];
//   }
// }
