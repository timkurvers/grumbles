import Interaction from '../Interaction.js';
import { stripIndent } from '../utils.js';

class CrystalPlusStick extends Interaction {
  merge() {
    const { stick, crystal, player } = this.refs;

    stick.crystal = true;
    player.children.delete(crystal);

    return stripIndent`
      AHA! A <strong>crystal_stick</strong>!

      It’s no longer lame, but still not at its full power.
    `;
  }
}

export default CrystalPlusStick;
