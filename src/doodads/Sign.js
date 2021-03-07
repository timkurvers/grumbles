import BaseEntity from '../BaseEntity.js';

class Sign extends BaseEntity {
  describe() {
    if (this.player.find('map')) {
      return 'A useless <strong>sign</strong>.';
    }
    return 'A <strong>sign</strong> with a <strong>map</strong> attached to it.';
  }
}

export default Sign;
