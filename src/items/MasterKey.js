import BaseEntity from '../BaseEntity.js';

class MasterKey extends BaseEntity {
  constructor() {
    super();

    this.tried = false;
  }

  pickUp() {
    this.tried = true;
    return 'The <strong>master_key</strong> is behind a <strong>glass_pane</strong>. The <strong>goblin</strong> won’t allow me anywhere near the original one.';
  }

  duplicate() {
    const { player } = this;

    const blueprint = player.find('key_blueprint');
    if (!blueprint) {
      return 'To perform this spell I need something to make a copy of <strong>master_key</strong>. What could it be? A <strong>frog</strong>, a <strong>banana</strong>?';
    }
    player.children.delete(blueprint);

    const key = new MasterKey();
    key.moveNodeTo(player);
    return key.describe();
  }

  describe() {
    if (this.parent === this.player) {
      return 'Not the original, still a fully functional <strong>master_key</strong>. Locks await!';
    }
    return 'A fabulously shiny master key well protected behind a <strong>glass_pane</strong>.';
  }
}

export default MasterKey;
