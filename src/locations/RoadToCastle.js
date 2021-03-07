import Location from '../Location.js';

class RoadToCastle extends Location {
  get connections() {
    return ['courtyard', 'castle_entrance'];
  }

  describe() {
    return 'The <strong>castle</strong> is up ahead, past the <strong>river<strong> - which is inconveniently guarded by a <strong>norwegian_troll</strong>.';
  }

  movePlayerTo(nextLocation) {
    if (nextLocation.is('castle_entrance')) {
      if (this.player.shoes) {
        this.player.moveNodeTo(nextLocation);
        return 'I’m walking on water! EAT THAT crocolisks. Arrived at the <strong>castle_entrance</strong>.';
      }
      return 'There’s a <strong>norwegian_troll</strong> on the bridge. It smells like a pig and is likely dangerous!';
    }
    return super.movePlayerTo(nextLocation);
  }
}

export default RoadToCastle;
