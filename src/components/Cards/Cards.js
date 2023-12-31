import { Lightning, Router } from "@lightningjs/sdk";
import { mockMoviesData } from "../../pages/Movies/data";
import Card from "../Card/Card";

export default class Cards extends Lightning.Component {
  static _template() {
    return {
      Wrapper: {
        rect: true,
        w: 1400,
        h: 574,
        x: 350,
        y: 200,
        color: "transparent",
        Cards: {
          rect: true,
        },
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
        x: (index + 1) * 360,
        title: item.title,
        src: item.poster_path,
        year: item.release_date.slice(0, 4),
        rating: item.vote_average.toString(),
      });
    });
    this.tag("Cards").children = items;
  }

  _focus() {
    this.index = 0;
  }
  _unfocus() {}

  repositionCards() {
    if (this.index >= 0) {
      const cards = this.tag("Cards");
      const wrapperW = this.tag("Wrapper").w;
      const cardsX = cards.transition("x").targetvalue || cards.x;
      const currentCard = cards.children[this.index];
      const currentCardX = currentCard.x + cardsX;
      const currentCardOuterWidth = currentCard.x + currentCard.w;

      if (currentCardX < 0) {
        cards.setSmooth("x", -currentCard.x);
      } else if (currentCardOuterWidth > wrapperW) {
        cards.setSmooth("x", wrapperW - currentCardOuterWidth);
      }
    }
  }

  _handleLeft() {
    if (this.index >= 0) {
      this.index--;
    }
    if (this.index < 0) {
      Router.focusWidget("MenuWidget");
    }
    this.repositionCards();
  }

  _handleRight() {
    if (this.index !== this.dataLength - 1) {
      this.index++;
    }
    this.repositionCards();
  }

  get activeItem() {
    return this.tag("Cards").children[this.index];
  }

  _getFocused() {
    return this.tag("Cards").children[this.index] || this;
  }
}
