import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Hearthstone extends BaseEntity {
  pickUp() {
    this.player.moveNodeTo(this.game.find('inn'));
    if (this.player.find('princess')) {
      return stripIndent`
        WOOOSSHH!

        And they lived happily ever after.

        Thanks for playing!

        - Peter Sergeev (@toothfairy)
        - Sindre Moen (@sindrenm)
        - Tim Kurvers (@timkurvers)
      `;
    }
    if (this.game.find('castle').find('princess') || this.game.find('castle').find('sloth')) {
      return 'WOOOSSHH! I’m back at the <strong>inn</strong>. Didn’t I forget something in the <strong>castle</strong>?';
    }
    return 'WOOOSSHH! I’m back at the <strong>inn</strong>.';
  }

  describe() {
    return 'Nothing is better than home, sweet home. This <strong>hearthstone</strong> may <strong>GET</strong> me back to my lovely <strong>inn</strong>.';
  }
}

export default Hearthstone;
