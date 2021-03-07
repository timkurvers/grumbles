import Location from '../Location.js';

class Forgery extends Location {
  get connections() {
    return ['courtyard'];
  }

  describe() {
    return 'It’s extremely hot and steamy in here.';
  }
}

export default Forgery;
