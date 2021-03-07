import BaseEntity from '../BaseEntity.js';

class InnDoor extends BaseEntity {
  constructor() {
    super();

    this.open = false;
  }

  unlock() {
    if (this.open) {
      return 'I’ve already unlocked the <strong>inn_door</strong>.';
    }
    if (this.find('inn_key')) {
      this.open = true;
      return 'I swiftly unlock the <strong>inn_door</strong>. The <strong>courtyard</strong> appears.';
    }
    return 'It’s impossible to unlock this door without an <strong>inn_key</strong>.';
  }

  describe() {
    return 'A very ordinary <strong>inn_door</strong>.';
  }
}

export default InnDoor;
