import { action } from "@ember/object";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class ItemComponent extends Component {
  @tracked
  isAnimating = false;

  @action
  animate() {
    this.isAnimating = true;
  }
}
