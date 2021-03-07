import BaseEntity from '../BaseEntity.js';

class Crystal extends BaseEntity {
  pickUp() {
    this.moveNodeTo(this.player);
    return 'What a <strong>crystal</strong>! It’s so shiny, maybe it’s even magical!';
  }

  describe() {
    return 'It’s flawless.';
  }
}

export default Crystal;
