import { Lightning, Img, Utils } from "@lightningjs/sdk";

export default class Card extends Lightning.Component {
  static _template() {
    return {
      h: 574,
      w: 350,
      x: 200,
      y: 300,
      mountY: 0.5,
      mountX: 0.7,
      rect: true,
      color: "transparent",
      Image: {
        h: 500,
        w: (w) => w,
        x: 0,
        y: 0,
        rect: true,
        color: 0xffeacf06,
      },
      Info: {
        h: 74,
        w: (w) => w,
        x: 0,
        y: 500,
        rect: true,
        // color: 0xff228435,
        alpha: 0,
        Year: {
          x: 22,
          y: 20,
          text: {
            textColor: 0xff000000,
            fontFace: "Regular",
            fontSize: 26,
          },
        },
        Rating: {
          x: 290,
          y: 20,
          h: 30,
          w: 60,
          rect: true,
          color: 0xffb9b9b9, // for som reason this color is not getting applied
          text: {
            text: "Rating",
            textColor: 0xff000000,
            fontFace: "ExtraBold",
            fontSize: 24,
            color: 0xffb9b9b9,
          },
        },
      },
    };
  }

  set year(value) {
    this.tag("Year").text = value;
  }

  set rating(value) {
    this.tag("Rating").text = value;
  }

  set src(posterPath) {
    const url = `https://image.tmdb.org/t/p/original/${posterPath}`;
    this.tag("Image").src = url;
  }

  _init() {}

  _focus() {
    this.patch({ smooth: { scale: 1.5 }, zIndex: 99 });
    this.tag("Info").patch({ smooth: { alpha: 1 } });
  }

  _unfocus() {
    this.patch({ smooth: { scale: 1 }, zIndex: 10 });
    this.tag("Info").patch({ smooth: { alpha: 0 } });
  }

  _getFocused() {
    return this;
  }
}
