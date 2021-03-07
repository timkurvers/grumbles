import Location from '../Location.js';

class ChurchLibrary extends Location {
  get connections() {
    return ['church'];
  }

  describe() {
    return 'Piles of books. EVERYWHERE.';
  }
}

export default ChurchLibrary;
