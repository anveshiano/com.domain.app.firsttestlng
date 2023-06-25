import { Lightning, Router } from "@lightningjs/sdk";
import { Card } from "../../components/Card";
import { mockMoviesData } from "./data";

export default class Movies extends Lightning.Component {
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
          text: "Movies",
          fontFace: "ExtraBold",
          fontSize: 128,
        },
      },
      Cards: {
        w: 1200,
        h: 600,
        x: 400,
        y: 200,
        rect: true,
      },
    };
  }

  _init() {
    // Generate Card Items
    this.index = 0;
    this.dataLength = mockMoviesData.length;
    const items = [];
    mockMoviesData.map((item, index) => {
      items.push({
        type: Card,
        title: item.title,
        x: (index + 1) * 420,
      });
    });
    this.tag("Cards").children = items;
  }

  _focus() {
    console.log("focus Movies");
  }

  _getFocused() {
    return this.tag("Cards");
  }

  _handleLeft() {
    Router.focusWidget("MenuWidget");
  }
}
