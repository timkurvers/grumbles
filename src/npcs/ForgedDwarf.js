import BaseEntity from '../BaseEntity.js';
import { stripIndent } from '../utils.js';

class ForgedDwarf extends BaseEntity {
  constructor(...args) {
    super(...args);

    this.happy = false;
  }

  describe() {
    return 'Is he dwarf or hobbit?';
  }

  talkTo() {
    if (this.happy) {
      return stripIndent`
        <strong>forged_dwarf</strong>: Thanks for the <strong>blacksmithing_book</strong>!
      `;
    }
    return stripIndent`
      <strong>forged_dwarf</strong>: How’re ya?
      <strong>forged_dwarf</strong>: I’m a bit low on blacksmithing supplies.
      <strong>forged_dwarf</strong>: Could you help out?
    `;
  }
}

export default ForgedDwarf;
