import { Lightning, Img, Utils } from "@lightningjs/sdk";

export default class Logo extends Lightning.Component {
  static _template() {
    return {
      h: 140,
      w: 340,
      x: 0,
      rect: true,
      color: 0x00000000,
      Contain: {
        x: (w) => w / 2,
        y: (h) => h / 2,
        mount: 0.5,
        texture: {
          type: Lightning.textures.ImageTexture,
          src: Utils.asset("images/logo.png"),
          resizeMode: { type: "contain", w: 140, h: 60 },
        },
      },
    };
  }
  _init() {
    this.patch({ y: this.stage.h - 200 });
  }
}
