import { Lightning, Img, Utils } from "@lightningjs/sdk";

export default class Card extends Lightning.Component {
  static _template() {
    return {
      h: 400,
      w: 400,
      x: 400,
      y: 200,
      rect: true,
      mount: 0.5,
      color: 0xfff7f7f7,
      Image: {
        h: 300,
        w: (w) => w,
        x: 0,
        y: 0,
        rect: true,
        color: 0xffeacf06,
        // src: this.src,
        texture: Img(Utils.asset("images/logo.png")).contain(300, 400),
      },
      Info: {
        h: 90,
        w: (w) => w,
        x: 0,
        y: 300,
        rect: true,
        color: 0xff228435,
        Title: {
          x: 20,
          y: 20,
          text: {
            text: "Movie Title",
            textColor: 0xff000000,
            fontFace: "Regular",
            fontSize: 36,
          },
        },
        // Year: {
        //   x: 20,
        //   y: 90,
        //   text: {
        //     text: "2022",
        //     textColor: 0xff000000,
        //     fontFace: "Regular",
        //     fontSize: 26,
        //   },
        // },
      },
    };
  }

  set title(value) {
    this.tag("Title").text = value;
  }

  _init() {}

  _focus() {
    this.patch({ smooth: { scale: 1.5 } });
  }

  _unfocus() {
    this.patch({ smooth: { scale: 1 } });
  }

  _getFocused() {}
}
