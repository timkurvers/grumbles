import Location from '../Location.js';

class CastleEntrance extends Location {
  get connections() {
    return ['road_to_castle', 'castle'];
  }

  describe() {
    return 'The <strong>guard</strong> watches the <strong>castle</strong> grounds 24/7. No entrance for pleb wizards.';
  }

  movePlayerTo(nextLocation) {
    if (nextLocation.is('castle')) {
      const guard = this.find('guard');
      if (guard.drunk) {
        this.player.moveNodeTo(nextLocation);
        return 'I will sneak into the <strong>castle</strong> while the <strong>guard</strong> is drunk. The beautiful <strong>princess</strong> and untold riches await!';
      }
      return this.describe();
    }
    return super.movePlayerTo(nextLocation);
  }
}

export default CastleEntrance;
