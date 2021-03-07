import BaseEntity from '../BaseEntity.js';

class BlacksmithingBook extends BaseEntity {
  pickUp() {
    this.moveNodeTo(this.player);
    return 'Blacksmithing is not my best skill. Maybe someone else has a use for it?';
  }

  describe() {
    return 'Blacksmithing is not my best skill. Maybe someone else has a use for it?';
  }
}

export default BlacksmithingBook;
