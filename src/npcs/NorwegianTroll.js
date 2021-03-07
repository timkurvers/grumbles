import BaseEntity from '../BaseEntity.js';

class NorwegianTroll extends BaseEntity {
  describe() {
    return 'A fat, bloated troll with a Norwegian flag sticking out of his left shoulder.';
  }

  talkTo() {
    return '<strong>norwegian_troll</strong>: Hvem er det som tramper på min bru?';
  }
}

export default NorwegianTroll;
