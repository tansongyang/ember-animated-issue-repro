import { action } from "@ember/object";
import { tracked } from "@glimmer/tracking";
import Component from "@glimmer/component";

import move from "ember-animated/motions/move";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";

export default class ListComponent extends Component {
  @tracked
  list = [];

  *transition({ insertedSprites, keptSprites, removedSprites }) {
    console.log(insertedSprites, keptSprites, removedSprites);
    yield Promise.all(
      removedSprites.map((s) => {
        return fadeOut(s, { duration: 500 });
      })
    );
    for (const sprite of keptSprites) {
      fadeIn(sprite);
      move(sprite);
    }
    for (const sprite of insertedSprites) {
      sprite.startTranslatedBy(0, 30);
      fadeIn(sprite);
      yield move(sprite, { duration: 100 });
    }
  }

  @action
  render() {
    this.list = [...Array(32).keys()];
  }
}
