import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Floppy extends BaseEntity {
  describe() {
    return stripIndent`
      Contains my game state.

      <strong>DELETE</strong> the <strong>floppy</strong> to reset the game.
    `;
  }

  drop() {
    this.game.reset();
    return stripIndent`
      Goodbye cruel world! Hello World!

      I’m back at the <strong>inn</strong>.
    `;
  }
}

export default Floppy;
