import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class Bartender extends BaseEntity {
  describe() {
    return 'He seems oddly quiet for a <strong>bartender</strong>.';
  }

  talkTo() {
    return stripIndent`
      <strong>bartender</strong>: Hnnngnhhhghnn....
      <strong>bartender</strong>: Could you keep it down? I’m hung-over.
    `;
  }
}

export default Bartender;
