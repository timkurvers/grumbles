import BaseEntity from '../BaseEntity.js';

import Princess from '../npcs/Princess.js';

class Vault extends BaseEntity {
  constructor() {
    super();

    this.open = false;
  }

  unlock() {
    const gate = this.game.findRecursively('castle_gate');
    const masterKey = this.find('master_key');

    if (gate.open) {
      const castle = this.player.parent;
      return castle.reset();
    }
    if (!masterKey) {
      return 'The <strong>vault</strong> requires a <strong>master_key</strong>, where can I find it?';
    }
    const castle = this.parent;
    castle.children.delete(this);
    const princess = new Princess();
    princess.moveNodeTo(castle);
    return 'The <strong>vault</strong> opens and from the shadows appears ... <strong>sloth</strong>.';
  }

  describe() {
    return 'It’s a Franz Jäger 1400k <strong>vault</strong>, supposedly impenetrable and holding the <strong>princess</strong>.';
  }
}

export default Vault;
