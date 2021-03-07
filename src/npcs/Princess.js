import BaseEntity from '../BaseEntity.js';

class Princess extends BaseEntity {
  constructor() {
    super();

    this.cursed = true;
  }

  get id() {
    if (this.cursed) {
      return 'sloth';
    }
    return 'princess';
  }

  describe() {
    if (this.cursed) {
      return 'I’ve never seen such a creature: a hypersonic <strong>sloth</strong>! With a crown on its head! But it oozes with dark magic.';
    }
    return 'The <strong>princess</strong> is free from the dark curse! I should take her with me!';
  }

  pickUp() {
    const { player } = this;
    const gate = player.location.find('castle_gate');

    if (gate.open) {
      const castle = player.location;
      return castle.reset();
    }
    if (this.cursed) {
      return 'Do I need a sloth? I have a Bigglesworth-cat to feed.';
    }
    this.moveNodeTo(player);
    return 'Now we can be together ’til the end of time. Let’s <strong>hearthstone</strong> away from here.';
  }

  talkTo() {
    if (this.cursed) {
      return '<strong>sloth</strong>: EEP. EEP. EEP.';
    }
    return '<strong>princess</strong>: Grumbles, let’s go!';
  }
}

export default Princess;
