import BaseEntity from '../BaseEntity.js';

class Forge extends BaseEntity {
  describe() {
    return 'The <strong>forge</strong> is glowing red hot while its steam reaches for the chimneys.';
  }

  pickUp() {
    return '<strong>forged_dwarf</strong>: Get yer filthy hands of m’forge, laddy!';
  }
}

export default Forge;
