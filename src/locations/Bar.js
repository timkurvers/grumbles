import Location from '../Location.js';

class Bar extends Location {
  get connections() {
    return ['courtyard'];
  }

  describe() {
    return 'Apart from the <strong>wine</strong> being seemingly infinite, this is a fairly ordinary <strong>bar</strong>.';
  }
}

export default Bar;
