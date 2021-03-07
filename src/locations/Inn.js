import Location from '../Location.js';

class Inn extends Location {
  get connections() {
    return ['courtyard'];
  }

  movePlayerTo(nextLocation) {
    const door = this.find('inn_door');
    if (!door.open) {
      return 'The <strong>inn_door</strong> is closed, there has to be a key nearby?';
    }
    return super.movePlayerTo(nextLocation);
  }

  describe() {
    return 'An ordinary <strong>inn</strong>. The usual.';
  }
}

export default Inn;
