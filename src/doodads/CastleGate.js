import BaseEntity from '../BaseEntity.js';

class CastleGate extends BaseEntity {
  constructor() {
    super();

    this.open = true;
  }

  lock() {
    this.open = false;
    return this.describe();
  }

  unlock() {
    const { player } = this;
    const { location } = player;
    if (player.find('princess') || location.find('princess') || location.find('sloth')) {
      return 'It’s not the best idea to open <strong>castle_gate</strong> now. <strong>guard</strong> will catch and punish me for sneaking in.';
    }
    this.open = true;
    return this.describe();
  }

  describe() {
    if (this.open) {
      return 'The gate is opened. The <strong>guard</strong> could sober up anytime, though.';
    }
    return 'Nobody can get in. I’m tête-à-tête with my destiny.';
  }
}

export default CastleGate;
