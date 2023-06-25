import { Img, Lightning, Utils } from "@lightningjs/sdk";

export default class Home extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: "0xff000000",
      Header: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: "Welcome",
          fontFace: "ExtraBold",
          fontSize: 128,
        },
        zIndex: 2,
      },
      Background: {
        h: 300,
        w: 300,
        mount: 0.5,
        x: 960,
        y: 440,
        texture: Img(Utils.asset("images/lns.png")).contain(300, 300),
        zIndex: 1,
      },
    };
  }
}
