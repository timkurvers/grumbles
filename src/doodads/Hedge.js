import BaseEntity from '../BaseEntity.js';

class Hedge extends BaseEntity {
  constructor() {
    super();

    this.open = false;
  }

  get id() {
    if (this.open) {
      return 'opened_hedge';
    }
    return 'hedge';
  }

  describe() {
    if (this.open) {
      return 'The <strong>bank</strong> shows in all its glory through the <strong>opened_hedge</strong>.';
    }
    return 'I can see small glimpses of a <strong>bank</strong> through the tight <strong>hedge</strong>.';
  }
}

export default Hedge;
