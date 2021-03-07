import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class InnKey extends BaseEntity {
  describe() {
    if (this.parent === this.player) {
      return 'An ordinary <strong>inn_door</strong> key, covered in grog.';
    }
    return 'An ordinary <strong>inn_door</strong> key, ready for the taking.';
  }

  pickUp() {
    this.moveNodeTo(this.player);
    return stripIndent`
      Ew, grog all over it! The key must have been abused by its previous owner.

      I’ve placed the <strong>${this.id}</strong> in my inventory.
    `;
  }
}

export default InnKey;
