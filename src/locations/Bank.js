import Location from '../Location.js';

class Bank extends Location {
  get connections() {
    return ['courtyard'];
  }

  describe() {
    return 'The goblins running the <strong>bank</strong> probably drive Bentleys. Bling!';
  }
}

export default Bank;
