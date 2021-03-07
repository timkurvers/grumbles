import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class KeyBlueprint extends BaseEntity {
  pickUp() {
    const masterKey = this.game.findRecursively('master_key');
    const dwarf = this.game.findRecursively('forged_dwarf');

    if (!masterKey.tried) {
      return 'Why would I need a key blueprint?';
    }
    if (!dwarf.happy) {
      return stripIndent`
        Dwarves are known to be greedy. <strong>forged_dwarf</strong> won’t give me the <strong>key_blueprint</strong>.

        I might need to give him something in exchange.
      `;
    }
    this.moveNodeTo(this.player);
    return 'The <strong>key_blueprint</strong> is mine!';
  }

  describe() {
    return 'It’s a blueprint for a key.';
  }
}

export default KeyBlueprint;
