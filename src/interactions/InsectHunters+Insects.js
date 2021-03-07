import Interaction from '../Interaction.js';
import { stripIndent } from '../utils.js';

class InsectHuntersPlusInsects extends Interaction {
  merge() {
    const { player, insects, insect_hunters: hunters } = this.refs;

    player.location.children.delete(insects);
    player.children.delete(hunters);

    return stripIndent`
      The way to the <strong>church_library</strong> is now clear!

      <strong>insect_hunters</strong>: We’ll be on our way now, bye bye!
    `;
  }
}

export default InsectHuntersPlusInsects;
