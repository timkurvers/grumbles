import BaseEntity from '../BaseEntity.js';

class InsectHunters extends BaseEntity {
  constructor() {
    super();

    this.active = false;
  }

  describe() {
    return 'They look like ghost-busters for, you know, <strong>insects</strong>.';
  }

  pickUp() {
    if (this.active) {
      this.moveNodeTo(this.player);
      return 'Great! These guys are joining to help me out with the <strong>insects</strong> in the <strong>church</strong>.';
    }
    return 'I have no business with these gentlemen.';
  }

  talkTo() {
    if (this.active) {
      return '<strong>insect_hunters</strong>: Oh, <strong>insects</strong> you say? TAKE US, say we. We’ll help.';
    }
    return '<strong>insect_hunters</strong>: You wouldn’t happen to have any business for us?';
  }
}

export default InsectHunters;
