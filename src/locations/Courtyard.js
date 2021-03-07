import Location from '../Location.js';

class Courtyard extends Location {
  get connections() {
    return ['inn', 'bank', 'forgery', 'bar', 'church', 'road_to_castle'];
  }

  describe() {
    return 'The <strong>courtyard</strong> is the central place of this magical city.';
  }

  movePlayerTo(nextLocation) {
    const hedge = this.find('hedge');

    if (nextLocation.is('bank')) {
      if (!hedge || hedge.open) {
        this.player.moveNodeTo(nextLocation);
        return 'Nothing can stop this powerful wizard! I enter the <strong>bank</strong>.';
      }
      return 'The <strong>hedge</strong> is in the way and it’s protected by a powerful spell. How to get through?';
    }
    return super.movePlayerTo(nextLocation);
  }
}

export default Courtyard;
