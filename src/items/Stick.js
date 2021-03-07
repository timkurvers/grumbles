import BaseEntity from '../BaseEntity.js';

class Stick extends BaseEntity {
  constructor() {
    super();

    this.crystal = false;
    this.epic = false;
  }

  get id() {
    if (this.epic) {
      return 'epic_wand';
    }
    if (this.crystal) {
      return 'crystal_stick';
    }
    return 'stick';
  }

  pickUp() {
    this.moveNodeTo(this.player);
    return 'Ah, my trusted <strong>stick</strong>.';
  }

  describe() {
    if (this.epic) {
      return 'My amazeballs over 9000 stick. It’s magical and what not.';
    }
    if (this.crystal) {
      return 'My trusted stick with a crystal socketed onto it.';
    }
    return 'My trusted <strong>stick</strong>. It has a socket at the end.';
  }
}

export default Stick;
