import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Guard extends BaseEntity {
  constructor() {
    super();

    this.drunk = false;
  }

  describe() {
    if (this.drunk) {
      return 'Drunk as a lord, pff.. weakling. I can drink twice as much!';
    }
    return 'The <strong>guard</strong> watches the <strong>castle</strong> grounds 24/7.';
  }

  talkTo() {
    return stripIndent`
      <strong>me</strong>: LOOK! A three-headed monkey!
      <strong>guard</strong>: Wrong game bro.
    `;
  }
}

export default Guard;
