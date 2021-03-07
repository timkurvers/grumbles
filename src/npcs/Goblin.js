import BaseEntity from '../BaseEntity.js';

class Goblin extends BaseEntity {
  describe() {
    return 'A posh-looking <strong>goblin</strong>, supposedly in charge of the <strong>bank</strong>.';
  }

  talkTo() {
    return '<strong>goblin</strong>: We don’t do business with wizards, KTHXBAI.';
  }
}

export default Goblin;
