import Interaction from '../Interaction.js';
import { stripIndent } from '../utils.js';

class GuardPlusWine extends Interaction {
  merge() {
    const { guard } = this.refs;
    guard.drunk = true;
    return stripIndent`
      Even the schtrongescht.. of usch.. can’t reschischt.. a schip of fine <strong>wine</strong>. HIC!

      The <strong>guard</strong> is knocked off his socks.
    `;
  }
}

export default GuardPlusWine;
