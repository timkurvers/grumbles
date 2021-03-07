import BaseEntity from '../BaseEntity.js';

class WizardyBook extends BaseEntity {
  pickUp() {
    this.moveNodeTo(this.player);
    return 'An amazing <strong>wizardy_book</strong> with ancient spells and recipes.';
  }

  describe() {
    return 'An amazing <strong>wizardy_book</strong> with ancient spells and recipes.';
  }
}

export default WizardyBook;
