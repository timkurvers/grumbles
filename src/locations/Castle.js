import Location from '../Location.js';

class Castle extends Location {
  get connections() {
    return ['castle_entrance'];
  }

  reset() {
    const guard = this.game.findRecursively('guard');
    guard.drunk = false;

    const courtyard = this.game.find('courtyard');
    this.player.moveNodeTo(courtyard);

    return 'Aii, the <strong>guard</strong> came and kicked me out of the <strong>castle</strong> onto the <strong>courtyard</strong>. Happiness was so close..';
  }

  movePlayerTo(nextLocation) {
    // TODO: Figure out whether you should be able to leave after opening the vault
    if (this.player.find('princess')) {
      return 'I think it’s not the best idea to leave the <strong>castle</strong>. The <strong>guard</strong> will catch us.';
    }
    return super.movePlayerTo(nextLocation);
  }

  describe() {
    return 'It’s a castle.';
  }
}

export default Castle;
