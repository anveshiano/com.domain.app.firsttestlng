import { Lightning } from "@lightningjs/sdk";

export default class NewsFeed extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 1920,
      h: 1080,
      color: 0xff30be96,
      Header: {
        mount: 0.5,
        x: 960,
        y: 540,
        text: {
          text: "News Feed",
          fontFace: "ExtraBold",
          fontSize: 128,
        },
      },
    };
  }
  _init() {
    console.log("NewsFeed rendered");
  }
}